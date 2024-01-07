import React from 'react';
import getYouTubeID from 'get-youtube-id';
import YouTube from 'react-youtube';

export default {
  name: 'youtube',
  type: 'object',
  title: 'Video de YouTube',
  fields: [
    {
      description: 'Inserte URL del video',
      name: 'url',
      type: 'url',
      title: 'URL',
      validation: (Rule) => Rule.required(),
    },
  ],
  components: {
    preview: ({ value }) => {
      if (!value) return 'Doble click aquí para insertar una URL';

      const id = getYouTubeID(value.url);

      return <YouTube videoId={id} />;
    },
  },
};
