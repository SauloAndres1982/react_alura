import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Formulario from "./components/Formulario/Formulario"
import MiOrg from './components/MiOrg/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer/Footer';


function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [colaboradores, setColaboradores] = useState([{
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }])

  const cambiarMostrar = () => {
    setMostrarFormulario(!mostrarFormulario)
  }

  //Registro de colaboradores

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)

    setColaboradores([...colaboradores, colaborador])
  }

//  Eliminando colaboradores

  const eliminarColaborador = () => {
    console.log("Eliminar colaborador");
  }

  // Lista de equipos
  const equipos = [
    
    {
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
        equipos.map((equipo) => { 
          return <Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo===equipo.titulo)}  
          eliminarColaborador={eliminarColaborador}
          />
        } )
      }
      <Footer />
    </div>
  );
}

export default App;
