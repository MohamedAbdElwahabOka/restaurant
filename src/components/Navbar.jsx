import { Link } from 'react-router-dom';
// import React from 'react';
// // import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap';

// function Navbaar() {
//   return (
//     <>
//      <header>
//     <Link to="/">HomMMMMMMMMMMMMMe</Link>
//     <Link to="/about">Abouttttttttttt</Link>

//     <h1>Hi</h1>
//     {/* <Navbar bg="dark" variant="dark">
//       <Navbar.Brand href="#home">Test Company</Navbar.Brand>
//       <Nav className="mr-auto">
//         <NavItem>
//           <NavLink href="#home">Home</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="#about">About</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="#contact">Contact</NavLink>
//         </NavItem>
//       </Nav>
//     </Navbar> */}
//   </header>
       
//     </>
//   )
// }

// export default Navbaar;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;