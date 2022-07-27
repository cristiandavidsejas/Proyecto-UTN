import React from "react";
import blog from "../styles/blog.css";

const cards = [
    {
      id: 1,
      title: 'blog 1',
      // image: image1,
      textp: 'El Día de la Liberación en Italia se celebra cada año el 25 de abril.'
    },
    {
      id: 2,
      title: 'blog 2',
      // image: image2,
      textp: 'El Día de la Liberación en Italia se celebra cada año el 25 de abril.'
    },
    {
      id: 3,
      title: 'blog 3',
      // image: image3,
      textp: 'El Día de la Liberación en Italia se celebra cada año el 25 de abril.'
    },
    {
      id: 4,
      title: 'blog 4',
      // image: image3,
      textp: 'El Día de la Liberación en Italia se celebra cada año el 25 de abril.'
    },
    {
      id: 4,
      title: 'blog 4',
      // image: image3
    },
    {
      id: 4,
      title: 'blog 4',
      // image: image3
    }
]

function Blog() {
  return (
    <div className="container-blog"><div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col-xl">
      <div class="card">
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    <div class="col-xl">
      <div class="card">
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    <div class="col-xl">
      <div class="card">
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    </div>
    <div class="col-xl">
      <div class="card">
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
  </div></div>
    
  //  <div className="container d-flex justify-content-center align-items-center h-100 ">

  //     <div className="row ">
  //        {
  //         cards.map(card => (
  //          <div className="col-md-4 key={card.id}">
  //           <CardsBlog title={card.title} imageSource={card.image} textp={card.textp}/>
  //          </div>
  //         ))
  //        }
        
  
  //     </div>
  //   </div>

  );
}

export default Blog;