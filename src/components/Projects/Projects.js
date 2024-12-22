import React, { useState, useEffect } from "react";
import "./Project.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (optional)
      easing: 'ease-in-out', // Animation easing (optional)
      once: true, // Whether animation should only happen once (optional)
    });
  }, []);

  const projects = [
    {
      id: 1,
      image: "https://mdsaif123.github.io/Saifu/notes.png", // Replace with your image path
      title: "Notes App",
      description: "MERN stack project, featuring authentication and CRUD operations",
      technologies: ["fab fa-react", "fab fa-node", "fas fa-database"], // Font Awesome icons
      liveDemo: "https://prismatic-trifle-cbeeb9.netlify.app/",
      sourceCode: "https://github.com/mdsaif123/Notes",
    },
    {
      id: 2,
      image: "https://mdsaif123.github.io/Saifu/mern-ecom.png",
      title: "E-Commerce",
      description: "MERN stack  project Users can log in, view products, Admin functionality includes",
      technologies: ["fab fa-react", "fab fa-node", "fas fa-database"], // Font Awesome icons
      // technologies: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
      liveDemo: "https://rad-klepon-186679.netlify.app/",
      sourceCode: "https://github.com/mdsaif123/Mern-Ecommerce-app",
    },
    {
      id: 3,
      image: "https://mdsaif123.github.io/Saifu/myschool.png",
      title: "MYSCHOOL ",
      description: "built a React project for managing school details, including classes and courses",
      technologies: ["fab fa-react",],
      liveDemo: "https://ornate-gumdrop-0b313a.netlify.app/",
      sourceCode: "https://github.com/mdsaif123/Myschool",
    },
    {
      id: 4,
      image: "https://mdsaif123.github.io/Saifu/aafiya.png",
      title: "Aafiya Meditreats",
      description: "Developed a website with doctor and hospital details,  for top doctors and Hospitals",
      technologies: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
      liveDemo: "https://comforting-liger-ed6845.netlify.app/",
      sourceCode: "https://github.com/mdsaif123/Aafiya-Mediretreats",
    },
    {
      id: 5,
      image: "https://mdsaif123.github.io/Saifu/rabs.png",
      title: "Landing Page ",
      description: "built a React project for a company landing page showing all thedetails about company",
      technologies: ["fab fa-react", ],
      liveDemo: "https://friendly-crostata-6748a8.netlify.app/",
      sourceCode: "https://github.com/mdsaif123/Rabs-assignment-react",
    },
    {
      id: 6,
      image: "https://mdsaif123.github.io/Saifu/project3.png",
      title: "Facebook Clone",
      description: "A weather app that fetches data from a weather API.",
      technologies: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
      liveDemo: "https://mdsaif123.github.io/Facebook_Clone_new/",
      sourceCode: "https://github.com/mdsaif123/Facebook-clone",
    },
  ];

  const [showAllProjects, setShowAllProjects] = useState(false);

  const toggleProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <div className="container my-5 text-white">
      <div className="text-center mb-4">
        <h1 data-aos="fade-up">My Projects</h1>
        <p data-aos="fade-up">Check out some of the projects I've worked on!</p>
      </div>

      <div className="row">
        {projects.slice(0, showAllProjects ? projects.length : 3).map((project) => (
          <div className="col-md-4 mb-4" key={project.id} data-aos="fade-up">
            <div className="project-item shadow-sm h-100 p-3 rounded">
              <img
                src={project.image}
                alt={project.title}
                className="project-image mb-3 w-100"
                style={{ borderRadius: "10px", height: "200px", objectFit: "cover" }}
              />
              <div className="d-flex align-items-center mb-3">
                {project.technologies.map((tech, index) => (
                  <i
                    key={index}
                    className={`${tech} mx-2 p-2`}
                    style={{ fontSize: "1.5rem", borderColor: "#ddd" }}
                  ></i>
                ))}
              </div>
              <h5 className="project-title">{project.title}</h5>
              <p className="project-description">{project.description}</p>
              <div className="d-flex justify-content-between">
                <a
                  href={project.liveDemo}
                  className="btn text-light btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={project.sourceCode}
                  className="btn btn-outline-secondary btn-sm d-flex align-items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github me-2"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="btn btn-outline-primary rounded-pill" onClick={toggleProjects}>
          {showAllProjects ? "Show Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default Project;
