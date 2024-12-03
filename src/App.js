import { act, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Formulario from "./components/Formulario/Formulario"
import MiOrg from './components/MiOrg/MiOrg';
import Equipo from './components/Equipo';


function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  const cambiarMostrar = () => {
    setMostrarFormulario(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
  }

  // Lista de equipos
  const equipos = [
    
    {
      titulo: "programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    }
    , {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#F4E9F5"
    }, 
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
      {titulo:"Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
]

  return (
    <div>      
      <Header />  
      {mostrarFormulario === true && <Formulario equipos={equipos.map((equipo)=>equipo.titulo)} registrarColaborador={registrarColaborador} />}      
      
      <MiOrg cambiarMostrar={cambiarMostrar} />  
      {
        equipos.map((equipo, index) => { 
          console.log("equipo:",equipo)
          return <Equipo datos={equipo} key={equipo.titulo} />
        } )
      }
    </div>
  );
}

export default App;
