import './App.css';
import React from 'react';
import Navbar from './Component/Navbar';
import HeroSection from './Component/HeroSection';
import SideMenu from './Component/SideMenu';
import Cart from './Component/Cart';
import Footer from './Component/Footer';
import potImage from './img/shop/fiddleLeaf.jpg';  // Example image
import plantImage from './img/pots.jpg';  // Example image

function App() {
  const products = [
    { name: 'Plant Pot', price: '$25', description: 'A beautiful ceramic pot.', image: potImage },
    { name: 'Green Plant', price: '$35', description: 'A small green indoor plant.', image: plantImage },
    { name: 'Garden Tools', price: '$50', description: 'Set of gardening tools.', image: potImage },
    { name: 'Plant Pot', price: '$25', description: 'A beautiful ceramic pot.', image: potImage },
    { name: 'Green Plant', price: '$35', description: 'A small green indoor plant.', image: plantImage },
    { name: 'Garden Tools', price: '$50', description: 'Set of gardening tools.', image: potImage },
    { name: 'Plant Pot', price: '$25', description: 'A beautiful ceramic pot.', image: potImage },
    { name: 'Green Plant', price: '$35', description: 'A small green indoor plant.', image: plantImage },
    { name: 'Garden Tools', price: '$50', description: 'Set of gardening tools.', image: potImage },
    // Add more products as needed
  ];

  return (
    <div className="App">
      {/* Navbar/header section */}
      <Navbar />

      {/* Hero img section */}
      <HeroSection />

      {/* Sidemenu & shopping cart section */}
      <div className="mainContent">
        <SideMenu />
        
        <div className="cartGrid">
          {products.map((product, index) => (
            <Cart 
              key={index} 
              name={product.name} 
              price={product.price} 
              description={product.description} 
              image={product.image} 
              className="cartItem" 
            />
          ))}
        </div>
      </div>

      {/* Footer section */}
      <Footer />
    </div>
  );
}

export default App;
