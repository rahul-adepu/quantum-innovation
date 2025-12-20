import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMoreOpen(false)
      }
    }
    if (isMoreOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMoreOpen])

  const mainLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about-us' },
    { name: 'Services', href: '#our-services' },
    { name: 'Contact', href: '#contact' },
  ]

  const moreLinks = [
    { name: 'Features', href: '#our-features' },
    { name: 'Projects', href: '#our-project' },
    { name: 'Pricing', href: '#pricing-plan' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Team', href: '#Expert-team' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Blog', href: '#latest-post' },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl md:text-3xl font-bold text-gray-900">
              <span className="brand-gradient">Quantum</span> Innovation
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {mainLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200"
                onClick={() => setIsMoreOpen(false)}
              >
                {link.name}
              </a>
            ))}
            {/* More Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="flex items-center text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                More
                <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMoreOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {moreLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                      onClick={() => setIsMoreOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <button className="btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {mainLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t">
                <p className="text-sm font-semibold text-gray-500 mb-2">More</p>
                {moreLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block py-2 text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <button className="btn-primary w-full mt-4" onClick={() => setIsOpen(false)}>
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

