import CardHighlighted from 'components/CardHighlighted/CardHighlighted';
import { News } from 'types/models';

type HighlightedNewsSectionProps = {
  highlighted?: News;
};

export const HighlightedNewsSection = ({ highlighted }: HighlightedNewsSectionProps) => {
  if (!highlighted || Object.keys(highlighted).length === 0) return null;

  return (
    <div className="grid grid-cols-1 mx-auto w-full max-w-6xl h-70 p-8 mt-6 pb-0">
      <CardHighlighted {...highlighted} />
    </div>
  );
};
