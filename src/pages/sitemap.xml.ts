import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = true;

const escapeXml = (value: string) =>
  value.replace(/[<>&'"]/g, (character) => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    "'": '&apos;',
    '"': '&quot;',
  })[character] ?? character);

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    return new Response('The site URL is not configured.', { status: 500 });
  }

  const [pages, events] = await Promise.all([
    getCollection('pages'),
    getCollection('events'),
  ]);

  const paths = [
    '/',
    '/evenements/',
    ...pages.map((page) => `/${page.id}/`),
    ...events.map((event) => `/evenements/${event.id}/`),
  ];

  const urls = [...new Set(paths)]
    .sort((a, b) => a.localeCompare(b))
    .map((path) => `  <url><loc>${escapeXml(new URL(path, site).href)}</loc></url>`)
    .join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
  ].join('\n');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
