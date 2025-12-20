import { User, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const Team = () => {
  const teamMembers = [
    {
      name: 'Ahmed Al-Qureshi',
      title: 'Chief Security Officer',
      certifications: 'CISSP, CISM',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80',
      link: '#',
    },
    {
      name: 'Noura Al-Sayed',
      title: 'Lead Cybersecurity Analyst',
      certifications: 'CEH, GCIH',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80',
      link: '#',
    },
    {
      name: 'Omar Abdullah',
      title: 'Incident Response Specialist',
      certifications: 'GCFA, GREM',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80',
      link: '#',
    },
    {
      name: 'Layla Hassan',
      title: 'AI Solutions Architect',
      certifications: 'AWS Certified, Azure AI',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80',
      link: '#',
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
    <section id="Expert-team" className="section-padding bg-white">
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
            Meet Our Cybersecurity & AI Experts
          </h2>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants(index)}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  style={{ objectPosition: 'center top' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-700 font-semibold mb-2">
                  {member.title}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {member.certifications}
                </p>
                <a
                  href={member.link}
                  className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium text-sm transition-colors group/link"
                >
                  View Profile
                  <ExternalLink className="h-4 w-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Team

