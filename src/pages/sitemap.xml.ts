import { site } from '@data/site';

const pages = [
  '/',
  '/services/',
  '/assessment/',
  '/ai-agents/',
  '/early-access/',
  '/10-ai-automations/',
  '/privacy-first-ai/',
  '/about/',
  '/contact/',
  '/privacy-policy/',
  '/terms/',
  '/reservation-credit-terms/'
];

export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
    .map((page) => `  <url><loc>${site.url}${page}</loc></url>`)
    .join('\n')}\n</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
