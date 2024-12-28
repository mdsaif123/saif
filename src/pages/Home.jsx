// import React from 'react'
// import HeroSection from '../components/HeroSection/HeroSection'
// import Services from '../components/Services/Services'
// import Skills from '../components/Skills/Skills'
// import Project from '../components/Projects/Projects'
// import ContactPage from '../components/Contact/ContactPage'
// import About from '../components/About/About'
// import Testimonial from './Testimonial'
// const Home = () => {
//   return (
//     <div>
//     {/* <Navbar/> */}
//     <HeroSection/>
//     <About/>
//     <Services/>
//     <Skills/>
//     <Project/>
//     <Testimonial/>
//     <ContactPage/>
//     </div>
//   )
// }

// export default Home


import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/HeroSection/HeroSection';
import Services from '../components/Services/Services';
import Skills from '../components/Skills/Skills';
import Project from '../components/Projects/Projects';
import ContactPage from '../components/Contact/ContactPage';
import About from '../components/About/About';
import Testimonial from './Testimonial';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>MD Saif - Web Developer</title>
        
        {/* Basic Meta Tags */}
        <meta name="description" content="MD Saif's portfolio showcasing his web development skills using React, JavaScript, and more." />
        <meta name="keywords" content="web developer, React, JavaScript, front-end, back-end, portfolio, MD Saif, web development, developer portfolio" />
        <meta name="author" content="MD Saif" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="MD Saif - Web Developer Portfolio" />
        <meta property="og:description" content="Explore MD Saif's web development portfolio showcasing his skills, services, and projects. Find out how he can help build your next website." />
        <meta property="og:image" content="https://mdsaif123.github.io/saif/your-image.jpg" />
        <meta property="og:url" content="https://mdsaif123.github.io/saif/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MD Saif - Web Developer Portfolio" />
        <meta name="twitter:description" content="Explore MD Saif's web development portfolio showcasing his skills, services, and projects. Find out how he can help build your next website." />
        <meta name="twitter:image" content="https://mdsaif123.github.io/saif/your-image.jpg" />
      </Helmet>
      
      <HeroSection />
      <About />
      <Services />
      <Skills />
      <Project />
      <Testimonial />
      <ContactPage />
    </div>
  );
}

export default Home;
