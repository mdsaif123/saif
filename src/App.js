import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
// import About from './components/About/About';
import Projects from './components/Projects/Projects';
import ContactPage from './components/Contact/ContactPage';
// import Resume from './components/Resume/Resume';

function App() {
  return (
  <>
  <Navbar/>
  <HeroSection/>
  {/* <About/> */}
  <Services/>
  <Skills/>
  <Projects/>
  <ContactPage/>


  <Footer/>
  {/* <Resume/> */}

  </>
  );
}

export default App;
