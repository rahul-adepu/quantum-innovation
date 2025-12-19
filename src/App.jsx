import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Features from './components/Features'
import Projects from './components/Projects'
import WhyChooseUs from './components/WhyChooseUs'
import SecurityApproach from './components/SecurityApproach'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Features />
        <Projects />
        <WhyChooseUs />
        <SecurityApproach />
        <Pricing />
        <Testimonials />
        {/* Additional sections will be added in subsequent phases */}
      </main>
      <Footer />
    </div>
  )
}

export default App

