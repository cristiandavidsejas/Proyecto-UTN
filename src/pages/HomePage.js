import { Carousel } from "bootstrap";
import React from "react";
import homepage from '..//styles/homepage.css';
const HomePage = (props) => {
    return (
        <div>
            <div id="demotext" align="center">Bienvenido a nuestra academia!</div>
        <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="img/curso primavera.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="img/receso.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="img/test.png" className="d-block w-100" alt="..."/>
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
            <div className="col"><h3>Estudia donde quieras</h3></div>
            <div className="col"></div>
            <div className="col"><h3>Profesores online</h3></div>
            <div className="col"></div>
            <div className="col"><h3>Metodo probado y garantizado</h3></div>
          </div>
          <div className="row" >
            <div className="col"><img src="img/online1.png" id="online"/></div>
            <div className="col"></div>
            <div className="col"><img src="img/online2.png" id="online"/></div>
            <div className="col"></div>
            <div className="col"><img src="img/online3.png"id="online" /></div>
          </div>
          <div className="row" >
            <div className="col"><p>Perfectamente diseñado para darte la libertad de 
                                    aprender cuando quieras y desde cualquier dispositivo.</p></div>
            <div className="col"></div>
            <div className="col"><p>Profesores nativos y titulados que te motivarán y te ayudarán durante todas las etapas de tu aprendizaje.</p></div>
            <div className="col"></div>
            <div className="col"><p>Nuestro método garantiza que progresas hacia tus objetivos a través de una combinación de estudio individual y clases guiadas online.</p></div>
          </div>
        </div>
      </div>
      <div className="container-presencial">
        <div className="row"> 
        <div className="col"><h1 align="center">Tambien tenemos clases presenciales!</h1></div>
        </div>
        <div className="row"> 

<div className="col"></div>
<div className="col"><img src="img/presencial.png" id="presencial"/></div>
<div className="col"></div>

</div>

      </div>







<h1 align="center">NUESTROS CURSOS DE IDIOMAS</h1>
<div classNameName="cursos">
<div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card">
      <img src="img/ingles.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="img/frances.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="img/italiano.jpeg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="img/japones.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="img/portugues.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="img/coreano.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
      </div>
    </div>
  </div>
</div>
</div>
        </div>

























           {/*&<h1>Bienvenido</h1>
            <div classNameName="container">
            <div classNameName="card">
                <img src="img/online.png"/>
                <h4>Cursos Online</h4>
                <p>lakjdsfnlkadsng'ojsbndf'lgkn</p>
                <a href="#">Mas Informacion</a>
            </div>
           < div classNameName="card">
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