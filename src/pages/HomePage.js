import { Carousel } from "bootstrap";
import React from "react";
import homepage from '..//styles/homepage.css';
const HomePage = (props) => {
    return (
        <div>
            <div id="demotext" align="center">Bienvenido a nuestra academia!</div>
        <div className="container">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="img/curso primavera.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="img/receso.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="img/test.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div><br/>
<h1 align="center">NUESTROS CURSOS DE IDIOMAS</h1>
<div className="cursos">
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="img/ingles.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="img/frances.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="img/italiano.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="img/japones.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="img/portugues.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="img/coreano.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
</div>
</div>
        </div>

























           {/*&<h1>Bienvenido</h1>
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

    </div>*/}
        </div>
    );
}

export default HomePage;