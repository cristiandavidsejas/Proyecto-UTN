import { Carousel } from "bootstrap";
import React from "react";
import homepage from '..//styles/homepage.css';
import wave from '../../src/'

import { LoremIpsum, Avatar } from 'react-lorem-ipsum';

const HomePage = (props) => {
    return (
        <div className="container-home">
            <div id="demotext" align="center">Bienvenido a nuestra academia!</div>
        <div >
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="img/curso primavera.png" className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src="img/receso.png" className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src="img/test.png" className="d-block w-100" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div><br/>


      <div className="container-online">
       
        <div className="row">
          <div className="col">
          <h1 align="center">Cursos 100% online</h1>
          </div>
          <div className="row" >
            <div className="col-xl  col-lg-4 "><h3 className="subtitulo">Estudia donde quieras</h3>
            <img src="img/online1.png" id="online"/>
            <p id="info">Perfectamente diseñado para darte la libertad de 
                                    aprender cuando quieras y desde cualquier dispositivo.</p></div>
     
           
            <div className="col-xl col-lg-4 "><h3 className="subtitulo">Profesores online</h3>
            <img src="img/online2.png" id="online"/>
            <p id="info">Profesores nativos y titulados que te motivarán y te ayudarán durante todas las etapas de tu aprendizaje.</p></div>
         
         
            <div className="col-xl  col-lg-4"><h3 className="subtitulo">Metodo probado y garantizado</h3>
            <img src="img/online3.png"id="online" />
            <p id="info">Nuestro método garantiza que progresas hacia tus objetivos a través de una combinación de estudio individual y clases guiadas online.</p></div>
            
          </div>
          
          
        </div>
      </div>
      

<div className="container-cursos">
<h1 align="center">Todos nuestros cursos!</h1>
<div className="row ">
  
  <div className=" col-xl  col-md-4 col-lg-4 ">
    
    <h3 className="subtitulo">Tenemos cursos de ingles de todos los niveles!</h3>
    <p id="info">Realiza un test online para saber que curso te conviene mas</p>
    <ul>
      <li>level 1</li>
      <li>level 2 </li>
      <li>level 3</li>
      <li>level 4 </li>
      <li>level 5 </li>
      <li>Conversation groups (nivel intermedio y avanzado)</li>
    </ul>
    <img src="img/level.png" id="img-kids"/>
    <div class="d-grid gap-2 col-6 mx-auto">

  <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button" >Info!</button>
  <button class="btn btn-primary" type="button">Realizar Test</button>
</div>
</div>
  </div>
  <div className="col-xl  col-md-4 col-lg-4 "> 
  <h3 className="subtitulo">Cursos Intensivos!</h3> 
  <p id="info">Cursá un año académico en tan solo un cuatrimestre! Ofrecemos TODOS LOS NIVELES.</p>
  <img src="img/intensivo.png" id="img-kids"/>
  <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button">Info!</button>
  <button class="btn btn-primary" type="button">Realizar Test</button>
</div>

  </div>
  <div className="col-xl col-md-4 col-lg-4 ">
    <h3 className="subtitulo">Cursos Kids</h3>
    <p id="info">
    *Nos caracterizamos por mantener grupos reducidos para poder brindar una enseñanza bien personalizada.
    *Complementamos el libro de clases con actividades de role-play, juegos y tècnicas Montessori.
    *Los cursos son 2 veces por semana de 1.5 cada encuentro.</p>
    <ul>
    <li>Kinder(4 a 5 anios)</li>
    <li>Prep(6 anios)</li>
    <li>Starter(7anios)</li>
    <li>1st Kids</li>
    <li>2nd Kids</li>
    <li>3rd Kids</li>
    </ul>
    <img src="img/kids.png" id="img-kids"/><br/>
<div class="d-grid gap-2 col-6 mx-auto">
  <button className="btn btn-primary" type="button">Info!</button>

</div>

  </div>
     

</div>

<div className="row ">
  <div className="col ">
    <h3 align="center"> Talleres diversos para que puedas mejorar tu ingles!</h3>
    <img src="img/taller.jpg" id="img-taller"/><br/>
    <ul>
      <li>Taller literario en ingles</li>
      <li>Talleres de conversacion</li>
      <li>Ingles para viajeros</li>
      <li>Ingles para entrevistas de trabajo</li>
    </ul>

    <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button" >Info!</button>
  
</div>
  </div>
</div>

</div>
        </div>
        </div>
    );
}

export default HomePage;