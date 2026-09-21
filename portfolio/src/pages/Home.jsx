import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Certifications from '../components/Certifications/Certifications'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

/**
 * The whole portfolio is one page — every section below is a scroll target
 * for the navbar. Section ids live in data/navLinks.js.
 */
export default function Home() {
  return (
    <>
      <a href="#home" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
