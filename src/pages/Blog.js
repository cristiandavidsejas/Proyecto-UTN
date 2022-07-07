import React from "react";
import CardsBlog from "./CardsBlog";
import image1 from '../imageblog/image1.png';
import image2 from '../imageblog/image2.jpg';
import image3 from '../imageblog/image3.png';

const cards = [
    {
      id: 1,
      title: 'blog 1',
      image: image1,
      textp: 'El Día de la Liberación en Italia se celebra cada año el 25 de abril.'
    },
    {
      id: 2,
      title: 'blog 2',
      image: image2,
      textp: 'El Día de la Liberación en Italia se celebra cada año el 25 de abril.'
    },
    {
      id: 3,
      title: 'blog 3',
      image: image3,
      textp: 'El Día de la Liberación en Italia se celebra cada año el 25 de abril.'
    },
    {
      id: 4,
      title: 'blog 4',
      image: image3,
      textp: 'El Día de la Liberación en Italia se celebra cada año el 25 de abril.'
    },
    {
      id: 4,
      title: 'blog 4',
      image: image3
    },
    {
      id: 4,
      title: 'blog 4',
      image: image3
    }
]

function Blog() {
  return (
    
   <div className="container d-flex justify-content-center align-items-center h-100 ">

      <div className="row ">
         {
          cards.map(card => (
           <div className="col-md-4 key={card.id}">
            <CardsBlog title={card.title} imageSource={card.image} textp={card.textp}/>
           </div>
          ))
         }
        
  
      </div>
    </div>

  );
}

export default Blog;