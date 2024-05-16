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
    <Navbar bg="light" variant="light" className='navbar navbar-expand-lg'>
      <Navbar.Brand href="#home">Restaurant</Navbar.Brand>
      <Nav className="mr-auto">
        <Link className='nav-link' to="/">Home</Link>
        <Link className='nav-link' to="/about">About</Link>
        <Link className='nav-link' to="/cart">Cart</Link>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;


// import React from 'react';
// // import {Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const NavigationBar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <Link className="navbar-brand" to="/">Restaurant</Link>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="mr-auto navbar-nav">
//           <li className="nav-item active">
//             <Link className='nav-link' to="/">Home</Link>
//           </li>
//           <li className="nav-item">
//             <Link className='nav-link' to="/history">Order History</Link>
//           </li>
//         </ul>
//         <form id="search-form" className="my-2 form-inline my-lg-0">
//           <input id="search-input" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//           <button id="search-btn" className="my-2 btn btn-outline-success my-sm-0" type="submit">Search</button>
//         </form>
      
//       </div>

//       <ul className="ml-auto navbar-nav">
//         <li className="nav-item">
//           <Link className='nav-link' to="/cart">Cart</Link>
//           {/* Cart <span id="cart-item-count" className="badge badge-pill badge-primary">{cartItemCount}</span> */}

//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default NavigationBar;