import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Button from "../Button/Button";
import { useState } from "react";

function Formulario(){
    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("Devops")

    const controlarEnvio = (evento) => {
        evento.preventDefault()
        let datosAEnviar = {nombre:nombre, puesto:puesto, foto:foto}
        console.log(datosAEnviar)
    }

    return(
        <section className="formulario">
            <form onSubmit={controlarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo titulo="Nombre" placeholder="Ingresar nombre" required={true} value={nombre} actualizarValor={setNombre} />
                <Campo titulo="Puesto" placeholder="Ingresar puesto" value={puesto} actualizarValor={setPuesto} />
                <Campo titulo="Foto" placeholder="Ingresar foto" required={true}value={foto} actualizarValor={setFoto}/>
                <ListaOpciones value={equipo} actualizarEquipo={setEquipo} />
                <Button>
                    Crear
                </Button>
            </form>
        </section>
    )
}

export default Formulario;