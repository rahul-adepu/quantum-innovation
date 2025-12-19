import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const autoSlideRef = useRef(null)

  const slides = [
    {
      tagline: 'Next-Gen Cybersecurity',
      headline: 'Innovating Cyber Defense for the Digital Era',
      description: 'Delivering advanced cyber protection built to defend your business, safeguard critical systems, and maintain resilience in a rapidly transforming digital world.',
      ctaButtons: [
        { text: 'Discover Our Solutions', primary: true },
        { text: 'Get Started Now', primary: false },
      ],
    },
    {
      tagline: 'Empowering Vision 2030',
      headline: 'AI-Powered Security for Saudi Arabia\'s Digital Future',
      description: 'Transform your operations with intelligent automation and enterprise-grade security—protecting your business while driving Vision 2030\'s digital transformation goals.',
      ctaButtons: [
        { text: 'Explore AI Solutions', primary: true },
        { text: 'Contact Us Today', primary: false },
      ],
    },
  ]

  // Auto-slide functionality
  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // Change slide every 6 seconds

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current)
      }
    }
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    // Reset auto-slide timer
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current)
    }
    autoSlideRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    // Reset auto-slide timer
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current)
    }
    autoSlideRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    // Reset auto-slide timer
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current)
    }
    autoSlideRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
  }

  // Swipe handlers for mobile
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
    }
    if (isRightSwipe) {
      goToPrevious()
    }
  }

  return (
    <section 
      id="home" 
      className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden min-h-[550px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px]"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Slides Container */}
      <div className="relative min-h-[550px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <div className="container-custom py-12 sm:py-16 md:py-20 lg:py-24 min-h-[550px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px] flex items-center">
              <div className="max-w-4xl w-full">
                {/* Tagline */}
                <div className="mb-3 sm:mb-4">
                  <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-700/30 backdrop-blur-sm border border-blue-500/50 rounded-full text-xs sm:text-sm font-semibold text-blue-300">
                    {slide.tagline}
                  </span>
                </div>

                {/* Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
                  {slide.headline}
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-7 md:mb-8 leading-relaxed max-w-3xl">
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {slide.ctaButtons.map((button, btnIndex) => (
                    <button
                      key={btnIndex}
                      className={
                        button.primary
                          ? 'btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto'
                          : 'btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 border-white text-white hover:bg-white hover:text-gray-900 w-full sm:w-auto'
                      }
                    >
                      {button.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on tablet and desktop */}
      <button
        onClick={goToPrevious}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-200 border border-white/20 items-center justify-center"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-200 border border-white/20 items-center justify-center"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero

