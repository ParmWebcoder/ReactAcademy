
import React from 'react';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
// import Stack from 'react-bootstrap/Stack';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

import logo from '../assets/images/logo.png';




function NavBar()
{
    return (


<div className='main-Header'>
    <header className=''>
   
<Container>



    <Navbar collapseOnSelect expand="lg" bg="" className='text-black navBar-style' variant="light">
     
     <Navbar.Brand href="#">
        <img alt="" src={logo} className="d-inline-block align-top"/>
        </Navbar.Brand>
    
        

        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">


<Nav navbarScroll className="me-auto mar-cus">
            <Nav.Link className='navLink' href="#">Home</Nav.Link>
            <Nav.Link className='navLink' href="#">Courses</Nav.Link>
            <Nav.Link className='navLink' href="#">Instuctors </Nav.Link>
            <Nav.Link className='navLink' href="#">Schedules </Nav.Link>
            <Nav.Link className='navLink' href="#">Contact Us </Nav.Link>
        
          </Nav>


          
          <Nav className='gap-3'>
          <div className='mt-2'>
             <svg xmlns="http://www.w3.org/2000/svg" width="18.71px" height="18.71px" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
             </div>
             <Button className='btn-link' variant="link">Login</Button>
             <Button  size="lg"  className='primery-bg-color btn-txt' >Register</Button>
             
            
          </Nav>
          
        </Navbar.Collapse>
     
    </Navbar>

</Container>

    </header>
    
</div>


    );
}


export default NavBar;
