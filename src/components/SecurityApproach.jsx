import { Shield, Lock, FileCheck, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const SecurityApproach = () => {
  const pillars = [
    {
      icon: Shield,
      title: 'Advanced Threat Intelligence Systems',
      description: 'Intelligent AI-powered systems identify risks early, correlate security events in real-time, and strengthen protection across your entire digital environment with predictive analytics.',
    },
    {
      icon: Lock,
      title: 'Digital Identity Protection Solutions',
      description: 'Multi-layered identity safeguards prevent unauthorized access and credential misuse, maintaining security across essential business platforms, cloud services, and critical data systems.',
    },
    {
      icon: FileCheck,
      title: 'Holistic Cyber Risk Governance',
      description: 'Structured governance frameworks identify vulnerabilities early, ensure regulatory compliance, and fortify security across every digital layer with comprehensive risk management effectively.',
    },
  ]

  const additionalFeatures = [
    {
      title: 'Cybersecurity Assurance',
      description: 'We protect systems, infrastructure, and sensitive data from unauthorized access, cyber threats, and vulnerabilities using defense-in-depth strategies and continuous monitoring.',
    },
    {
      title: 'Data Access Control',
      description: 'Ensuring only authorized users access critical data through role-based permissions, multi-factor authentication, and preventing unauthorized file duplication or exfiltration.',
    },
    {
      title: 'Network Shielding',
      description: 'We safeguard your network infrastructure by detecting suspicious activity, blocking unauthorized access attempts, and preventing potential cyber threats before they cause damage.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = (index) => ({
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -30 : 30,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
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
    <section id="Our-security" className="section-padding bg-white">
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
            Securing Every Layer of Your Digital World
          </h2>
        </motion.div>

        {/* Security Pillars - All Equal Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants(index)}
                className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300 h-full flex flex-col"
              >
                {/* Icon */}
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="h-7 w-7 text-blue-700" />
                </div>
                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  {pillar.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Security Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants(index)}
              className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
            >
              {/* Icon */}
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-blue-700" />
              </div>
              {/* Content */}
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SecurityApproach

