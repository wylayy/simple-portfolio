import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import AnimatedBackground from './components/AnimatedBackground';
import SectionIndicator from './components/SectionIndicator';
import StatsCounter from './components/StatsCounter';
import ParallaxText from './components/ParallaxText';

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <SectionIndicator />
      <main>
        <Hero />
        <ParallaxText text="CREATIVE • DEVELOPER • DESIGNER •" baseVelocity={1} />
        <About />
        <Skills />
        <StatsCounter />
        <Experience />
        <Education />
        <Certifications />
        <ParallaxText text="PORTFOLIO • PROJECTS • WORK •" baseVelocity={-1} />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
