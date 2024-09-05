
import './App.css';
import Navbar from './Component/Navbar';

import HeroSection from './Component/HeroSection';
import SideMenu from './Component/SideMenu';
import Cart from './Component/Cart';
import Footer from './Component/Footer';



function App() {
  return (
    <div className="App">
     
     {/* navbar/header section  */}
      <Navbar />

        {/* hero img section  */}
      <HeroSection />

        {/* sidemen & shopping cart section  */}
       <div className="mainContent">
       
          <SideMenu />
        
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
   
  
        {/* footer sectioln */}
      <Footer/>
     
    </div>
    
  );
}

export default App;
