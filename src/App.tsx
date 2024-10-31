

import  { lazy } from 'react';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { HowItWorks } from './components/HowItWorks';
import { Navbar } from './components/Navbar';

import { ScrollToTop } from './components/ScrollToTop';

import './App.css';

import start from './assets/66a2608272256f8a1ab4f272_Star.svg';


const Hero = lazy(()=> import('@/components/Hero'))



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex items-center bg-[#52B357] h-[80px] text-xl	 text-black font-bold relative overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex gap-[100px]">
          <div className="flex items-center">
            <img width='100%' src={start}  alt='aplicativos web'/>
            <span className="mx-2">Aplicativos Web</span>
          </div>
          <div className="flex items-center ">
            <img width='100%' src={start} alt='Desenvolvimento Mobile'/>
            <span className="mx-2">Desenvolvimento Mobile</span>
          </div>
          <div className="flex items-center">
            <img width='100%' src={start} alt='Consultoria TI'/>
            <span className="mx-2">Consultoria TI</span>
          </div>
          <div className="flex items-center">
            <img width='100%' src={start} alt='Especialistas' />
            <span className="mx-2">Especialistas</span>
          </div>
          <div className="flex items-center">
            <img width='100%' src={start} alt='UI/UX'/>
            <span className="mx-2">UI/UX</span>
          </div>
          <div className="flex items-center">
            <img width='100%' src={start} alt='Aplicativos web'/>
            <span className="mx-2">Aplicativos Web</span>
          </div>
          <div className="flex items-center ">
            <img width='100%' src={start} alt='Desenvolvimento Mobile' />
            <span className="mx-2">Desenvolvimento Mobile</span>
          </div>
          <div className="flex items-center">
            <img width='100%' src={start} alt='Consutoria TI'/>
            <span className="mx-2">Consultoria TI</span>
          </div>
          <div className="flex items-center">
            <img width='100%' src={start} alt='Especialistas' />
            <span className="mx-2">Especialistas</span>
          </div>
          <div className="flex items-center">
            <img width='100%' src={start}  alt='ui/ux' />
            <span className="mx-2" >UI/UX</span>
          </div>
          <div className="flex items-center">
            <img width='100%' src={start} alt='Aplicativos Web' />
            <span className="mx-2">Aplicativos Web</span>
          </div>
          <div className="flex items-center ">
            <img width='100%' src={start} alt='Desenvolvimento Mobile' />
            <span className="mx-2">Desenvolvimento Mobile</span>
          </div>
          <div className="flex items-center">
            <img width='100%' src={start} alt='Consultoria TI'/>
            <span className="mx-2">Consultoria TI</span>
          </div>
          <div className="flex items-center">
            <img width='100%' src={start} alt='Especialistas' />
            <span className="mx-2">Especialistas</span>
          </div>
          <div className="flex items-center">
            <img width='100%' src={start} alt='ui/ux' />
            <span className="mx-2">UI/UX</span>
          </div>
        </div>
      </div>

      <About />
      <HowItWorks />
      {/* <Services /> */}
      {/* <Testimonials /> */}
      {/* <Team /> */}
      {/* <Newsletter /> */}
      {/*       <FAQ /> */}
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
