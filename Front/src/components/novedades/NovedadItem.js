import React from 'react';
import blog from '../../styles/blog.css';
const NovedadItem = (props) => {
    const { title, subtitle, imagen, body} = props;
    return (
        <div className='container-blog'>
            <h1 id="tituloBlog">{title}</h1>
            <h2>{subtitle}</h2>
            <img src={imagen} id="visa" />
            <div dangerouslySetInnerHTML={{__html: body }} />
            <hr/>

        </div>
    )
}

export default NovedadItem;