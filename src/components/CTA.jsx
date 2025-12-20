import { Phone, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const CTA = () => {
  const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80"
          alt="Security Operations Center"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/70 to-gray-900/80"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ctaVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Secure Saudi Arabia's Digital Future with Vision 2030-Aligned Solutions!
          </h2>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {/* Contact Option 1 - Phone */}
          <motion.a
            href="tel:+966XXXXXXXXX"
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 group"
            variants={ctaVariants}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-blue-700 p-4 rounded-full">
                <Phone className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">
              Get Contact Now
            </h3>
            <p className="text-blue-200 text-center group-hover:text-white transition-colors">
              +966 XX XXX XXXX
            </p>
          </motion.a>

          {/* Contact Option 2 - Email */}
          <motion.a
            href="mailto:info@quantuminnovation.sa"
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 group"
            variants={ctaVariants}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-blue-700 p-4 rounded-full">
                <Mail className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">
              Send E-mail
            </h3>
            <p className="text-blue-200 text-center group-hover:text-white transition-colors break-all">
              info@quantuminnovation.sa
            </p>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA

