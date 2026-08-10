import { defineMiddleware } from 'astro:middleware';

const CANONICAL_HOST = 'consciences.be';

export const onRequest = defineMiddleware((context, next) => {
  if (context.request.method !== 'GET' && context.request.method !== 'HEAD') {
    return next();
  }

  const url = new URL(context.request.url);
  const forwardedHost = context.request.headers
    .get('x-forwarded-host')
    ?.split(',')[0]
    .trim();
  const requestHost = (forwardedHost ?? context.request.headers.get('host') ?? url.host)
    .split(':')[0]
    .toLowerCase();
  const isFile = /\/[^/]+\.[^/]+$/.test(url.pathname);
  const needsTrailingSlash = url.pathname !== '/' && !url.pathname.endsWith('/') && !isFile;

  if (requestHost === `www.${CANONICAL_HOST}` || needsTrailingSlash) {
    url.protocol = 'https:';
    url.host = CANONICAL_HOST;
    if (needsTrailingSlash) url.pathname = `${url.pathname}/`;
    return context.redirect(url.toString(), 301);
  }

  return next();
});
