import data from '@/content/local-pages.json';
import { SITE_URL } from '@/lib/constants';

export interface LocalPageStat {
  value: string;
  label: string;
  sub: string;
}

export interface LocalPageProblem {
  label: string;
  title: string;
  copy: string;
}

export interface LocalPageDeliverable {
  n: string;
  title: string;
  copy: string;
  tags: string[];
}

export interface LocalPageFAQ {
  q: string;
  a: string;
}

export interface LocalPage {
  slug: string;
  serviceName: string;
  city: string;
  region: string;
  title: string;
  description: string;
  kicker: string;
  h1: string;
  h1Accent: string;
  heroLead: string;
  tags: string[];
  stats: LocalPageStat[];
  problemsTitle: string;
  problems: LocalPageProblem[];
  deliverablesTitle: string;
  deliverables: LocalPageDeliverable[];
  localTitle: string;
  localParagraphs: string[];
  faq: LocalPageFAQ[];
  relatedPosts: string[];
}

export const localPages: LocalPage[] = data as LocalPage[];

export const localPageSlugs: string[] = localPages.map(page => page.slug);

export function getLocalPageBySlug(slug: string): LocalPage | undefined {
  return localPages.find(page => page.slug === slug);
}

/** The city we're headquartered in — its pages carry the full service list. */
export const MAIN_CITY = 'Teresina';

export function getLocalPagesInCity(city: string, excludeSlug?: string): LocalPage[] {
  return localPages.filter(page => page.city === city && page.slug !== excludeSlug);
}

export function getLocalPagesInOtherCities(city: string): LocalPage[] {
  return localPages.filter(page => page.city !== city);
}

/**
 * One page per other city — the same service when that city has it, otherwise
 * its first page. Keeps the "onde atendemos" list one line per city.
 */
export function getCityHighlights(excludeCity: string, preferredService?: string): LocalPage[] {
  const cities = [...new Set(getLocalPagesInOtherCities(excludeCity).map(page => page.city))];
  return cities.map(city => {
    const inCity = getLocalPagesInCity(city);
    return inCity.find(page => page.serviceName === preferredService) ?? inCity[0];
  });
}

/** Canonical URL of a local landing page — always with a trailing slash. */
export function localPageUrl(slug: string): string {
  return `${SITE_URL}/${slug}/`;
}
