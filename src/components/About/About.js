import React, { useEffect, useState } from "react";
import "./About.css"; // Import your custom CSS
import SpotlightCard from "../../CustomDesign/TextSlide/SpotlightCard";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (optional)
      easing: 'ease-in-out', // Animation easing (optional)
      once: true, // Whether animation should only happen once (optional)
    });
  }, []);
  const [activeTab, setActiveTab] = useState("experience");

  // Function to render tab content
  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return (
         
          <div>
           
            <div className="mb-4">
              <strong>Rabs Net Solution Pvt. Ltd.</strong> <br />
              Contributed to the development of scalable e-commerce platforms.
            </div>
            <div >
              <strong>N Tech Global Solutions</strong> <br />
              Worked as a web developer for 3 months,
            </div>
          </div>
        );
      case "education":
        return (
          <div className="d-flex flex-column">
            <div>
              <p>
                <strong>Bachelor of Computer Applications (BCA) </strong>
                <br />
                Tilak Maharshtra VidyaPeeth, Pune - 2023
              </p>
            </div>
            <div>
              <p>
                <strong>
                  Higher Secondary Certificate (HSC) - 12th Grade{" "}
                </strong>
                <br />
                Al-Shams Millia College, Araria-2020
              </p>
            </div>
            <div>
              <p>
                <strong>Secondary School Certificate (SSC) - 10th Grade</strong>
                <br />
                Moti High School, Madanpur -20218
              </p>
            </div>
          </div>
        );
      case "skills":
        return (
          <div className="my-4">
            <h6 className="my-4">Frontend Development</h6>
            <h6 className="my-4">API Integration</h6>
            <h6 className="my-4">Full Stack Development</h6>
            <h6 className="my-4">Database Management</h6>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container my-5 about-container">
 
    
      <section className="about-section " data-aos="fade-up">
        <div className="row about-row g-5">
          {/* Left Column */}
          <div className="col-md-4 d-flex justify-content-center align-items-center" data-aos="fade-up">
            <div className="image-container">
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <img
                src="https://mdsaif123.github.io/saif/static/media/profile.eefcb8c1d7ab9cc9fcc2.png" // Replace with your image path
                alt="About Me"
                className="img-fluid"
              />
               </SpotlightCard>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-8" data-aos="fade-up">
          <div className=" ">
          <h1 className="service-title" style={{color:"#00ff99"}} data-aos="fade-up"><span className="s">A</span>bout Me</h1>
        </div>
            <p className="about-description">
            I am a passionate developer focused on creating user-friendly and efficient web applications. I love learning new technologies, tackling challenges, and delivering seamless solutions that blend functionality and design. Always excited to contribute to impactful projects and grow as a developer
            </p>

            {/* Tabs */}
            <div className="tabs">
              <button
                onClick={() => setActiveTab("experience")}
                className={`tab-button ${
                  activeTab === "experience" ? "active-tab" : ""
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`tab-button ${
                  activeTab === "education" ? "active-tab" : ""
                }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTab("skills")}
                className={`tab-button ${
                  activeTab === "skills" ? "active-tab" : ""
                }`}
              >
                Skills
              </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content my-3">{renderContent()}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
