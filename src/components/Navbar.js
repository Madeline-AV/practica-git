import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
     <nav className="navbar">
        <div className="navbar-brand">Mi Portafolio</div>
        <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Sobre Mí</Link></li>
            <li><Link to="/projects">Proyectos</Link></li>
            <li><Link to="/contact">Contáctame</Link></li>
        </ul>
     </nav>
    );
}

export default Navbar;