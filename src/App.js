
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbaar from "./components/Navbar";
// import CarouselImg from "./components/Carousel";
import About from "./pages/About";


function App() {
  return (

    <Router>
      <Navbaar />
      {/* <CarouselImg /> */}
      <Routes>
        <Route path="/" />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>

  );
}

export default App;
