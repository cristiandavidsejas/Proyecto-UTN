import React from "react";
import curso from '..//styles/curso.css';
const Cursos = (props) => {
    return (
        <div>
        
        
            <div className="container">
            <div className="card">
                <img src="img/ingles.jpg"/>
                <h4>Ingles</h4>
                <p>lakjdsfnlkadsng'ojsbndf'lgkn</p>
                <a href="#">Mas Informacion</a>
            </div>
           < div className="card">
                <img src="img/portugues.png"/>
                <h4>Portugues</h4>
                <p>lakjdsfnlkadsng'ojsbndf'lgkn</p>
                <a href="#">Mas Informacion</a>
            </div>
            <div className="card">
                <img src="img/frances.jpg"/>
                <h4>Frances</h4>
                <p>lakjdsfnlkadsng'ojsbndf'lgkn</p>
                <a href="#">Mas Informacion</a>

              

           
       
            </div>
            </div>

        </div>
       
    );
}

export default Cursos;