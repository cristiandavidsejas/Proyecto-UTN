import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from "react";
import login from "../../styles/login.css";

const Login = (props) => {
    return(
       <div>
        <div className='container-login '>
          <h1 align="center"> Administracion del Instituo</h1>
            <div className='row '>
                <div className='col-4'></div>
                <div className='col-4 align-self-center'>
                    <label >User</label>
                    <input type="text" className="form-control" placeholder="name"/>
                </div>
                <div className='col-4'></div>
            </div>
            <div className='row '>
                <div className="col"></div>
                <div className="col-4">
                    <label>Password</label>
                    <input type="text" className="form-control" placeholder="password"/>
                </div>
                <div className='col-4'></div>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
  <button class="btn btn-primary" type="button">Ingresar</button>

</div>
        </div>
        </div> 
    )

}
export default Login;