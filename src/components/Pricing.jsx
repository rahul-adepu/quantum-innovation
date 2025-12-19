import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const Pricing = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: 'Custom Pricing',
      tagline: 'Essential Protection Package',
      features: [
        'Security Operations Monitoring',
        'Vulnerability Assessment (Quarterly)',
        'Email & Endpoint Protection',
        'Basic Incident Response Support',
      ],
      featured: false,
    },
    {
      name: 'Standard Plan',
      price: 'Custom Pricing',
      tagline: 'Comprehensive Security Suite',
      features: [
        '24/7 SOC Monitoring & Response',
        'Advanced Threat Intelligence',
        'Compliance Management (NCA/ISO)',
        'Managed Detection & Response (MDR)',
      ],
      featured: true,
    },
    {
      name: 'Premium Plan',
      price: 'Custom Pricing',
      tagline: 'Enterprise Security + AI Automation',
      features: [
        'Full Enterprise Security Stack',
        'AI Automation & Integration',
        'Dedicated Security Team',
        'Red Team & Penetration Testing',
      ],
      featured: false,
    },
  ]

  const benefits = [
    'Free security assessment & consultation',
    'Transparent pricing with no hidden fees',
    'Flexible contracts—scale as you grow',
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
      y: 30,
    },
    visible: {
      opacity: 1,
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
    <section id="pricing-plan" className="section-padding bg-white">
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
            Flexible Cybersecurity Solutions for Every Business Need
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants(index)}
              className={`relative rounded-xl p-6 md:p-8 border-2 transition-all duration-300 ${
                plan.featured
                  ? 'bg-gradient-to-br from-blue-50 to-white border-blue-700 shadow-xl scale-105 md:scale-105'
                  : 'bg-white border-gray-200 shadow-md hover:shadow-lg'
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Featured Plan
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>

                {/* Tagline */}
                <p className="text-gray-600 mb-4">{plan.tagline}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${
                        plan.featured ? 'text-blue-700' : 'text-green-600'
                      }`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    plan.featured
                      ? 'bg-blue-700 hover:bg-blue-800 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
        </motion.div>

        {/* Pricing Benefits */}
        <motion.div
          className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-700 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing

