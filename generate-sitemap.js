// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://www.zenbit.com.br' });
  const routes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    {
      url: '/criacao-de-site-em/teresina-pi/',
      changefreq: 'daily',
      priority: 1.0,
    },
  ];

  routes.forEach((route) => sitemap.write(route));
  sitemap.end();

  const data = await streamToPromise(sitemap);
  fs.writeFileSync('./public/sitemap.xml', data.toString());
}

generateSitemap().catch(console.error);
