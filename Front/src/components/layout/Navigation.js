import React, { useState } from "react";
import { Navbar, Nav, Container, collapseOnSelect } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import navigation from '..//../styles/navigation.css';




   
const Navigation = () =>
{
    return (
      <div>
      <Navbar collapseOnSelect className="navBg " variant="dark" expand="lg">
        <Container>

           <div className="col-md-8 offset-md-4">
         
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                <Nav.Link as={Link} to="curso">Cursos</Nav.Link>  
                <Nav.Link as={Link} to="nosotros">Nosotros</Nav.Link>  
                <Nav.Link as={Link} to="contacto">Contacto</Nav.Link>    
                       
            </Nav>
            </Navbar.Collapse>
            </div>
        </Container>
        </Navbar>  
        </div>
        
    );
}

export default Navigation;