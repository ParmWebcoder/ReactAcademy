
import React from 'react';
import {NavLink} from "react-router-dom";
import { Button, Container} from "react-bootstrap";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import About from '../pages/About';


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

import logo from '../assets/images/logo.png';
// import {render} from '@testing-library/react'


      // Navbar dynamic 

  function NavName(){  
        const  navName = [{ "id": 1, "lable": "Home" , "link" : "/"}, { "id": 2, "lable": "About" , "link" : "about"}, { "id": 3, "lable": "Courses" , "link" : "/"} ,{ "id": 4, "lable": "Instructors" , "link" : "/"}, { "id": 5, "lable": "Contact Us" , "link" : "/"}   ];
       
        return (  
            
                navName.map( (navs, index) => (
  <div>


<NavLink className='navLink' key={index} to={navs.link}>{navs.lable}</NavLink>
                    
                {/* <Nav.Link key={index} className='navLink' href="#">  {navs} </Nav.Link> */}
                   
                    
            </div>
            )) 

          

        );
    }
   
  

      

function NavBar()
{
    return (


<div className='main-Header'>
    <header className=''>
   



    <Navbar collapseOnSelect expand="lg" bg="white" className='text-black navBar-style'  variant="light"  fixed='top'>
     <Container>

     <Navbar.Brand href="#">
        <img alt="" src={logo} className="d-inline-block align-top"/>
        </Navbar.Brand>
    
        

        <Navbar.Toggle   aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">


         <Nav navbarScroll className="me-auto mar-cus">

            {/* Navbar Maped  */}
            
                <NavName/>
               
              
              
               


          </Nav>

          

          
          <Nav className='gap-3'>
          <div className='mt-2'>
             <svg xmlns="http://www.w3.org/2000/svg" width="18.71px" height="18.71px" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
             </div>
             <Button className='btn-link' variant="link">Login</Button>
             <Button  size="lg"  className='primery-bg-color btn-txt' >Register</Button>
             
            
          </Nav>
          
        </Navbar.Collapse>
     </Container>
    </Navbar>



    </header>
    
</div>


    );
}


export default NavBar;
