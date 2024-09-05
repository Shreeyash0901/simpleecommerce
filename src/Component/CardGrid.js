// CardGrid.js
import React from 'react';
import Cart from './Cart';

const CardGrid = ({ products }) => {
  return (
    <div className="cartGrid">
      {products.map((Product) => (
        <Cart
          key={Product.id}
          name={Product.name}
          price={Product.price}
          description={Product.description}
          image={Product.image}
          className="cartItem"
        />
      ))}
    </div>
  );
};

export default CardGrid;