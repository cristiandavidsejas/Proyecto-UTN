import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from "react";

import login from '../styles/login.css';

const Login = (props) => {
    return(
       <div><h1 align="center">Administracion Login</h1>
        <div className="container">
       
        <form id="adminForm" className="admin">
            <div className=" form-group mb-2">
                <label className="col-form-label">Usuario</label>
                <input type="text" className="form-control"/>
            </div>
            <div className=" form-group mb-4">
                <label className="col-form-label">Contrasenia</label>
                <input type="text" className="form-control"/>
            </div>
            <Button className='boton' variant="danger">Warning</Button>{' '}
            {/* <button as="input" type="submit" value="Submit">enviar</button> */}
        </form>
        </div>
        </div> 
    )

}
export default Login;