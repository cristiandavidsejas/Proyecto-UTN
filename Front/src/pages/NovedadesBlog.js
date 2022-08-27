import React, { useEffect, useState } from "react";
import axios from 'axios';
import NovedadItem from "../components/novedades/NovedadItem";




const NovedadesBlog = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading (true);
            const response = await axios.get(`${process.env.REACT.APP.API.URL}/api/novedades`);
            // const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);



    return (
        <section className="">
              <h1>bienvenido a nuestro blog</h1>
          
            {loading ? (
                <p>Cargando...</p>
            ): (
                novedades.map(item => <NovedadItem key={item.id}
                        title ={item.titulo} subtitle={item.subtitlo}
                        imagen ={item.imagen} body={item.cuerpo}
                    />)
            ) }
            
        </section>
    );
}

export default NovedadesBlog;