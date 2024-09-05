import React, { useState } from 'react';

const Cart = ({ name, price, description, image }) => {
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
      style={{ backgroundColor: isHovered ? '#f0f0f0' : 'white' }}  // Change color on hover
    >
      <img src={image} alt={name} className="cart-item-image" />
      <div className="cart-item-details">
        <h2 className="cart-item-name">{name}</h2>
        <p className="cart-item-price">{price}</p>
        <p className="cart-item-description">{description}</p>
        <button className="cart-item-button" onClick={() => alert(`${name} added to cart`)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
