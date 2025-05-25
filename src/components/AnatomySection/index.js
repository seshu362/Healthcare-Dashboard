import React from 'react';
import './index.css';
import { BsZoomIn } from 'react-icons/bs';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-illustration-container">
        <div className="zoom-icon">
          <BsZoomIn />
        </div>
        
        <img 
          src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1748095429/ChatGPT_Image_May_24_2025_07_33_08_PM_c6yhxc.png" 
          alt="Human Anatomy" 
          className="anatomy-illustration" 
        />
      </div>
    </div>
  );
};

export default AnatomySection;