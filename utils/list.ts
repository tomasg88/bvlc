import { ActiveForcePerson, ComisionPerson } from 'types/News';
import { find, orderBy, groupBy, Dictionary } from 'lodash';

/**
 * Used for Comisión Directiva - documentType: ~/studio/schemas/leadership.js
 */
const positions = [
  { title: 'Presidente', value: 'presidente' },
  { title: 'Vice Presidente', value: 'vice-presidente' },
  { title: 'Secretario', value: 'secretario' },
  { title: 'Pro secretario', value: 'pro-secretario' },
  { title: 'Tesorero', value: 'tesorero' },
  { title: 'Pro tesorero', value: 'pro-tesorero' },
  { title: 'Vocal Titular', value: 'vocal-titular' },
  { title: 'Vocal Suplente', value: 'vocal-suplente' },
  { title: 'Rev. de Ctas. Titular', value: 'cuentas-titular' },
  { title: 'Rev. de Ctas. Suplente', value: 'cuentas-suplente' },
];

/**
 * Used for Cuerpo Activo - documentType: ~/studio/schemas/activeForce.js
 */
const ranks = [
  { title: 'Comandante General', value: 'comandante-general' },
  { title: 'Comandante Mayor', value: 'comandante-mayor' },
  { title: 'Comandante', value: 'comandante' },
  { title: 'Subcomandante', value: 'subcomandante' },
  { title: 'Oficial Principal', value: 'oficial-principal' },
  { title: 'Oficial Inspector', value: 'oficial-inspector' },
  { title: 'Oficial Ayudante', value: 'oficial-ayudante' },
  { title: 'Suboficial Mayor', value: 'suboficial-mayor' },
  { title: 'Suboficial Principal', value: 'suboficial-principal' },
  { title: 'Suboficial Primero', value: 'suboficial-primero' },
  { title: 'Sargento Primero', value: 'sargento-primero' },
  { title: 'Sargento', value: 'sargento' },
  { title: 'Cabo Primero', value: 'cabo-primero' },
  { title: 'Cabo', value: 'cabo' },
  { title: 'Bombero', value: 'bombero' },
  { title: 'Aspirante', value: 'aspirante' },
];

/**
 * Used for Cuerpo Activo jerarchies
 */
const orderRanks = {
  'comandante-general': 1,
  'comandante-mayor': 2,
  comandante: 3,
  subcomandante: 4,
  'oficial-principal': 5,
  'oficial-inspector': 6,
  'oficial-ayudante': 7,
  'suboficial-mayor': 8,
  'suboficial-principal': 9,
  'suboficial-primero': 10,
  'sargento-primero': 11,
  sargento: 12,
  'cabo-primero': 13,
  cabo: 14,
  bombero: 15,
  aspirante: 16,
};

/**
 * Used for Comisión Directiva positions
 */
const orderPositions = {
  presidente: 1,
  'vice-presidente': 2,
  secretario: 3,
  'pro-secretario': 4,
  tesorero: 5,
  'pro-tesorero': 6,
  'vocal-titular': 7,
  'vocal-suplente': 8,
  'cuentas-titular': 9,
  'cuentas-suplente': 10,
};

type MembersList = {
  getTranslation: (K: string) => string;
  orderedList: Dictionary<ActiveForcePerson[] | ComisionPerson[]>;
};

const groupAndOrderPosition = (list: ComisionPerson[]) => {
  const getTranslatedPositions = (value) => find(positions, { value })?.title;
  const orderByPosition = orderBy(list, (l) => orderPositions[l.position]);
  return {
    orderedList: groupBy(orderByPosition, 'position'),
    getTranslation: getTranslatedPositions,
  };
};

const groupAndOrderRanks = (list: ActiveForcePerson[]) => {
  const getTranslatedRanks = (value) => find(ranks, { value })?.title;
  const orderByRank = orderBy(list, (l) => orderRanks[l.rank]);

  return { orderedList: groupBy(orderByRank, 'rank'), getTranslation: getTranslatedRanks };
};

export default function groupAndOrder(
  listName: 'position' | 'rank',
  list: ActiveForcePerson[] | ComisionPerson[]
): MembersList {
  let result;
  if (listName === 'position') {
    result = groupAndOrderPosition(list as ComisionPerson[]);
  } else {
    result = groupAndOrderRanks(list as ActiveForcePerson[]);
  }
  return result;
}
