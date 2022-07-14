import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";

import login from '../styles/login.css';

const Login = (props) => {
    return(
       <div><h1 align="center">Administracion Login</h1>
        <div className="container">
       
        <form id="adminForm" className="admin">
            <div className="col-md-8 form-group mb-1">
                <label className="col-form-label">Usuario</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="col-md-8 form-group mb-5">
                <label className="col-form-label">Contrasenia</label>
                <input type="text" className="form-control"/>
            </div>
            <button as="input" type="submit" value="Submit">enviar</button>
        </form>
        </div>
        </div> 
    )

}
export default Login;