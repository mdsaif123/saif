import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import CountUp from "react-countup";
import p1 from "../../assets/images/profile.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MyResume from "../../assets/MdSaif.pdf"


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
                <h3 className="hero-intro display-4">Hello I’m</h3>
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

                  <button className=" btn-icon"><LinkedInIcon fontSize="small"/></button>
                  <button className=" btn-icon"><GitHubIcon/></button>
                  <button className=" btn-icon"><InstagramIcon/></button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
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
                <CountUp start={0} end={8} duration={3} />
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
                <CountUp start={0} end={50} duration={3} />
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
