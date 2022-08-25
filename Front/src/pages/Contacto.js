import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {Form} from "react-bootstrap";
import { Row, Col} from "react-bootstrap";
import contacto from '../styles/contacto.css';
import axios from 'axios';
const Contacto = (props) => {



  const initialForm = {
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  }
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
      const {name, value } = e.target;
      setFormData(oldData => ({
        ...oldData,
        [name]: value
      }));
    }

    const handleSubmit = async e => {
      e.preventDefault();
      setMsg('');
      setSending(true)
      const response = await
       axios.post('http://localhost:3000/api/contacto', formData);
      setSending(false);
      setMsg(response.data.message);
      if (response.data.error === false) {
        setFormData(initialForm)
      }
    }


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
<form className="mb-5" method="post" action="/contacto" id="contactForm" name="contactForm" novalidate="novalidate" onSubmit={handleSubmit}>
<div className="row">
<div className="col-md-6 form-group mb-5">
<label for="" className="col-form-label">Nombre *</label>
<input type="text" className="form-control" name="nombre" id="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange}/>
</div>
<div className="col-md-6 form-group mb-5">
<label for="" className="col-form-label">Correo Electronico *</label>
<input type="text" className="form-control" name="email" id="email" placeholder="email" value={formData.email} onChange={handleChange}/>
</div>
</div>
<div className="row">
<div className="col-md-6 form-group mb-5">
<label for="" className="col-form-label">Telefono *</label>
<input type="text" className="form-control" name="telefono" id="telefono" placeholder="telefono" value={formData.telefono} onChange={handleChange}/>
</div>
<div className="col-md-6 form-group mb-5">
<label for="" className="col-form-label">Asunto</label>
<input type="text" className="form-control" name="asunto" id="asunto" placeholder="asunto" value={formData.asunto} onChange={handleChange}/>
</div>
</div>
<div className="row">
<div className="col-md-12 form-group mb-5">
<label for="message" className="col-form-label">Mensaje *</label>
<textarea className="form-control" name="mensaje" id="message" cols="30" rows="4" placeholder="agregar mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
</div>
</div>
{sending ? <p>Enviando...</p> : null}
{msg ? <p>{msg}</p> : null}
<div className="row">
<div className="col-md-12 form-group">
<input type="submit"  value="enviar" className="btn btn-primary rounded-0 py-2 px-4"/>

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