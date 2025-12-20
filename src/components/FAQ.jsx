import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What is cybersecurity and why does my business need it?',
      answer: 'Cybersecurity protects your systems, networks, and data from cyber threats like hacking, ransomware, and data breaches. In today\'s digital world, businesses face constant attacks—from small phishing attempts to sophisticated nation-state threats. Without proper cybersecurity, you risk data loss, financial damage, regulatory penalties, and reputational harm. Quantum Innovation provides comprehensive protection to ensure business continuity and compliance.',
    },
    {
      question: 'How can Quantum Innovation help with Saudi regulations (NCA, SAMA)?',
      answer: 'We specialize in Saudi regulatory compliance—NCA frameworks (ECC-1, ECC-2, CCC, CSCC, OTCC), SAMA Cybersecurity Framework, and SADIA requirements. As a Vision 2030-aligned partner, our experts provide gap assessments, implementation roadmaps, policy development, technical controls, and audit preparation. We ensure you meet all regulatory requirements while strengthening your security posture, keeping you ahead of changing regulations and supporting the Kingdom\'s digital transformation goals.',
    },
    {
      question: 'What are AI automation solutions and how do they benefit my business?',
      answer: 'AI automation uses intelligent agents—chatbots, voice assistants, email agents, and workflow automation—to handle repetitive tasks automatically. Benefits include 24/7 customer service, 90% faster response times, 70% cost reduction, zero missed leads, and freed-up staff for strategic work. Quantum Innovation implements secure AI solutions that integrate seamlessly with your systems while maintaining data protection and privacy compliance.',
    },
    {
      question: 'How does 24/7 SOC monitoring work and what\'s included?',
      answer: 'Our Security Operations Center (SOC) provides round-the-clock monitoring by expert analysts using advanced SIEM platforms, AI-powered threat detection, and threat intelligence. We continuously analyze security events, detect anomalies, investigate alerts, respond to incidents, hunt for hidden threats, and provide monthly reports. You get enterprise-grade protection without building an in-house security team—we become your security operations arm.',
    },
  ]

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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Header and Image */}
          <motion.div
            className="lg:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headerVariants}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Cybersecurity Questions Answered Clearly
            </h2>
            <div className="hidden lg:block mt-8">
              <img
                src="https://imgs.search.brave.com/hvV9gywJqO-kL6zE9qv5rVhijPyxa8JUyFQOTmFwwrA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vbmxp/bmVkZWdyZWVzLnNh/bmRpZWdvLmVkdS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/MS9DeWJlcnNlY3Vy/aXR5LWFyY2hpdGVj/dC5qcGVn"
                alt="Security Professional"
                className="rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right Side - FAQ Items */}
          <div className="lg:col-span-1 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md ${index === 0 ? 'lg:mt-8' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-blue-700 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ

