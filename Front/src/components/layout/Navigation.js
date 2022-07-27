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
                <Nav.Link as={Link} to="login">Login</Nav.Link>             
            </Nav>
            </Navbar.Collapse>
            </div>
        </Container>
        </Navbar>  
        </div>
        // <nav className="nav" open={open}>
        //    <a href="#" class="logo nav-link">Logo</a>
        //    <button open={open} handleClick={handleClick} className="nav-toggle" aria-label="Abrir menú">
        //     <img src="img/bars.png"/>

        //    </button>
        //    <ul className="nav-menu">
        //     <li className="nav-menu-item"><Link className="nav-menu-link nav-link" to="/">Home</Link></li>
        //     <li className="nav-menu-item" ><Link className="nav-menu-link nav-link" to="blog">Blog</Link></li>
        //     <li className="nav-menu-item" ><Link className="nav-menu-link nav-link" to="curso">Cursos</Link></li>
        //     <li className="nav-menu-item"><Link className="nav-menu-link nav-link" to="nosotros">Nosotros</Link></li>
        //     <li className="nav-menu-item"><Link className="nav-menu-link nav-link nav-menu-link_active" to="contacto">Contacto</Link></li>
        //     <li className="nav-menu-item"><Link className="nav-menu-link nav-link" to="login">Login</Link></li>
        //    </ul>
        
        // </nav>
    );
}

export default Navigation;