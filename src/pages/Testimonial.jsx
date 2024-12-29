import React from "react";
import TiltedScroll from "../components/feedback/TiltedScroll"
import Testimonialform from "../components/feedback/Testimonialform";
import RecommendIcon from '@mui/icons-material/Recommend';


function Testimonial() {
  return (
    <div className="app-container">
    
      <div className="container">
      <h3 className="text-white text-center"><RecommendIcon fontSize="large" sx={{color:"#00ff99"}}/>&nbsp;Reviews & Feedback</h3>
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-md-6 mb-0 mb-md-4 g-5">
            <TiltedScroll />
            
          </div>
          <div className="col-12 col-md-6 mb-0 mb-md-4 g-5">
            <Testimonialform />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;