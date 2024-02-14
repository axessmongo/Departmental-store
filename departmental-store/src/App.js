import React, { useEffect } from 'react';
import './App.css';
import Nav from './component/Nav';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import FruitsVeg from './component/FruitsVeg';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
    
      <Nav/>
     
     
    </div>
  );
}

export default App;
