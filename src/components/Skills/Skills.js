// import React, { useEffect, useState } from "react";
// import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
// import { SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiBootstrap, SiMui, SiJquery } from "react-icons/si";
// import "./Skill.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import SpotlightCard from "../../CustomDesign/TextSlide/SpotlightCard";
// import Magnet from "../../CustomDesign/TextSlide/Magnet";

// const skills = [
//   { name: "HTML", icon: <FaHtml5 /> },
//   { name: "CSS", icon: <FaCss3Alt /> },
//   { name: "JavaScript", icon: <FaJsSquare /> },
//   { name: "React", icon: <FaReact /> },
//   { name: "Next.js", icon: <SiNextdotjs /> },
//   { name: "Node.js", icon: <FaNodeJs /> },
//   { name: "Express.js", icon: <SiExpress /> },
//   { name: "MongoDB", icon: <SiMongodb /> },
//   { name: "MySQL", icon: <SiMysql /> },
//   { name: "Bootstrap", icon: <SiBootstrap /> },
//   { name: "MUI", icon: <SiMui /> },
//   { name: "jQuery", icon: <SiJquery /> },
// ];

// const Skills = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     AOS.init({ duration: 1000, easing: "ease-in-out", once: true });

//     // Check for small screen
//     const checkScreenSize = () => {
//       setIsSmallScreen(window.innerWidth < 768);
//     };

//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);

//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   const toggleShowAll = () => {
//     setShowAll(!showAll);
//   };

//   const visibleSkills = isSmallScreen && !showAll ? skills.slice(0, 8) : skills;

//   return (
//     <div className="skills-container">
//       <h2 className="skills-title" data-aos="fade-up">Essential Tools I Use</h2>
//       <p className="skills-description" data-aos="fade-up">
//         Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
//       </p>
//       <div className="skills-grid">
//         {visibleSkills.map((skill, index) => (
//           <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)" key={index}>
//             <div className="skill-card" data-aos="fade-up">
//               <div className="icon-container">{skill.icon}</div>
//               <span className="skill-name">{skill.name}</span>
//             </div>
//           </SpotlightCard>
//         ))}
//       </div>
//       {isSmallScreen && (
//         <Magnet padding={50} disabled={false}>
//         <button className="showMoreBtn my-4" onClick={toggleShowAll}>
//           {showAll ? "Show Less" : "Show More"}
//         </button>
//         </Magnet>
//       )}

    
     

//     </div>
//   );
// };

// export default Skills;
import React, { useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiBootstrap, SiMui, SiJquery } from "react-icons/si";
import "./Skill.css";
import AOS from "aos";
import "aos/dist/aos.css";
import SpotlightCard from "../../CustomDesign/TextSlide/SpotlightCard";
import Magnet from "../../CustomDesign/TextSlide/Magnet";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "MUI", icon: <SiMui /> },
  { name: "jQuery", icon: <SiJquery /> },
];

const Skills = () => {
  const [showAll, setShowAll] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });

    // Check for small screen
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const visibleSkills = isSmallScreen && !showAll ? skills.slice(0, 8) : skills;

  return (
    <div className="skills-container">
      <h2 className="skills-title" data-aos="fade-up">Essential Tools I Use</h2>
      <p className="skills-description" data-aos="fade-up">
        Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
      </p>
      <div className="skills-grid">
        {visibleSkills.map((skill, index) => (
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)" key={index}>
            <div className="skill-card" data-aos="fade-up" data-aos-delay={index * 150}> {/* Add delay based on index */}
              <div className="icon-container">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          </SpotlightCard>
        ))}
      </div>
      {isSmallScreen && (
        <Magnet padding={50} disabled={false}>
          <button className="showMoreBtn my-4" onClick={toggleShowAll}>
            {showAll ? "Show Less" : "Show More"}
          </button>
        </Magnet>
      )}
    </div>
  );
};

export default Skills;
