"use client"

import React, { useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiBootstrap, SiMui, SiJquery, SiAjax } from "react-icons/si";
import "./Skill.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const skills = [
  { name: "HTML", icon: <FaHtml5 />, bgColor: "#E44D26" },
  { name: "CSS", icon: <FaCss3Alt />, bgColor: "#1572B6" },
  { name: "JavaScript", icon: <FaJsSquare />, bgColor: "#F7DF1E" },
  { name: "React", icon: <FaReact />, bgColor: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, bgColor: "#000000" },
  { name: "Node.js", icon: <FaNodeJs />, bgColor: "#339933" },
  { name: "Express.js", icon: <SiExpress />, bgColor: "#303030" },
  { name: "MongoDB", icon: <SiMongodb />, bgColor: "#47A248" },
  { name: "MySQL", icon: <SiMysql />, bgColor: "#00758F" },
  { name: "Bootstrap", icon: <SiBootstrap />, bgColor: "#7952B3" },
  { name: "MUI", icon: <SiMui />, bgColor: "#007FFF" },
//   { name: "AJAX", icon: <SiAjax />, bgColor: "#2E77D0" },
//   { name: "jQuery", icon: <SiJquery />, bgColor: "#0769AD" },
];
const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (optional)
      easing: 'ease-in-out', // Animation easing (optional)
      once: true, // Whether animation should only happen once (optional)
    });
  }, []); 
  return (
    <div className="skills-container ">
    <h2 className="skills-title" data-aos="fade-up">Skills</h2>
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div className="skill-pill" key={index} data-aos="fade-up">
          <div className="icon-container">{skill.icon}</div>
          <span className="skill-name">{skill.name}</span>
        </div>
      ))}
    </div>
    {/* <div className="svg-background1"></div> */}
  </div>
  )
}

export default Skills