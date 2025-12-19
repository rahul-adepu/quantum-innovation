import { Quote, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'Quantum Innovation transformed our security posture completely. Their 24/7 SOC and threat intelligence helped us achieve NCA ECC-2 compliance while reducing security incidents by 80%. As a Vision 2030 initiative, their expertise in Saudi regulations was invaluable!',
      author: 'Mohammed Al-Rahman',
      position: 'IT Security Director',
      company: 'Leading Financial Institution',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80',
    },
    {
      quote: 'The AI automation solutions from Quantum Innovation revolutionized our customer service. We now handle 500+ inquiries daily with instant responses, 24/7 availability, and our team focuses on strategic work instead of repetitive tasks.',
      author: 'Sarah Al-Mansour',
      position: 'Chief Operations Officer',
      company: 'Healthcare Technology Provider',
      logo: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=200&q=80',
    },
    {
      quote: 'Working with Quantum Innovation was seamless from day one. They implemented our ISO 27001 ISMS, trained our team in line with Vision 2030 workforce development goals, and achieved certification on the first audit. Their knowledge of Saudi regulations and international standards is exceptional.',
      author: 'Dr. Khalid Ibrahim',
      position: 'CTO',
      company: 'National Infrastructure Project',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&q=80',
    },
    {
      quote: 'The penetration testing and red team exercises revealed vulnerabilities we never knew existed. Quantum Innovation didn\'t just identify issues—they provided practical remediation plans and helped us implement them. True partners in security.',
      author: 'Fatima Al-Zahrani',
      position: 'Security Manager',
      company: 'E-Commerce Platform',
      logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&q=80',
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
    <section id="testimonials" className="section-padding bg-gray-50">
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
            What Our Clients Say About Us
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants(index)}
              className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-16 w-16 text-blue-700" />
              </div>

              {/* Company Logo */}
              <div className="mb-4">
                <img
                  src={testimonial.logo}
                  alt={testimonial.company}
                  className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                  loading="lazy"
                />
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
                <p className="text-sm text-blue-700 font-medium">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Support CTA Box */}
        <motion.div
          className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl p-8 md:p-12 text-white text-center relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative z-10">
            <p className="text-lg md:text-xl mb-6 text-blue-100">
              If you have any questions or need help, contact our team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+966XXXXXXXXX"
                className="flex items-center bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-lg transition-colors duration-200 border border-white/30"
              >
                <Phone className="h-5 w-5 mr-2" />
                +966 XX XXX XXXX
              </a>
              <button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

