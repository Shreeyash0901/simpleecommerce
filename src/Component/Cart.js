import React from 'react'
import image from '../img/pots.jpg'
const Cart = () => {
  return (
    <div className="cart-item">
      <img src={image} alt='image' className="cart-item-image" />
      <div className="cart-item-details">
        <h2 className="cart-item-name">Item-name</h2>
        <p className="cart-item-price">Item-price</p>
        <p className="cart-item-description">Description</p>
        <button className="cart-item-button">Add to Cart</button>
      </div>
    </div>
  )
}

export default Cart