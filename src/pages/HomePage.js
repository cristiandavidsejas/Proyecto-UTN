import React from "react";
import homepage from '..//styles/homepage.css';
const HomePage = (props) => {
    return (
        <div>
        
            <h1>Bienvenido</h1>
            <div className="container">
            <div className="card">
                <img src="img/online.png"/>
                <h4>Cursos Online</h4>
                <p>lakjdsfnlkadsng'ojsbndf'lgkn</p>
                <a href="#">Mas Informacion</a>
            </div>
           < div className="card">
                <img src="img/presencial.png"/>
                <h4>Cursos presenciales</h4>
                <p>lakjdsfnlkadsng'ojsbndf'lgkn</p>
                <a href="#">Mas Informacion</a>
            </div>

        </div>
        </div>
    );
}

export default HomePage;