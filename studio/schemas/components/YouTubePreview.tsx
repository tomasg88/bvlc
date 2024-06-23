import YouTubePlayer from 'react-youtube';
import { PreviewProps } from 'sanity';
import { Flex, Text } from '@sanity/ui';

export const YouTubePreview = (props: PreviewProps) => {
  const { title: url } = props;

  return (
    <Flex padding={3} align="center" justify="center">
      {typeof url === 'string' ? (
        <YouTubePlayer id={url} />
      ) : (
        <Text>Ingrese una URL de video de YouTube</Text>
      )}
    </Flex>
  );
};
