import React, { useState } from 'react';

const SideMenu = (props) => {
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
      {[...Array(6)].map((_, index) => (
        <div 
          className="menu-section" 
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="section-title">
            {index === 0 ? "Product Categories" : 
             index === 1 ? "Navigation Links" : 
             index === 2 ? "User Account Options" : 
             index === 3 ? "Search Filter Options" : 
             index === 4 ? "Promotions and Deals" : 
             index === 5 ? "Informational Content" : ""}
          </h2>
          {expandedSection === index && (
            <div className="dropdown-content">
              {index === 0 ? (
                <ul>
                  <li>Electronics</li>
                  <li>Clothing</li>
                  <li>Home Goods</li>
                </ul>
              ) : index === 1 ? (
                <ul>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>FAQ</li>
                </ul>
              ) : index === 2 ? (
                <ul>
                  <li>My Account</li>
                  <li>Order History</li>
                  <li>Wishlist</li>
                </ul>
              ) : index === 3 ? (
                <ul>
                  <li>Price Range</li>
                  <li>Brand</li>
                  <li>Rating</li>
                </ul>
              ) : index === 4 ? (
                <ul>
                  <li>Sale of the Week</li>
                  <li>Discounts</li>
                  <li>Bundle Deals</li>
                </ul>
              ) : index === 5 ? (
                <ul>
                  <li>Blog Posts</li>
                  <li>Tutorials</li>
                  <li>Guides</li>
                </ul>
              ) : ""}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideMenu;