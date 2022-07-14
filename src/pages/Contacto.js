import React from "react";
import { Row, Col} from "react-bootstrap";
import contacto from '../styles/contacto.css';
const Contacto = (props) => {
    return (
        <div>
            <div>
            <h1 align="center">Contacto</h1>
            </div><br/>
          
         
            <div className="content">
<div className="container">
<div className="row align-items-stretch no-gutters contact-wrap">
<div className="col-md-8">
<div className="form h-100">
<h2>Contactanos</h2>
<form className="mb-5" method="" id="contactForm" name="contactForm" novalidate="novalidate">
<div className="row">
<div className="col-md-6 form-group mb-5">
<label for="" className="col-form-label">Nombre *</label>
<input type="text" className="form-control" name="name" id="name" placeholder="Nombre"/>
</div>
<div className="col-md-6 form-group mb-5">
<label for="" className="col-form-label">Correo Electronico *</label>
<input type="text" className="form-control" name="email" id="email" placeholder="email"/>
</div>
</div>
<div className="row">
<div className="col-md-6 form-group mb-5">
<label for="" className="col-form-label">Telefono *</label>
<input type="text" className="form-control" name="phone" id="phone" placeholder="telefono"/>
</div>
<div className="col-md-6 form-group mb-5">
<label for="" className="col-form-label">Asunto</label>
<input type="text" className="form-control" name="asunto" id="asunto" placeholder="asunto"/>
</div>
</div>
<div className="row">
<div className="col-md-12 form-group mb-5">
<label for="message" className="col-form-label">Mensaje *</label>
<textarea className="form-control" name="message" id="message" cols="30" rows="4" placeholder="agregar mensaje"></textarea>
</div>
</div>
<div className="row">
<div className="col-md-12 form-group">
<input type="submit"  className="btn btn-primary rounded-0 py-2 px-4"/>

</div>
</div>
</form>
</div>
</div>
<div className="col-md-4">
<div className="contact-info h-100">
<h3>Informacion de la academia</h3>
<p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, magnam!</p>
<ul className="list-unstyled">
<li>
<span className="text">Direccion: Rondeau 2***, Rosario, Provincia de Santa Fe</span>
</li>
<li>
<span className="text">Telefono: +54 3416067898</span>
</li>
<li>
<span className="text">Email: infoacademiaidiomas@gmail.com</span>
</li>
<li>
<span className="text">Horarios: Lunes a jueves de 9 a 10.30hs </span>
</li>
</ul>
</div>
          </div>
        </div>
    </div>
</div>
</div>
    );
}

export default Contacto;