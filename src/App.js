
// import React from 'react';
// import { Routes, Route } from "react-router-dom";
// import Navbar from './components/Navbar/Navbar';
// import Home from './pages/Home';
// import Services from './components/Services/Services';
// import Skills from './components/Skills/Skills';
// import Projects from './components/Projects/Projects'; // Renamed for consistency
// import ContactPage from './components/Contact/ContactPage';
// import Footer from './components/Footer/Footer';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/contact" element={<ContactPage />} />
//       </Routes>
//       <Footer/>
//     </>
//   );
// }

// export default App;
import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import ContactPage from './components/Contact/ContactPage';
import Footer from './components/Footer/Footer';

function App() {
  
  useEffect(() => {
    const disableContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', disableContextMenu);
    return () => document.removeEventListener('contextmenu', disableContextMenu);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Prevent common shortcuts
      if (
        e.key === 'PrintScreen' || 
        (e.ctrlKey && (e.key === 'u' || e.key === 'Shift' || e.key === 'i' || e.key === 's'))
      ) {
        e.preventDefault();
        alert('Screenshots are disabled on this site!');
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="MD Saif's portfolio showcasing his web development skills using React, JavaScript, and more." />
        <meta name="keywords" content="web developer, React, JavaScript, front-end, back-end, portfolio, MD Saif" />
        <meta name="author" content="MD Saif" />
        <title>MD Saif - Web Developer Portfolio</title>

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "MD Saif",
              "url": "https://mdsaif123.github.io/saif/",
              "jobTitle": "Web Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Self-Employed"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-xxxxxxxxxx",
                "contactType": "Customer Support"
              },
              "sameAs": [
                "https://www.linkedin.com/in/md-saif-linkdin17/",
                "https://github.com/mdsaif123"
              ]
            }
          `}
        </script>
      </Helmet>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
