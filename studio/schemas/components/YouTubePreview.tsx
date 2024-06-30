import YouTubePlayer from 'react-youtube';
import { PreviewProps } from 'sanity';
import { Text } from '@sanity/ui';

export const YouTubePreview = (props: PreviewProps) => {
  const { title: url } = props;

  if (typeof url === 'string') return <YouTubePlayer id={url} />;

  return <Text>Ingrese una URL de video de YouTube</Text>;
};
