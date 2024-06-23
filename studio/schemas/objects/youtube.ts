import { PlayIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';
import { YouTubePreview } from '../components/YouTubePreview';

export default defineType({
  icon: PlayIcon,
  name: 'youtube',
  type: 'object',
  title: 'Video de YouTube',
  fields: [
    defineField({
      description: 'Inserte URL del video',
      name: 'url',
      type: 'url',
      title: 'URL',
    }),
  ],
  preview: {
    select: { title: 'url' },
  },
  components: {
    preview: YouTubePreview,
  },
});
