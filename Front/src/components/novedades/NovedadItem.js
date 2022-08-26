import React from 'react';
import Novedadesblog from '../../styles/Novedadesblog.css';
const NovedadItem = (props) => {
    const { title, subtitle, imagen, body} = props;
    return (
       
          <div>
             <div className='container-blog'>
            <h1 id="tituloBlog">{title}</h1>
            <h2>{subtitle}</h2>
            <img src={imagen} id="visa" />
            <div dangerouslySetInnerHTML={{__html: body }} />
            <hr/>
            </div>
        </div>
    )
}

export default NovedadItem;