import { posts as generatedPosts, type GeneratedPost } from '@/content/generated-posts';

export type BlogPost = GeneratedPost;

const posts: BlogPost[] = generatedPosts;

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getLatestPosts(count: number): BlogPost[] {
  return posts.slice(0, count);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find(post => post.slug === slug);
}

export const blogSlugs: string[] = posts.map(post => post.slug);

const monthNames = [
  'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez',
];

export function formatPostDate(date: string): string {
  const [year, month] = date.split('-').map(Number);
  return `${monthNames[month - 1]} ${year}`;
}

/** Same-category posts first, then the most recent ones — used for internal linking. */
export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const others = posts.filter(post => post.slug !== slug);
  return [
    ...others.filter(post => post.category === current.category),
    ...others.filter(post => post.category !== current.category),
  ].slice(0, count);
}
