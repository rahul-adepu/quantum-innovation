import { Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl md:text-3xl font-bold text-white">
                <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">Quantum</span> Innovation
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner in cybersecurity & AI innovation, building Saudi Arabia's digital future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about-us" className="hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#our-services" className="hover:text-blue-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#our-features" className="hover:text-blue-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#our-project" className="hover:text-blue-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#pricing-plan" className="hover:text-blue-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blue-400 transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#our-services" className="hover:text-blue-400 transition-colors">
                  SOC 24/7
                </a>
              </li>
              <li>
                <a href="#our-services" className="hover:text-blue-400 transition-colors">
                  GRC & Compliance
                </a>
              </li>
              <li>
                <a href="#our-services" className="hover:text-blue-400 transition-colors">
                  AI Automation
                </a>
              </li>
              <li>
                <a href="#our-services" className="hover:text-blue-400 transition-colors">
                  Enterprise Security
                </a>
              </li>
              <li>
                <a href="#our-services" className="hover:text-blue-400 transition-colors">
                  Penetration Testing
                </a>
              </li>
              <li>
                <a href="#our-services" className="hover:text-blue-400 transition-colors">
                  Training & Certifications
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+966XXXXXXXXX" className="hover:text-blue-400 transition-colors">
                  +966 XX XXX XXXX
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@quantuminnovation.sa" className="hover:text-blue-400 transition-colors">
                  info@quantuminnovation.sa
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Saudi Arabia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Quantum Innovation. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Supporting Vision 2030's Digital Transformation
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

