import { Shield, Handshake, Flag } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

const COUNTERS = [
  { value: 25, suffix: '+', label: 'Years Experience', icon: Shield },
  { value: 500, suffix: '+', label: 'Projects Completed', icon: Handshake },
  { value: 1000, suffix: '+', label: 'Saudi Professionals Trained', icon: Flag },
  { value: 'Vision 2030', suffix: '', label: 'Committed Partner', icon: Flag },
]

const WhyChooseUs = () => {
  const [countersVisible, setCountersVisible] = useState(false)
  const hasAnimatedRef = useRef(false)
  const sectionRef = useRef(null)

  const reasons = [
    {
      icon: Shield,
      title: 'Advanced Cybersecurity & AI Solutions',
      description: 'End-to-end protection combining enterprise security, intelligent automation, and 24/7 monitoring to defend against evolving threats while optimizing operations.',
    },
    {
      icon: Handshake,
      title: 'Premium Technology Partnerships',
      description: 'Strategic collaborations with industry leaders—Cisco, Fortinet, Symantec, Microsoft—delivering cutting-edge security tools and AI platforms for superior protection.',
    },
    {
      icon: Flag,
      title: 'Empowering Saudi Arabia\'s Digital Future',
      description: 'Committed partner in Vision 2030, developing the Kingdom\'s cybersecurity-ready, AI-enabled workforce through world-class training, advanced technologies, and strategic digital transformation initiatives.',
    },
  ]

  // Counter animation - initialize with 0 for numbers, final value for strings
  const [displayCounters, setDisplayCounters] = useState(
    COUNTERS.map((c) => typeof c.value === 'number' ? 0 : c.value)
  )

  // Check if section is already visible on mount (page refresh scenario)
  useEffect(() => {
    const checkInitialVisibility = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        if (isVisible && !hasAnimatedRef.current) {
          // Section already visible on load - set final values without animation
          setDisplayCounters(COUNTERS.map((c) => typeof c.value === 'number' ? c.value : c.value))
          hasAnimatedRef.current = true
        }
      }
    }
    checkInitialVisibility()
    // Also check after a short delay to account for any layout shifts
    const timeout = setTimeout(checkInitialVisibility, 100)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    // Only animate if section enters viewport and hasn't been animated yet
    if (countersVisible && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true
      
      const timers = []
      
      COUNTERS.forEach((counter, index) => {
        if (typeof counter.value === 'number') {
          const duration = 2000
          const steps = 60
          const increment = counter.value / steps
          const stepDuration = duration / steps

          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= counter.value) {
              setDisplayCounters((prev) => {
                const newCounters = [...prev]
                newCounters[index] = counter.value
                return newCounters
              })
              clearInterval(timer)
            } else {
              setDisplayCounters((prev) => {
                const newCounters = [...prev]
                newCounters[index] = Math.floor(current)
                return newCounters
              })
            }
          }, stepDuration)
          timers.push(timer)
        } else {
          setDisplayCounters((prev) => {
            const newCounters = [...prev]
            newCounters[index] = counter.value
            return newCounters
          })
        }
      })

      return () => {
        timers.forEach(timer => clearInterval(timer))
      }
    }
  }, [countersVisible])

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

  const counterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="why-choose-us" ref={sectionRef} className="section-padding bg-white">
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
            Crafting Stronger Security & Smarter Automation for Every Business
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants(index)}
                className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="bg-blue-700 w-14 h-14 rounded-lg flex items-center justify-center mb-5">
                  <IconComponent className="h-7 w-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Counter Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          onViewportEnter={() => {
            if (!countersVisible && !hasAnimatedRef.current) {
              setCountersVisible(true)
            }
          }}
        >
          {COUNTERS.map((counter, index) => {
            const IconComponent = counter.icon
            return (
              <motion.div
                key={index}
                variants={counterVariants}
                className="text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-blue-700" />
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700 mb-2">
                  {typeof counter.value === 'number' 
                    ? `${displayCounters[index]}${counter.suffix}`
                    : displayCounters[index]
                  }
                </div>
                <p className="text-gray-700 font-medium">{counter.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs

