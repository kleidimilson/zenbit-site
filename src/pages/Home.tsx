import { lazy, Suspense } from 'react';
import { Head } from 'vite-react-ssg';
import { Navbar } from '@/components/Navbar';
import { MarqueeSection } from '@/components/MarqueeSection';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { Testimonial } from '@/components/Testimonial';
import { FAQ } from '@/components/FAQ';
import { BlogPreview } from '@/components/BlogPreview';
import { CtaSection } from '@/components/CtaSection';
import { Footer } from '@/components/Footer';
import { SITE_URL } from '@/lib/constants';
import { faqList } from '@/lib/faq-data';

const Hero = lazy(() => import('@/components/Hero'));

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Zenbit Softhouse',
  url: SITE_URL,
  telephone: '+55 86 99420-1843',
  areaServed: ['Teresina', 'Piauí', 'Brasil'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Teresina',
    addressRegion: 'PI',
    addressCountry: 'BR',
  },
  description:
    'Software-house brasileira que constrói aplicativos, sistemas e plataformas sob medida para empresas que precisam de algo específico.',
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

export function Home() {
  return (
    <>
      <Head>
        <title>Zenbit — Software sob medida</title>
        <meta
          name="description"
          content="Software-house brasileira que constrói aplicativos, sistemas e plataformas sob medida para empresas que precisam de algo específico."
        />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zenbit — Software sob medida" />
        <meta
          property="og:description"
          content="Software-house brasileira que constrói aplicativos, sistemas e plataformas sob medida para empresas que precisam de algo específico."
        />
        <meta property="og:url" content={SITE_URL + '/'} />
        <meta property="og:image" content={`${SITE_URL}/logo.png`} />
        <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Head>

      <div className="grid-bg" />
      <Navbar />
      <Suspense fallback={null}>
        <Hero />
      </Suspense>
      <MarqueeSection />
      <About />
      <Services />
      <Process />
      <Testimonial />
      <FAQ />
      <BlogPreview />
      <CtaSection />
      <Footer />
    </>
  );
}

export { Home as Component };
