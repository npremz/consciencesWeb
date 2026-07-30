import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    return new Response('The site URL is not configured.', { status: 500 });
  }

  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /keystatic/',
    'Disallow: /api/keystatic/',
    '',
    `Sitemap: ${new URL('/sitemap.xml', site).href}`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
