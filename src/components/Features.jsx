import { Radar, Shield, Eye } from 'lucide-react'
import { motion } from 'framer-motion'

const Features = () => {
  const features = [
    {
      icon: Radar,
      title: 'Real-Time Threat Intelligence',
      description: 'Instantly detect and neutralize threats with AI-powered behavioral analytics, ensuring your systems are always protected from sophisticated cyberattacks and zero-day exploits.',
    },
    {
      icon: Shield,
      title: 'Multi-Layered Malware Protection',
      description: 'Proactively prevent, detect, and eliminate malware at every entry point with next-gen antivirus, EDR/XDR, and AI-powered threat prevention safeguarding all digital assets.',
    },
    {
      icon: Eye,
      title: 'Always-On Security Operations',
      description: 'Round-the-clock expert monitoring, automated response, and continuous threat hunting providing immediate action to keep your business secure at all times.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = (index) => ({
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  })

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
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
    <section id="our-features" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Leading Cybersecurity Solutions for Every Threat
          </h2>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants(index)}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                {/* Icon */}
                <div className="bg-blue-700 w-16 h-16 rounded-xl flex items-center justify-center mb-5">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Features

