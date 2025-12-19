import { Shield, Lock, FileCheck, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const SecurityApproach = () => {
  const pillars = [
    {
      icon: Shield,
      title: 'Advanced Threat Intelligence Systems',
      description: 'Intelligent AI-powered systems identify risks early, correlate security events in real-time, and strengthen protection across your entire digital environment with predictive analytics.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    },
    {
      icon: Lock,
      title: 'Digital Identity Protection Solutions',
      description: 'Multi-layered identity safeguards prevent unauthorized access and credential misuse, maintaining security across essential business platforms, cloud services, and critical data systems.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    },
    {
      icon: FileCheck,
      title: 'Holistic Cyber Risk Governance',
      description: 'Structured governance frameworks identify vulnerabilities early, ensure regulatory compliance, and fortify security across every digital layer with comprehensive risk management effectively.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    },
  ]

  const additionalFeatures = [
    {
      title: 'Cybersecurity Assurance',
      description: 'We protect systems, infrastructure, and sensitive data from unauthorized access, cyber threats, and vulnerabilities using defense-in-depth strategies and continuous monitoring.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    },
    {
      title: 'Data Access Control',
      description: 'Ensuring only authorized users access critical data through role-based permissions, multi-factor authentication, and preventing unauthorized file duplication or exfiltration.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    },
    {
      title: 'Network Shielding',
      description: 'We safeguard your network infrastructure by detecting suspicious activity, blocking unauthorized access attempts, and preventing potential cyber threats before they cause damage.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
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

  const centerImageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="Our-security" className="section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10">
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

        {/* Security Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-20">
          {/* Pillar 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants(0)}
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 group hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image with Overlay */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={pillars[0].image}
                alt={pillars[0].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/70 to-blue-700/50"></div>
              <div className="absolute top-4 left-4">
                <div className="bg-blue-700/90 backdrop-blur-sm w-14 h-14 rounded-lg flex items-center justify-center">
                  <Shield className="h-7 w-7 text-white" />
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {pillars[0].title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {pillars[0].description}
              </p>
            </div>
          </motion.div>

          {/* Center Image - Security Operations Center */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={centerImageVariants}
            className="hidden lg:block"
          >
            <div className="h-full rounded-xl overflow-hidden shadow-2xl relative group">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
                alt="Security Operations Center"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-700/80"></div>
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white z-10">
                <div className="bg-white/20 backdrop-blur-md w-20 h-20 rounded-xl flex items-center justify-center mb-4 border border-white/30">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">Security Operations Center</h3>
                <p className="text-blue-100 text-sm text-center">24/7 Monitoring & Response</p>
              </div>
              {/* Animated Grid Overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                }}></div>
              </div>
            </div>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants(2)}
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 group hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image with Overlay */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={pillars[2].image}
                alt={pillars[2].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/70 to-blue-700/50"></div>
              <div className="absolute top-4 left-4">
                <div className="bg-blue-700/90 backdrop-blur-sm w-14 h-14 rounded-lg flex items-center justify-center">
                  <FileCheck className="h-7 w-7 text-white" />
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {pillars[2].title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {pillars[2].description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Pillar 2 - Full Width on Mobile, Centered on Desktop */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants(1)}
          className="max-w-5xl mx-auto mb-16 md:mb-20"
        >
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 group hover:shadow-xl transition-shadow duration-300">
            {/* Image with Overlay */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={pillars[1].image}
                alt={pillars[1].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-800/75 to-blue-700/65"></div>
              <div className="absolute top-6 left-6 md:top-8 md:left-8">
                <div className="bg-blue-700/90 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center">
                  <Lock className="h-8 w-8 text-white" />
                </div>
              </div>
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  {pillars[1].title}
                </h3>
                <p className="text-blue-100 leading-relaxed text-lg">
                  {pillars[1].description}
                </p>
              </div>
            </div>
          </div>
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
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Header */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm w-10 h-10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-blue-700" />
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="p-6 md:p-8">
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SecurityApproach

