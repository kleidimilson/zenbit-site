import { lazy, Suspense } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { MarqueeSection } from '@/components/MarqueeSection';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { Testimonial } from '@/components/Testimonial';
import { CtaSection } from '@/components/CtaSection';
import { Footer } from '@/components/Footer';

const Hero = lazy(() => import('@/components/Hero'));

export function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Zenbit — Software sob medida</title>
        <meta
          name="description"
          content="Software-house brasileira que constrói aplicativos, sistemas e plataformas sob medida para empresas que precisam de algo específico."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zenbit — Software sob medida" />
        <meta
          property="og:description"
          content="Software-house brasileira que constrói aplicativos, sistemas e plataformas sob medida para empresas que precisam de algo específico."
        />
        <meta property="og:url" content="https://www.zenbit.com.br/" />
        <meta
          name="keywords"
          content="criação de sites Teresina, desenvolvimento de sistemas Piauí, aplicativos personalizados, empresas de tecnologia Teresina, Nordeste digital, programação avançada, design de sites Piauí, marketing digital Nordeste, desenvolvimento de ecommerce Teresina, soluções digitais Teresina, consultoria de TI Piauí, desenvolvimento web Nordeste, startups de tecnologia Piauí, tecnologia para empresas Nordeste, consultoria de desenvolvimento Teresina"
        />
      </Helmet>

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
      <CtaSection />
      <Footer />
    </HelmetProvider>
  );
}
