import React, { useState } from 'react'
import "./Resume.css"
import Skills from '../Skill/Skills';

const Resume = () => {
    const [activeTab, setActiveTab] = useState('tab1'); // State to track active tab

    const handleTabClick = (tab) => {
      setActiveTab(tab); // Change active tab on button click
    };
  return (
    <div>
     <div className="container text-white">
     <h1 className='Resume-title'> Resume</h1>
     <div className="container ">
      {/* <h2 className="text-center mb-4">Resume Sections</h2> */}

      {/* Tab buttons centered */}
      <div className="d-flex justify-content-center mb-4">
        <button
          className={`custom-tab-button ${activeTab === 'tab1' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab1')}
        >
          Skills
        </button>
        <button
          className={`custom-tab-button ${activeTab === 'tab2' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab2')}
        >
          Education
        </button>
        <button
          className={`custom-tab-button ${activeTab === 'tab3' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab3')}
        >
          Experience
        </button>
        <button
          className={`custom-tab-button ${activeTab === 'tab4' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab4')}
        >
          Projects
        </button>
      </div>

      {/* Tab content */}
      <div className="tab-content">
        {activeTab === 'tab1' && (
          <div className="tab-pane active">
            <h3> My Skills</h3>
            {/* <p>JavaScript, React, Node.js, HTML, CSS, etc.</p> */}
            <Skills/>
          </div>
        )}
        {activeTab === 'tab2' && (
          <div className="tab-pane active">
            <h3>Education</h3>
            <p>Bachelor's in Computer Science, XYZ University.</p>
          </div>
        )}
        {activeTab === 'tab3' && (
          <div className="tab-pane active">
            <h3>Experience</h3>
            <p>2+ years of experience as a Full Stack Developer.</p>
          </div>
        )}
        {activeTab === 'tab4' && (
          <div className="tab-pane active">
            <h3>Projects</h3>
            <p>Project 1: Web App, Project 2: E-commerce Site, etc.</p>
          </div>
        )}
      </div>
    </div>

     
     </div>
    </div>
  )
}

export default Resume
