import React, { useState } from "react";
import curso from '..//styles/curso.css';
import { useForm } from "react-hook-form";
import {Form} from "react-bootstrap";





const Cursos = (props) => {
//   function RegistroPage(){
//     const [form,setForm] = useState({nombre:'', apellido:'', email:'', telefono:''});
//     const [loading,setLoading] = useState(false);
    
//     const {register,handleSubmit, formState:{ errors }} = useForm();
    
//     const onSubmit = async (data) => {
//       setLoading(true)
//       console.log("handleSubmit", data)
//     }
//     const handleChange = (event)=> {
//       const name = event.target.name
//       const value = event.target.value
//       console.log("handleChange",name,value)
//       setForm({...form,[name]:value})
//     }
//     }
//     return (<div>
//          <div className="cont">
  
            
//               <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
//  Inscribite!
//   </button>       
//   {/* the modal */}

//       <div className="modal" id="myModal">
//       <div className="modal-dialog ">
//         <div className="modal-content">
//           {/* modal header */}
//           <div className="modal-header">
//         <h4 class="modal-title">Inscribite al curso</h4>
//         <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
//       </div>
//       {/* <!-- Modal body --> */}
//       <div className="modal-body">
//         <FormGroup label="Nombre" name="nombre" type="text" placeholder="ingrese su nombre" register={{...register("nombre",{required:true})}}/>





// </div>

//         {/* <form onSubmit={handletSubmit}>
//           <div className="row mb-3">
//             <label for="nombre" className="col-3 col-form-label">Nombre:</label>
//             <div className="col-9">
//               <input type="text" className="form-control" id="nombre" name="nombre" value={form.nombre} onChange={handleChange}></input>
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label for="apellido" className="col-3 col-form-label">apellido:</label>
//             <div className="col-9">
//               <input type="text" className="form-control" id="apellido" name="apellido" value={form.apellido} onChange={handleChange}></input>
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label for="telefono" className="col-3 col-form-label">telefono:</label>
//             <div className="col-9">
//               <input type="text" className="form-control" id="telefono" name="telefono" value={form.telefono} onChange={handleChange}></input>
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label for="email" className="col-3 col-form-label">email:</label>
//             <div className="col-9">
//               <input type="text" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} ></input>
//             </div>
//           </div>
          
//         </form> */}
    
//       {/* <!-- Modal footer --> */}
//       <div className="modal-footer">
//         <button type="submit" className="btn btn-danger" data-bs-dismiss="modal">registrarse</button>
//       </div>
//         </div>
//       </div>



//       </div>
//             </div>

            
//               <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
//  Inscribite!
//   </button>       
//   {/* the modal */}

//       <div className="modal" id="myModal">
//       <div className="modal-dialog ">
//         <div className="modal-content">
//           {/* modal header */}
//           <div className="modal-header">
//         <h4 class="modal-title">Modal Heading</h4>
//         <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
//       </div>
//       {/* <!-- Modal body --> */}
//       <div className="modal-body">
//       <form>
//           <div className="row mb-3">
//             <label for="nombre" className="col-3 col-form-label">Nombre:</label>
//             <div className="col-9">
//               <input type="text" className="form-control" id="nombre" name="" value=""></input>
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label for="apellido" className="col-3 col-form-label">apellido:</label>
//             <div className="col-9">
//               <input type="text" className="form-control" id="apellido" name="" value=""></input>
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label for="telefono" className="col-3 col-form-label">telefono:</label>
//             <div className="col-9">
//               <input type="text" className="form-control" id="telefono" name="" value=""></input>
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label for="email" className="col-3 col-form-label">email:</label>
//             <div className="col-9">
//               <input type="text" className="form-control" id="email" name="" value=""></input>
//             </div>
//           </div>
//         </form>
//       </div>
//       {/* <!-- Modal footer --> */}
//       <div className="modal-footer">
//         <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
//       </div>
//         </div>
//       </div>



//       </div>
//             </div>
           

            
//               <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
//  Inscribite!
//   </button>       
//   {/* the modal */}

//       <div className="modal" id="myModal">
//       <div className="modal-dialog ">
//         <div className="modal-content">
//           {/* modal header */}
//           <div className="modal-header">
//         <h4 class="modal-title">Modal Heading</h4>
//         <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
//       </div>
//       {/* <!-- Modal body --> */}
//       <div className="modal-body">
//       <form>
//           <div className="row mb-3">
//             <label for="nombre" className="col-3 col-form-label">Nombre:</label>
//             <div className="col-9">
//               <input type="text" className="form-control" id="nombre" name="" value=""></input>
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label for="apellido" className="col-3 col-form-label">apellido:</label>
//             <div className="col-9">
//               <input type="text" className="form-control" id="apellido" name="" value=""></input>
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label for="telefono" className="col-3 col-form-label">telefono:</label>
//             <div className="col-9">
//               <input type="text" className="form-control" id="telefono" name="" value=""></input>
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label for="email" className="col-3 col-form-label">email:</label>
//             <div className="col-9">
//               <input type="text" className="form-control" id="email" name="" value=""></input>
//             </div>
//           </div>
//         </form>
//       </div>
//       {/* <!-- Modal footer --> */}
//       <div className="modal-footer">
//         <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
//       </div>
//         </div>
//       </div>



//       </div>

//             </div>

//               <div className="row border border-danger">
//                 <div className="col">
//                   <h1 align="center">Cursos Acelerado de ingles</h1>      
//                     <span>
//                     Carga horaria: 3 horas semanales + 1 hora de conversación optativa.

// Duración: 2 niveles por año. (6 niveles: 3 años)

// Destinado a quienes:
// Necesitan cursos completos en todas las áreas del idioma.
// Necesitan a corto plazo lograr un nivel de inglés de competencia internacional.

// Características del curso:
// Orientado al área comercial, viajes y negocios.
// Se maximiza el trabajo áulico de modo tal de evitar tareas en casa.
// Te da la posibilidad de adicionar de forma gratuita todos los talleres que desees.
//                     </span>
//                 </div>
           
//                 <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
//  Inscribite!
//   </button>       
//   {/* the modal */}

//       <div className="modal" id="myModal">
//       <div className="modal-dialog ">
//         <div className="modal-content">
//           {/* modal header */}
//           <div className="modal-header">
//         <h4 class="modal-title">Modal Heading</h4>
//         <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
//       </div>
//       {/* <!-- Modal body --> */}
//       <div className="modal-body">
//       <form>
//           <div className="row mb-3">
//             <label for="nombre" className="col-3 col-form-label">Nombre:</label>
//             <div className="col-9">
//               <input type="text" className="form-control" id="nombre" name="" value=""></input>
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label for="apellido" className="col-3 col-form-label">apellido:</label>
//             <div className="col-9">
//               <input type="text" className="form-control" id="apellido" name="" value=""></input>
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label for="telefono" className="col-3 col-form-label">telefono:</label>
//             <div className="col-9">
//               <input type="text" className="form-control" id="telefono" name="" value=""></input>
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label for="email" className="col-3 col-form-label">email:</label>
//             <div className="col-9">
//               <input type="text" className="form-control" id="email" name="" value=""></input>
//             </div>
//           </div>
//         </form>
//       </div>
//       {/* <!-- Modal footer --> */}
//       <div className="modal-footer">
//         <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
//       </div>
//         </div>
//       </div>



//       </div>
//               </div>

//                   <div className="row border border-danger">
//                     <div className="col">
//                       <h1>Talleres de ingles</h1>
//                     </div>
                
//                     <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="modaltaller">
//  Inscribite!
//   </button>       
//   {/* the modal */}

//       <div className="modal" id="modalTaller">
//       <div className="modal-dialog ">
//         <div className="modal-content">
//           {/* modal header */}
//           <div className="modal-header">
//         <h4 class="modal-title">Modal Heading</h4>
//         <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
//       </div>
//       {/* <!-- Modal body --> */}
//       <div className="modal-body">
//       <form>
//           <div className="row mb-3">
//             <label for="nombre" className="col-3 col-form-label">Nombre:</label>
//             <div className="col-9">
//               <input type="text" className="form-control" id="nombre" name="" value=""></input>
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label for="apellido" className="col-3 col-form-label">apellido:</label>
//             <div className="col-9">
//               <input type="text" className="form-control" id="apellido" name="" value=""></input>
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label for="telefono" className="col-3 col-form-label">telefono:</label>
//             <div className="col-9">
//               <input type="text" className="form-control" id="telefono" name="" value=""></input>
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label for="email" className="col-3 col-form-label">email:</label>
//             <div className="col-9">
//               <input type="text" className="form-control" id="email" name="" value=""></input>
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label for="talleres" className="col-3 col-form-label">talleres disponibles:</label>
//             <div className="col-9">
//               <input type="text" className="form-control" id="taller" name="" value=""></input>
//             </div>
//           </div>
//         </form>
//       </div>
//       {/* <!-- Modal footer --> */}
//       <div className="modal-footer">
//         <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
//       </div>
//         </div>
//       </div>



//       </div>




// </div>


          


//             </div>


const [form,setForm] = useState({nombre:'', apellido:'', email:'',telefono:'', edad:''})

const handleSubmit = (event) => {
  console.log("handleSubmit",form)
  event.preventDefault();
}
const handleChange = (event) => {
  const name = event.target.name 
  const value = event.target.value
  console.log ("handleChange",name,value)
  setForm({...form,[name]:value});
}

return(
  <div className="container-curso">
     <div className="row ">
              <div className="col ">
           <h1>Curso de ingles para adolecentes</h1>

              <h3 align="center">Elementary Levels: Escuela Básica. (Niveles elementales e intermedios)</h3>
                <p align="center">*Pre teens</p>
                <p>Introducción para alumnos sin previo conocimiento o conocimiento básico.</p>
                <p align="center">1st teens / 2nd teens / 3rd teens / 4th teens</p>             
                <p >10 años en adelante. Sujeto a los conocimientos del alumno al ingresar.</p>
               <h5 align="center ">Objetivo General</h5>
                   <span>Capacitar a los alumnos para el futuro laboral logrando desarrollar una habilidad escrita, 
                    oral y auditiva para que sean capaces de comunicarse y comprender el idioma con fluidez y naturalidad utilizando materiales totalmente 
                  actualizados y relacionados con sus intereses y los requerimientos laborales futuros.</span>
                    
              </div>
              </div>
              <div className="row">
              <div className="col">
                <h1 align="center">Cursos de ingles Kids</h1>
                <h3 align="center">Jardin de Infantes(3 a 5 anios)</h3>
                <span>Aulas especialmente diseñadas para jardín.
Maestras jardineras bilingües.
Grupos reducidos.
Material didáctico especializado
Método de enseñanza natural (estimulación a través de juegos, canciones, actividades plásticas, videos, etc.)
Talleres de arte, cocina y juegos, donde se aprende mientras se juega.
Informe trimestral a los papás.
Clases abiertas.
Fiesta de fin de año con entrega de trabajos realizados durante el año.</span>
<h3 align="center">Primaria</h3>
<p>3 horas obligatorias + hs de talleres optativos.
Taller rotativo (cine, música, arte, juegos, cocina, teatro)
Rincón de tareas.
Taller de computación</p>
              </div>
              </div>
              <div className="row ">
              <div className="col">
              <h1>Cursos de ingles para adultos</h1>
              <span>Los cursos para adultos están organizados en 8 módulos y 
                se cursan de manera regular 2 módulos por año. Los 8 niveles pueden completarse en 4 años 
                (comenzando desde el nivel inicial) o de forma más intensiva, tomando alguno de los cursos durante el verano. 
                Se trata de un curso con particular énfasis en la comunicación oral, basado en situaciones cotidianas con clases
                 dinámicas donde los alumnos interactúan permanentemente en inglés, a la vez que se trabaja en el desarrollo estructural
                  del idioma. Al finalizar el primer módulo, el alumno podrá utilizar su inglés en situaciones cotidianas, obtener y brindar 
                  información, pedir algo en un restaurante y manejarse en un viaje. A medida que avance en los distintos módulos, dominará un
                   vocabulario más amplio y podrá manejarse con más facilidad y con expresiones más complejas en un número mayor de situaciones.
                    Es el alumno quien decide hasta dónde desea llegar, de acuerdo a sus expectativas y necesidades. Se utiliza un libro de texto
                     claro y actualizado y se complementa con material auténtico de revistas, videos y canciones, tanto británicas como americanas, 
                     de manera que los alumnos estén en contacto con diferentes acentos. El trabajo en clase se complementa con el aula virtual y el 
                     blog del LCB, donde los alumnos pueden afianzar los conocimientos adquiridos en la clase a través de práctica con actividades 
                     interactivas y disfrutar de contenidos divertidos e interesantes. Para aquellos alumnos que necesiten perfeccionar algún aspecto 
                     antes de la preparación de un examen internacional, ofrecemos el curso llamado Superior.</span>
              </div>
              </div>
              <div class="d-grid gap-2">
              <button  type="button" className=" btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
anotate!
</button>
</div>
{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">INSCRIPCION!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre</label>
        <input type="text" class="form-control" name="nombre" value={form.nombre} onChange={handleChange} />
      </div>
      <div>
        <label>apellido</label>
        <input type="text" class="form-control" name="apellido" value={form.apellido} onChange={handleChange} />
      </div>
      <div>
        <label>edad</label>
        <input type="text" class="form-control" name="edad" value={form.edad} onChange={handleChange} />
      </div>
      <div>
        <label>email</label>
        <input type="email" class="form-control"  name="email" value={form.email} onChange={handleChange} />
      </div>
      <div>
        <label className="form-label" >Telefono</label>
        <input type="text" class="form-control" name="telefono" value={form.telefono} onChange={handleChange} />
      </div>
      <div>
        <label  className="form-label">Cursos</label>
        <select class="form-select"  onChange={handleChange}>
          <option value="ninguno">ninguno</option>
          <option value="curso1">curso kids</option>
          <option value="curso2">curso para adolecentes </option>
          <option value="curso3">curso apara adultos</option>
          <option value="curso4">Curso Intensivo</option>
        


        </select>
      </div>
      <div>
        <label>talleres</label>
        <select class="form-select" onChange={handleChange}>
        <option value="ninguno">Ninguno</option>
          <option value="taller1">taller literario</option>
          <option value="taller2">taller de conversacion</option>
          <option value="taller3">ingles para viajeros</option>
          <option value="taller4">ingles para entrevistas de trabajo</option>


        </select>
      </div>
      <button type="text" className="btn btn-primary d-grid gap-2">Inscribirse!</button>


    </form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      
      </div>
    </div>
  </div>
</div>
    



  </div>
)




}

           
   
    
   


export default Cursos;