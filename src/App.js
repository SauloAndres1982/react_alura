import { act, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Formulario from "./components/Formulario/Formulario"
import MiOrg from './components/MiOrg/MiOrg';


function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(true)

  const cambiarMostrar = () => {
    setMostrarFormulario(!mostrarFormulario)
  }
  return (
    <div>      
      <Header />  
      {mostrarFormulario === true && <Formulario /> }      
      
      <MiOrg cambiarMostrar={cambiarMostrar} />  
    </div>
  );
}

export default App;
