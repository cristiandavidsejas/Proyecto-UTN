import React from "react";
import login from '../styles/login.css';
const Login = (props) => {
    return (<div>
        <h1 align="center">Administracion Login</h1>
        <form id="adminForm" className="admin">
            <div className="col-md-3 form-group mb-3">
                <label className="col-form-label">Usuario</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="col-md-3 form-group mb-3">
                <label className="col-form-label">Contrasenia</label>
                <input type="text" className="form-control"/>
            </div>


        </form>
        </div>
    );
}

export default Login;