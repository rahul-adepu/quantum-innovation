import { Shield, CheckCircle, Clock, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const About = () => {
  const mainContentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const sideBoxVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const featurePointVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.4 + i * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <section id="about-us" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={mainContentVariants}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted Partner in Cybersecurity & AI Innovation
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Quantum Innovation, we deliver comprehensive cybersecurity solutions and intelligent automation that protect your digital assets while driving business transformation. Born from the merger of two cybersecurity leaders, we're uniquely positioned at the intersection of security and AI—ensuring your innovations are protected and your operations are optimized. Proudly supporting Vision 2030, we're building Saudi Arabia's cybersecurity-ready, AI-enabled workforce for the digital economy.
            </p>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              More About Us
            </motion.button>
          </motion.div>

          {/* Side Feature Box */}
          <motion.div
            className="lg:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sideBoxVariants}
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 md:p-8 h-full">
              <div className="flex items-center mb-4">
                <div className="bg-blue-700 p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  24/7 Threat Detection and Response
                </h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Round-the-clock cybersecurity monitoring and AI-powered threat intelligence, safeguarding your business with real-time detection and rapid response capabilities.
              </p>

              {/* Feature Points */}
              <div className="space-y-3 mb-6">
                {[
                  'Proactive Threat Detection',
                  'AI-Enhanced Security Operations',
                  'Expert 24/7 Support Team',
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={featurePointVariants}
                  >
                    <CheckCircle className="h-5 w-5 text-blue-700 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="pt-6 border-t border-blue-200">
                <a
                  href="tel:+966XXXXXXXXX"
                  className="flex items-center text-blue-700 hover:text-blue-800 font-semibold transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  +966 XX XXX XXXX
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

