
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbaar from "./components/Navbar";
// import CarouselImg from "./components/Carousel";
import About from "./pages/About";
import Home from './pages/Home';
import Cart from './pages/Cart';


function App() {
  return (

    <Router>
      <Navbaar />
      {/* <CarouselImg /> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>

  );
}

export default App;

