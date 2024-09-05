import './App.css';
import React from 'react';
import Navbar from './Component/Navbar';
import HeroSection from './Component/HeroSection';
import SideMenu from './Component/SideMenu';
import Cart from './Component/Cart';
import Footer from './Component/Footer';
import CardGrid from './Component/CardGrid';

import { products } from './Component/Product';


function App() {
 
  

  return (
    <div className="App">
      {/* Navbar/header section */}
      <Navbar />

      {/* Hero img section */}
      <HeroSection />

      {/* Sidemenu &  item card  section */}
      <div className="mainContent">
        <SideMenu />
        {/* item card section */}
        <CardGrid products={products} />
      </div>

      {/* Footer section */}
      <Footer />
    </div>
  );
}

export default App;
