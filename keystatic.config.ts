// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    pages: collection({
      label: 'Pages',
      slugField: 'title',
      path: 'src/content/pages/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Titre' } }),
        description: fields.text({ label: 'Description (pour le SEO)', multiline: true }),
        content: fields.markdoc({ label: 'Contenu' }),
      },
    }),
    events: collection({
      label: 'Événements',
      slugField: 'title',
      path: 'src/content/events/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Titre' } }),
        date: fields.date({ label: 'Date de l\'événement' }),
        dateLabel: fields.text({ label: 'Label de date (ex: 21 septembre 2024)' }),
        location: fields.text({ label: 'Lieu' }),
        price: fields.text({ label: 'Prix' }),
        description: fields.text({ label: 'Courte description', multiline: true }),
        content: fields.markdoc({ label: 'Programme détaillé' }),
      },
    }),
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});