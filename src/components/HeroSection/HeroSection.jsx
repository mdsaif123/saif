import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import CountUp from "react-countup";
import p1 from "../../assets/images/profile.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MyResume from "../../assets/MdSaif.pdf"

// import Computer from "../Computers"
// import { BlurText } from "./BlurText";
import { BlurText } from "../../CustomDesign/TextSlide/BlurText";
import { SplitText } from "../../CustomDesign/TextSlide/SplitText";
import Magnet from "../../CustomDesign/TextSlide/Magnet";



const useTypewriter = (text, speed = 50, delay = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimer;

    if (!isDeleting && displayText.length < text.length) {
      typingTimer = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(prev.length));
      }, speed);
    } else if (isDeleting && displayText.length > 0) {
      typingTimer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, speed);
    } else {
      typingTimer = setTimeout(() => {
        setIsDeleting(!isDeleting);
      }, delay);
    }

    return () => {
      clearTimeout(typingTimer);
    };
  }, [displayText, isDeleting, text, speed, delay]);

  return displayText;
};

const Typewriter = ({ text, speed, delay }) => {
  const displayText = useTypewriter(text, speed, delay);

  return <h2>{displayText}|</h2>; // The pipe (|) simulates a blinking cursor
};
const HeroSection = () => {
  
  return (
    <>
      <div className="container  hero-section-con">
        <div className="row">
          <div className="col-md-6">
            <div className="container d-flex justify-content-between align-items-center mt-2">
              <div className="hero-text text-white">
              <BlurText text="Hello I’m" className="hero-intro display-4" delay={50} />
              {/* <SplitText text="Hello I’m" className="hero-intro display-4" delay={200} /> */}
                {/* <h3 className="hero-intro display-4">Hello I’m</h3> */}
                <h1 className="hero-name  display-2">
                  Md <span className="s">S</span>aif<i className="ri-sailboat-fill"></i>
                </h1>
                <Typewriter text="I am a Web Developer." speed={100} />
                <p className="hero-description">
                  I excel at crafting elegant digital experiences and I am
                  proficient in various programming languages and technologies.
                </p>

                <div className="hero-buttons d-flex justify-content-start">
                
                
                <a href={MyResume} download="My_CV.pdf">
  <button class="btn-download">
    <span>Download CV</span>
  </button>
</a>

<Magnet padding={20} disabled={false}>
<a href="https://www.linkedin.com/in/md-saif-linkdin17/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
<button className=" btn-icon"><LinkedInIcon fontSize="small"/></button></a>
</Magnet>
<Magnet padding={20} disabled={false}>
<a href="https://github.com/mdsaif123">
<button className=" btn-icon"><GitHubIcon/></button></a>
</Magnet>
<Magnet padding={20} disabled={false}>
<button className=" btn-icon"><InstagramIcon/></button>
</Magnet>
                
              
                
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
  <img style={{ width: "350px" }} src={p1} alt="" />
</div>

        </div>
        <div className="row text-white counter-section">
          {/* Column 1 */}
          <div className="col-md-3 col-6">
            <div className="d-flex  align-items-center">
              <h1 className="display-3 fw-bold me-2 numbers">
                <CountUp start={0} end={6} duration={3} />
              </h1>
              <div>
                <p className="mb-0">Months of</p>
                <p className="mb-0">Experience</p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 col-6">
            <div className="d-flex  align-items-center">
              <h1 className="display-3 fw-bold me-2 numbers">
                <CountUp start={0} end={10} duration={3} />
              </h1>
              <div className="text-start">
                <p className="mb-0 ">Projects</p>
                <p className="mb-0 ">Completed</p>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 col-6">
            <div className="d-flex  align-items-center">
              <h1 className="display-3 fw-bold me-2 numbers">
                <CountUp start={0} end={12} duration={3} />
              </h1>
              <div className="text-start">
                <p className="mb-0">Technologies</p>
                <p className="mb-0">Mastered</p>
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="col-md-3 col-6">
            <div className="d-flex align-items-center">
              <h1 className="display-3 fw-bold me-2 numbers">
                <CountUp start={0} end={32} duration={3} />
              </h1>
              <div className="text-start">
                <p className="mb-0">Code</p>
                <p className="mb-0">Commits</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      
    </>
  );
};

export default HeroSection;
