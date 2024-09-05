import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
      <button onClick={() => addItemToCart({ name: 'Item 1', price: 10 })}>
        Add Item 1 to Cart
      </button>
      <button onClick={() => addItemToCart({ name: 'Item 2', price: 20 })}>
        Add Item 2 to Cart
      </button>
    </div>
  );
};

export default ShoppingCart;
