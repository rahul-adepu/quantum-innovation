import { ExternalLink } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
      category: 'Security Operations',
      title: 'Enterprise SOC Implementation for Financial Sector',
      link: '#',
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      category: 'Compliance Excellence',
      title: 'NCA ECC-2 Framework Compliance & Certification',
      link: '#',
    },
    {
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      category: 'AI Automation',
      title: 'AI-Powered Customer Service Transformation',
      link: '#',
    },
    {
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      category: 'Offensive Security',
      title: 'Comprehensive Red Team Assessment for Healthcare',
      link: '#',
    },
  ]

  return (
    <section id="our-project" className="section-padding bg-gradient-to-b from-gray-50 to-white pb-12 md:pb-16">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Showcasing Our Latest Cybersecurity & AI Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              {/* Image */}
              <div className="h-48 md:h-64 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-colors duration-300"></div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-blue-700 text-xs font-semibold rounded-full shadow-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-700 hover:text-blue-800 font-semibold transition-colors group/link"
                >
                  View Project Details
                  <ExternalLink className="h-4 w-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner - Vision 2030 */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative z-10 text-center">
            <div className="mb-3">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-semibold">
                Supporting Vision 2030's Digital Transformation
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              Explore Our Success Stories Across Saudi Arabia
            </h3>
            <p className="text-lg md:text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              Safeguarding the Kingdom's Digital Future Against Evolving Threats
            </p>
            <button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

