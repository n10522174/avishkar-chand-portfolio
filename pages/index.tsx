import dynamic from 'next/dynamic';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import PhoneSection from '../components/PhoneSection';


const Hero = dynamic(() => import('../components/Hero'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Avi Chand – Data Engineer</title>
        <meta name='description' content='Portfolio of Avi Chand, Data Engineer' />
      </Head>
      <div className='bg-black min-h-screen text-white scroll-smooth'>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <PhoneSection />
      </div>
    </>
  );
}