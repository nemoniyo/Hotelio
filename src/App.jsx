import React from 'react'
import Header from './components/header'
import HeroSection from './components/hero-section'
import FacilitiesSection from './components/facilities-section'
import LuxuryHotelsSection from './components/luxury-hotels-section'
import PartnersSection from './components/partners-section'
import TestimonialSection from './components/testimonial-section'
import BestHotelsSection from './components/best-hotels-section'
import NewsletterSection from './components/newsletter-section'
import Footer from './components/footer'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FacilitiesSection />
        <LuxuryHotelsSection />
        <PartnersSection />
        <TestimonialSection />
        <BestHotelsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}

export default App