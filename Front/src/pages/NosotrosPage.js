import React from "react";
import nosotrospage from '../styles/nosotrospage.css';
const NosotrosPage = (props) => {
    return (
        <div className=" container-nosotros ">
         
            <div className="clearfix">
  <img src="img/quienessomos.png " className="col-md-6 float-md-end mb- ms-md-3" id="quienesSomos" alt="..."/>
        <h1>Quienes somos?</h1>
  <p id="info-nosotros">
    A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
  </p>

  <p id="info-nosotros">
    As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
  </p>

  <p id="info-nosotros">
    And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there's none of that here.
  </p>
</div>
<div className="clearfix ">
<h1>Porque estudiar con nosotros?</h1>
  <img src="img/study.png" class="col-md-6 float-md-start mb-3 ms-md-3" id="quienesSomos" alt="..."/>

  <p id="info-nosotros">
    A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
  </p >

  <p id="info-nosotros">
    As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
  </p>

  <p id="info-nosotros">
    And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there's none of that here.
  </p>
</div>
<div class="clearfix ">
  <img src="img/work.png" class="col-md-6 float-md-end mb-3 ms-md-3" id="quienesSomos" alt="..."/>
<h1>Porque trabajar con Nosotros?</h1>
  <p id="info-nosotros">
    A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
  </p>

  <p id="info-nosotros">
    As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
  </p>

  <p id="info-nosotros">
    And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there's none of that here.
  </p>
  </div>
</div>

    );
}

export default NosotrosPage;