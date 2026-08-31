import { lazy, Suspense } from 'react';
import { Head } from 'vite-react-ssg';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';
import { HowItWorks } from '@/components/HowItWorks';
import { Navbar } from '@/components/Navbar';
import { ScrollToTop } from '@/components/ScrollToTop';
import { FAQ } from '@/components/FAQ';
import { BlogPreview } from '@/components/BlogPreview';
import start from '@/assets/66a2608272256f8a1ab4f272_Star.svg';
import { SITE_URL } from '@/lib/constants';
import { faqList } from '@/lib/faq-data';

const HeroComponent = lazy(() => import('@/components/Hero'));

const pageUrl = `${SITE_URL}/criacao-de-site-em/teresina-pi/`;

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Zenbit Softhouse',
  url: pageUrl,
  telephone: '+55 86 99420-1843',
  areaServed: ['Teresina', 'Piauí'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Teresina',
    addressRegion: 'PI',
    addressCountry: 'BR',
  },
  description:
    'Software-house em Teresina, Piauí, especializada em aplicativos, sites e sistemas web e desktop sob medida.',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqList.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const marqueeItems = [
  'Aplicativos Web',
  'Desenvolvimento Mobile',
  'Consultoria TI',
  'Especialistas',
  'UI/UX',
];

export function HomeTeresina() {
  return (
    <>
      <Head>
        <title>Zenbit Softhouse - Teresina-PI</title>
        <meta
          name="description"
          content="Crie seu software em Teresina, Piauí, de acordo com a sua necessidade: aplicativos, sites, sistemas web e desktop."
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zenbit Softhouse - Teresina-PI" />
        <meta
          property="og:description"
          content="Crie seu software em Teresina, Piauí, de acordo com a sua necessidade: aplicativos, sites, sistemas web e desktop."
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${SITE_URL}/logo.png`} />
        <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Head>

      <div className="grid-bg" />
      <Navbar />
      <Suspense fallback={null}>
        <HeroComponent />
      </Suspense>
      <div className="flex items-center bg-[#52B357] h-[80px] text-xl text-black font-bold relative overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex gap-[100px]">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((label, i) => (
            <div className="flex items-center" key={`${label}-${i}`}>
              <img width="20" height="20" src={start} alt="" loading="lazy" />
              <span className="mx-2">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <About />
      <HowItWorks />
      <FAQ />
      <BlogPreview />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export { HomeTeresina as Component };
