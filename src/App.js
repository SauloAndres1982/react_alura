import { useState } from 'react';
import './App.css';
import { v4 as uuid } from "uuid"
import Header from './components/Header/Header';
import Formulario from "./components/Formulario/Formulario"
import MiOrg from './components/MiOrg/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer/Footer';


function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [colaboradores, setColaboradores] = useState([{
    id:uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    id:uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    id:uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    id:uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    id:uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }])
  
  
  const [equipos, setEquipos] = useState(
    [
      
      {
        id:uuid(),
        titulo: "Programación",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9"
      },
      {
        titulo: "Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF"
      },
      {
        id:uuid(),
        titulo: "Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2"
      },
      {
        id:uuid(),
        titulo: "Devops",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8"
      },
       {
        id:uuid(),
        titulo: "UX y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#F4E9F5"
      }, 
      {
        id:uuid(),
        titulo: "Móvil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9",
      },

      {
        id:uuid(),
        titulo:"Innovación y Gestión",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF"
      }
    ]
  )
  console.log("EL id es", uuid());

  const cambiarMostrar = () => {
    setMostrarFormulario(!mostrarFormulario)
  }

  //Registro de colaboradores

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)

    setColaboradores([...colaboradores, colaborador])
  }

//  Eliminando colaboradores

  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColor(nuevosColaboradores)
        
  }

  //Crear equipo 


  const actualizarColor = (color, id) => {
    console.log(color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    setEquipos(equiposActualizados)
    
  }

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    setEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }
  

  return (
    <div>      
      <Header />  
      {mostrarFormulario === true && <Formulario equipos={equipos.map((equipo)=>equipo.titulo)} registrarColaborador={registrarColaborador} crearEquipo={crearEquipo} />}      
      
      <MiOrg cambiarMostrar={cambiarMostrar} />  
      {
        equipos.map((equipo) => { 
          return <Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo===equipo.titulo)}  
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          />
        } )
      }
      <Footer />
    </div>
  );
}

export default App;
