import type { RouteRecord } from 'vite-react-ssg';
import { blogSlugs } from '@/lib/blog';
import { localPageSlugs } from '@/lib/local-pages';

const routes: RouteRecord[] = [
  {
    path: '/',
    lazy: () => import('@/pages/Home'),
  },
  {
    path: '/blog',
    lazy: () => import('@/pages/Blog'),
  },
  {
    path: '/blog/:slug',
    lazy: () => import('@/pages/BlogPost'),
    getStaticPaths: () => blogSlugs.map(slug => `blog/${slug}`),
  },
  // Local service+city landing pages: /criacao-de-site-em/teresina-pi/ and friends.
  // Declared last so the static /blog routes always win the match.
  {
    path: '/:service/:city',
    lazy: () => import('@/pages/LocalLanding'),
    getStaticPaths: () => localPageSlugs,
  },
];

export { routes };
