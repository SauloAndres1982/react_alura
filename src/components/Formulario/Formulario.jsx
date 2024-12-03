import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Button from "../Button/Button";
import { useState } from "react";

function Formulario(props){
    const [nombre, setNombre] = useState("saulito")
    const [puesto, setPuesto] = useState("Backend")
    const [foto, setFoto] = useState("Saulito bebé")
    const [equipo, setEquipo] = useState("Devops")
    const { registrarColaborador } = props

    const controlarEnvio = (evento) => {
        evento.preventDefault()
        let datosAEnviar = {nombre, puesto, foto, equipo}
        console.log(datosAEnviar)
        registrarColaborador(datosAEnviar)
    }

    return(
        <section className="formulario">
            <form onSubmit={controlarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo titulo="Nombre" placeholder="Ingresar nombre" required={true} valor={nombre} setValor={setNombre} />
                <Campo titulo="Puesto" placeholder="Ingresar puesto" valor={puesto} setValor={setPuesto} />
                <Campo titulo="Foto" placeholder="Ingresar foto" required={true} valor={foto} setValor={setFoto}/>
                <ListaOpciones valor={equipo} actualizarEquipo={setEquipo} equipos={props.equipos} />
                <Button>
                    Crear
                </Button>
            </form>
        </section>
    )
}

export default Formulario;