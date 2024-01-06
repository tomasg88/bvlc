import sanityClient from 'part:@sanity/base/client';

const client = sanityClient.withConfig({ apiVersion: 1 });

const OLD_TYPE = 'equipment'; // review the _type we want to change
const NEW_TYPE = 'specialty'; // target _type
const fetchDocuments = () =>
  client.fetch(
    `*[_type == $oldType && (
      _id == "1914595c-60fd-408f-be0c-be0594ad6252" ||
      _id == "2ddb1da1-85f6-45a5-a6d5-70f36432b832" ||
      _id == "99a20daa-6f79-49a8-b5ac-33560042708c"
    )][0...10] {..., "incomingReferences": *[references(^._id)]{...}}`,
    { oldType: OLD_TYPE }
  );

const buildMutations = (docs) => {
  const mutations = [];

  docs.forEach((doc) => {
    console.log('equipment', doc._id);
    // Updating a document _type field isn't allowed, we have to create a new and delete the old
    const newDocId = `${doc._id}-migrated`;
    const newDocument = { ...doc, ...{ _id: newDocId, _type: NEW_TYPE } };
    delete newDocument.incomingReferences;
    delete newDocument._rev;

    mutations.push({ create: newDocument });

    // Patch each of the incoming references
    doc.incomingReferences.forEach((referencingDocument) => {
      console.log('ref', referencingDocument._id);
      // ⚠️ We're assuming the field is named the same as the type!
      // There might be another structure involved, perhaps an array, that needs patching
      const updatedReference = {
        [NEW_TYPE]: {
          _ref: newDocId,
          _type: 'reference',
        },
      };
      mutations.push({
        id: referencingDocument._id,
        patch: {
          set: updatedReference,
          unset: [OLD_TYPE],
          ifRevisionID: referencingDocument._rev,
        },
      });
    });

    // Apply the delete mutation after references have been changed
    mutations.push({ delete: doc._id });
  });
  return mutations.filter(Boolean);
};

const createTransaction = (mutations) => {
  // eslint-disable-next-line array-callback-return
  return mutations.reduce((tx, mutation) => {
    if (mutation.patch) {
      return tx.patch(mutation.id, mutation.patch);
    }
    if (mutation.delete) {
      return tx.delete(mutation.delete);
    }
    if (mutation.create) {
      return tx.createIfNotExists(mutation.create);
    }
  }, client.transaction());
};

const migrateNextBatch = async () => {
  const documents = await fetchDocuments();
  if (documents.length === 0) {
    console.log('No more documents to migrate!');
    return null;
  }
  const mutations = buildMutations(documents);
  const transaction = createTransaction(mutations);
  await transaction.commit();
  return migrateNextBatch();
};

migrateNextBatch().catch((err) => {
  console.error(JSON.stringify(err, null, 2));
  process.exit(1);
});
