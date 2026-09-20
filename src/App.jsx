import SvgDefs from "./components/SvgDefs";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useRevealOnScroll from "./hooks/useRevealOnScroll";

export default function App() {
  // Runs once the whole tree has painted so every .reveal element
  // (spread across Hero, About, Skills, Services, Projects, Testimonials,
  // Contact) gets observed in one pass, exactly like the original static build.
  useRevealOnScroll([]);

  return (
    <>
      <SvgDefs />
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
