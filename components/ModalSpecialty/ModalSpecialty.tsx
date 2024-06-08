import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'components/Dialog/DialogPrimitives';
import React, { FC } from 'react';
import { Specialty } from 'types/News';
import BlockContent from '@sanity/block-content-to-react';
import { Button } from 'components/Pagination/ButtonPagination';
import MemberCard from 'components/MemberCard/MemberCard';

type ModalSpecialtyProps = Specialty & {
  close: () => void;
  open: boolean;
};

export const ModalSpecialty: FC<ModalSpecialtyProps> = ({
  body,
  close,
  imagesGallery,
  members,
  open,
  title,
}) => {
  return (
    <Dialog open={open}>
      <DialogContent className="bg-white w-[700px] max-w-none">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center border-b-2 border-yellow-400 pb-4 mb-4">
            {title}
          </DialogTitle>
          <DialogDescription>
            <BlockContent
              blocks={body}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
            <div>
              <h3>Miembros:</h3>
              <p>
                {members.map((m) => (
                  <div
                    key={m._id}
                    className={'flex h-full flex-col items-start justify-center  space-y-2 ml-4'}
                  >
                    <MemberCard name={m.title} description={m.rank} image={m.image} />
                  </div>
                ))}
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" onClick={close} className={'uppercase font-bold'}>
              Cerrar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
