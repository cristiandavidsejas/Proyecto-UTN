import React from "react";
import curso from '..//styles/curso.css';
import { Card, Button } from "react-bootstrap";
import CardsBlog from "./CardsBlog";

const cardCurso = [
  {id: 1,
  title:'curso de Ingles',
  },
  {id: 2,
    title:'curso de Frances',
    },{id: 3,
      title:'curso de Portugues',
      },{id: 4,
        title:'curso de  Italiano',
        },
        {id: 5,
          title:'curso de  Japones',
          },
          {id: 6,
            title:'curso de  Koreano',
            },
]




const Cursos = (props) => {
    return (
        <div className="cont">
            <div className="container d-flex justify-content-center align-intems-center h-100">
              <div className="row">
                {cardCurso.map (cardC => (
                  <div className="col-md-4 key={cardC.id}">
                    <CardsBlog title={cardC.title}/>

                  </div>
                ))}
              </div>




            </div>








  {    /*  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
    </Card>*/}


           
        </div>
    
    );
}

export default Cursos;