import React, { useState } from 'react';

const SideMenu = () => {
  // State to manage which section is expanded
  const [expandedSection, setExpandedSection] = useState(null);

  const handleMouseEnter = (sectionIndex) => {
    setExpandedSection(sectionIndex);
  };

  const handleMouseLeave = () => {
    setExpandedSection(null);
  };

  return (
    <div className="sideMenu">
      {[...Array(10)].map((_, index) => (
        <div 
          className="menu-section" 
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="section-title">
            Section {index + 1}
          </h2>
          {expandedSection === index && (
            <div className="dropdown-content">
              <p>Dropdown content for Section {index + 1}</p>
              <p>More options...</p>
              <p>Another option...</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideMenu;
