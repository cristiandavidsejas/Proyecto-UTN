import React from "react";
import { Link } from "react-router-dom";
import navigation from '..//../styles/navigation.css';


const Navigation = (props) => {
    return (
        <nav>
        
           <ul>
            <li><Link className="a" to="/">Home</Link></li>
            <li><Link className="a" to="blog">Blog</Link></li>
            <li><Link className="a" to="curso">Cursos</Link></li>
            <li><Link className="a" to="nosotros">Nosotros</Link></li>
            <li><Link className="a" to="contacto">Contactop</Link></li>

           </ul>
        
        </nav>
    );
}

export default Navigation;