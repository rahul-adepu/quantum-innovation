import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        {/* Additional sections will be added in subsequent phases */}
      </main>
      <Footer />
    </div>
  )
}

export default App

