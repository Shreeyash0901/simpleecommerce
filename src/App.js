
import './App.css';
import Navbar from './Component/Navbar';

import HeroSection from './Component/HeroSection';
import SideMenu from './Component/SideMenu';
import Cart from './Component/Cart';
import Footer from './Component/Footer';


function App() {
  return (
    <div className="App">
     
      <Navbar />
      <HeroSection />

       <div className="mainContent">
        <div className="sideMenu">
          <SideMenu />
        </div>
        <div className="cartGrid">
          <Cart className="cartItem" />
          <Cart className="cartItem" />
          <Cart className="cartItem" />
          <Cart className="cartItem" />
          <Cart className="cartItem" />
          <Cart className="cartItem" />
          <Cart className="cartItem" />
          <Cart className="cartItem" />
          <Cart className="cartItem" />
        </div>

    
      </div>
   

      <Footer/>
     
    </div>
    
  );
}

export default App;
