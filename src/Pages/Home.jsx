import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'
import Hero from '../Components/Hero.jsx'
import Features from '../Components/Features.jsx'
import HowItWorks from '../Components/HowItWorks.jsx'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
      </main>

      <Footer />
    </div>
  )
}

export default Home
