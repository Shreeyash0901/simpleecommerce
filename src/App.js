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
    { name: 'Ceramic Pot', price: '$25', description: 'A stylish ceramic pot for indoor plants.', image: potImage },
    { name: 'Indoor Plant', price: '$35', description: 'A small green plant perfect for your living room.', image: plantImage },
    { name: 'Gardening Tool Set', price: '$50', description: 'A complete set of gardening tools for enthusiasts.', image: potImage },
    { name: 'Outdoor Pot', price: '$40', description: 'A durable pot for outdoor plants.', image: potImage },
    { name: 'Flowering Plant', price: '$45', description: 'A vibrant plant that blooms beautiful flowers.', image: plantImage },
    { name: 'Garden Rake', price: '$30', description: 'A sturdy rake for clearing your garden.', image: potImage },
    { name: 'Succulent Pot', price: '$20', description: 'A small pot ideal for succulents and cacti.', image: potImage },
    { name: 'Air Purifying Plant', price: '$38', description: 'A plant that helps purify indoor air.', image: plantImage },
    { name: 'Pruning Shears', price: '$28', description: 'High-quality shears for precise pruning.', image: potImage },
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
