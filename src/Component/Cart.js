import React, { useState } from 'react';
import image from '../img/pots.jpg';

const Cart = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className="cart-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: isHovered ? '#f0f0f0' : 'white' }}  // Example style change on hover
    >
      <img src={image} alt="item" className="cart-item-image" />
      <div className="cart-item-details">
        <h2 className="cart-item-name">Item-name</h2>
        <p className="cart-item-price">Item-price</p>
        <p className="cart-item-description">Description</p>
        <button className="cart-item-button" onClick={() => alert('Product added to cart')}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
