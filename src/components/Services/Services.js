// import React from 'react'
// import "./Service.css"

// const Services = () => {
//   return (
//     <div className='container text-white my-5 service-container'>
//     <div className="text-center"></div>
//     <h1 className='service-title'> Services</h1>
//     <div className="row">
//         <div className="col-md-6 my-3">
//         <div className="card">
//             <div className="card-body">
//             <h3>API Integration</h3>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rem, facere, laborum libero incidunt obcaecati expedita ullam fuga veniam eveniet id, nihil assumenda soluta accusamus.</p>
//             </div>
//         </div>
           
//         </div>
//         <div className="col-md-6 my-3">
//         <div className="card">
//             <div className="card-body">
//             <h3>Frontend Developemnt</h3>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rem, facere, laborum libero incidunt obcaecati expedita ullam fuga veniam eveniet id, nihil assumenda soluta accusamus.</p>
//             </div>
//         </div>
        
//         </div>
//         <div className="col-md-6 my-3">
//         <div className="card">
//             <div className="card-body">
//             <h3>Backend Development</h3>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rem, facere, laborum libero incidunt obcaecati expedita ullam fuga veniam eveniet id, nihil assumenda soluta accusamus.</p>
//             </div>
//         </div>
       
//         </div>
//         <div className="col-md-6 my-3">
//         <div className="card">
//             <div className="card-body">
//             <h3>Full Stack Web Developemnt</h3>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rem, facere, laborum libero incidunt obcaecati expedita ullam fuga veniam eveniet id, nihil assumenda soluta accusamus.</p>
//             </div>
//         </div>
       
//         </div>
//     </div>
      
//     </div>
//   )
// }

// export default Services

import React, { useEffect } from 'react';
import './Service.css';
import ApiIcon from "@mui/icons-material/Api"; // Importing an MUI icon
// import CodeIcon from "@mui/icons-material/Code"; // Frontend coding icon
import StorageIcon from "@mui/icons-material/Storage"; // Database icon
import { Button } from "@mui/material"; // Material UI Button
import {FaReact} from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import SpotlightCard from '../../CustomDesign/TextSlide/SpotlightCard';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (optional)
      easing: 'ease-in-out', // Animation easing (optional)
      once: true, // Whether animation should only happen once (optional)
    });
  }, []);
  return (
    <div className="service-container">
      <div className="container text-white my-5">
        <div className="">
          <h1 className="service-title" data-aos="fade-up">Services</h1>
        </div>
        <div className="row">
        <div className="col-md-4 my-3">
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
        <div className="card text-center" data-aos="fade-up">
        <div className="card-body">
          {/* Icon at the top center */}
          <div>
            <ApiIcon style={{ fontSize: "50px", color: "#00ff99" }} />
          </div>
          <h3 className="mt-3">API Integration</h3>
          <p>
          Seamlessly integrate third-party APIs for enhanced functionality, from payment gateways to data retrieval solutions.
          </p>
          <Button 
            variant="outlined" 
            style={{
              borderColor: "#00ff99", 
              color: "#00ff99", 
              marginTop: "10px", 
              padding: "8px 20px"
            }}
          >
            Explore
          </Button>
        </div>
      </div>
        </SpotlightCard>
      
    </div>
    <div className="col-md-4 my-3">
    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
    <div className="card" data-aos="fade-up">
        <div className="card-body text-center">
          {/* Icons at the top center */}
          <div>
         
            <FaReact style={{ fontSize: "50px", color: "#00ff99", margin: "0 10px" }} />
          </div>
          <h3 className="mt-3">Frontend Development</h3>
          <p>
          Create modern, responsive web interfaces with clean code, stunning designs, and seamless cross-browser experiences
          </p>
          <Button 
            variant="outlined" 
            style={{
              borderColor: "#00ff99", 
              color: "#00ff99", 
              marginTop: "10px", 
              padding: "8px 20px"
            }}
          >
            Explore
          </Button>
        </div>
      </div>
</SpotlightCard>
 
    </div>
    <div className="col-md-4 my-3">
    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
    <div className="card" data-aos="fade-up">
        <div className="card-body text-center">
          {/* Icons at the top center */}
          <div>
            <StorageIcon style={{ fontSize: "50px", color: "#00ff99", margin: "0 10px" }} />
          </div>
          <h3 className="mt-3">Backend Development</h3>
          <p>
          Build scalable server-side applications with secure databases and cloud integrations for seamless frontend communication.
          </p>
          <Button 
            variant="outlined" 
            style={{
              borderColor: "#00ff99", 
              color: "#00ff99", 
              marginTop: "10px", 
              padding: "8px 20px"
            }}
          >
            Explore
          </Button>
        </div>
      </div>
</SpotlightCard>
     
    </div>
          {/* <div className="col-md-4 my-3">
            <div className="card">
              <div className="card-body">
                <h3>Full Stack Web Development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  rem, facere, laborum libero incidunt obcaecati expedita ullam
                  fuga veniam eveniet id, nihil assumenda soluta accusamus.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* SVG as background */}
      <div className="svg-background"></div>
    </div>
  );
};

export default Services;
