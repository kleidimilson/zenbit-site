import { About } from './components/About';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Navbar } from './components/Navbar';

import { ScrollToTop } from './components/ScrollToTop';

import './App.css';

import start from './assets/66a2608272256f8a1ab4f272_Star.svg';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex items-center bg-[#5BC560] h-[80px] text-xl	 text-black font-bold relative overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex gap-[100px]">
          <div className="flex items-center">
            <img src={start} />
            <span className="mx-2">Aplicativos Web</span>
          </div>
          <div className="flex items-center ">
            <img src={start} />
            <span className="mx-2">Desenvolvimento Mobile</span>
          </div>
          <div className="flex items-center">
            <img src={start} />
            <span className="mx-2">Consultoria TI</span>
          </div>
          <div className="flex items-center">
            <img src={start} />
            <span className="mx-2">Especialistas</span>
          </div>
          <div className="flex items-center">
            <img src={start} />
            <span className="mx-2">UI/UX</span>
          </div>
          <div className="flex items-center">
            <img src={start} />
            <span className="mx-2">Aplicativos Web</span>
          </div>
          <div className="flex items-center ">
            <img src={start} />
            <span className="mx-2">Desenvolvimento Mobile</span>
          </div>
          <div className="flex items-center">
            <img src={start} />
            <span className="mx-2">Consultoria TI</span>
          </div>
          <div className="flex items-center">
            <img src={start} />
            <span className="mx-2">Especialistas</span>
          </div>
          <div className="flex items-center">
            <img src={start} />
            <span className="mx-2">UI/UX</span>
          </div>
          <div className="flex items-center">
            <img src={start} />
            <span className="mx-2">Aplicativos Web</span>
          </div>
          <div className="flex items-center ">
            <img src={start} />
            <span className="mx-2">Desenvolvimento Mobile</span>
          </div>
          <div className="flex items-center">
            <img src={start} />
            <span className="mx-2">Consultoria TI</span>
          </div>
          <div className="flex items-center">
            <img src={start} />
            <span className="mx-2">Especialistas</span>
          </div>
          <div className="flex items-center">
            <img src={start} />
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
