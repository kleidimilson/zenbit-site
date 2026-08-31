import type { RouteRecord } from 'vite-react-ssg';
import { blogSlugs } from '@/lib/blog';

const routes: RouteRecord[] = [
  {
    path: '/',
    lazy: () => import('@/pages/Home'),
  },
  {
    path: '/criacao-de-site-em/teresina-pi/',
    lazy: () => import('@/pages/HomeTeresina'),
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
];

export { routes };
