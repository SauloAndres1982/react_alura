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
    const [titulo, setTitulo] = useState("Backend")
    const [color, setColor] = useState("#F00")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color })
    }


    return(
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo titulo="Nombre" placeholder="Ingresar nombre" required={true} valor={nombre} setValor={setNombre} />
                <Campo titulo="Puesto" placeholder="Ingresar puesto" valor={puesto} setValor={setPuesto} />
                <Campo titulo="Foto" placeholder="Ingresar foto" required={true} valor={foto} setValor={setFoto}/>
                <ListaOpciones valor={equipo} actualizarEquipo={setEquipo} equipos={props.equipos} />
                <Button>
                    Crear
                </Button>
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el equipo.</h2>
                <Campo titulo="Título" placeholder="Ingresar Título" required={true} valor={titulo} setValor={setTitulo} />
                <Campo titulo="Color" placeholder="Ingresar el color en Hexadecimal" valor={color} setValor={setColor} type="color" />
                <Button>Registrar equipo</Button>
            </form>
        </section>
    )
}

export default Formulario;