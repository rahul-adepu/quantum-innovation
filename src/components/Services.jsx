import { 
  Activity, 
  FileCheck, 
  Brain, 
  Lock, 
  Target, 
  GraduationCap 
} from 'lucide-react'
import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      icon: Activity,
      title: 'Security Operations Center',
      description: 'Always-on protection with 24/7 monitoring, AI-enhanced threat detection, and expert response teams safeguarding your business around the clock.',
    },
    {
      icon: FileCheck,
      title: 'GRC & Compliance',
      description: 'Navigate NCA, SAMA, ISO 27001, and SADIA requirements with expert guidance—ensuring Vision 2030 compliance while strengthening your security posture.',
    },
    {
      icon: Brain,
      title: 'AI Automation Systems',
      description: 'Transform operations with AI chatbots, voice assistants, and intelligent automation—delivering 24/7 customer service while driving Vision 2030\'s digital economy goals.',
    },
    {
      icon: Lock,
      title: 'Enterprise Security Solutions',
      description: 'Comprehensive protection from endpoint to cloud—deploying next-gen firewalls, EDR/XDR, zero trust architecture supporting Saudi Arabia\'s digital infrastructure development.',
    },
    {
      icon: Target,
      title: 'Penetration Testing & Red Team',
      description: 'Find vulnerabilities before attackers do with comprehensive penetration testing, red team exercises, and social engineering assessments.',
    },
    {
      icon: GraduationCap,
      title: 'Cybersecurity Training',
      description: 'Build Vision 2030\'s cyber-ready workforce with globally recognized certifications—CISSP, CISA, CISM, CEH, and specialized AI security programs.',
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = (index) => ({
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50, // Alternate left/right
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Smooth easing
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

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="our-services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-6 md:mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            End-to-End Cybersecurity & Automation Solutions
          </h2>
        </motion.div>

        {/* Experience Badge */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={badgeVariants}
        >
          <div className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-full">
            <Activity className="h-5 w-5 mr-2" />
            <span className="font-semibold">25+ Years building Saudi Arabia's cybersecurity excellence</span>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants(index)}
                className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
              >
                {/* Icon */}
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-blue-700">
                  <IconComponent className="h-7 w-7 text-blue-700 transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services

