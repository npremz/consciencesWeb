import type { APIRoute } from 'astro';

const pages = [
  '/',
  '/sophrologie/',
  '/pnl/',
  '/ateliers/',
  '/emploi/',
  '/agenda/',
  '/contact/',
];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL(import.meta.env.SITE || 'https://consciences.be');
  const urls = pages
    .map((path) => `  <url><loc>${new URL(path, base).toString()}</loc></url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
      `${urls}\n` +
      `</urlset>\n`,
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    },
  );
};
