// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

const BLOG_DIR = './src/content/blog';
const LOCAL_PAGES_FILE = './src/content/local-pages.json';

function getBlogSlugs() {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.md') && file.toLowerCase() !== 'readme.md')
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
      const { data } = matter(raw);
      return { slug: file.replace(/\.md$/, ''), date: data.date };
    });
}

function getLocalPageSlugs() {
  const raw = fs.readFileSync(LOCAL_PAGES_FILE, 'utf-8');
  return JSON.parse(raw).map((page) => page.slug);
}

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://www.zenbit.com.br' });

  const routes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    ...getLocalPageSlugs().map((slug) => ({
      url: `/${slug}/`,
      changefreq: 'weekly',
      priority: 0.9,
    })),
    { url: '/blog', changefreq: 'weekly', priority: 0.8 },
    ...getBlogSlugs().map(({ slug, date }) => ({
      url: `/blog/${slug}`,
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: date,
    })),
  ];

  routes.forEach((route) => sitemap.write(route));
  sitemap.end();

  const data = await streamToPromise(sitemap);
  fs.writeFileSync('./public/sitemap.xml', data.toString());
}

generateSitemap().catch(console.error);
