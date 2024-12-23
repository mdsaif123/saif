import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Services from '../components/Services/Services'
import Skills from '../components/Skills/Skills'
import Project from '../components/Projects/Projects'
import ContactPage from '../components/Contact/ContactPage'
const Home = () => {
  return (
    <div>
    {/* <Navbar/> */}
    <HeroSection/>
    <Services/>
    <Skills/>
    <Project/>
    <ContactPage/>
    </div>
  )
}

export default Home
