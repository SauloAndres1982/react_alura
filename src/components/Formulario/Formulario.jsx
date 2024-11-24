import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Button from "../Button/Button";



function Formulario(){

    const controlarEnvio = (evento) => {
        console.log("Controlar envío", evento)
        evento.preventDefault()
    }
    return(
        <section className="formulario">
            <form onSubmit={controlarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo titulo="Nombre" placeholder="Ingresar nombre"/>
                <Campo titulo="Puesto" placeholder="Ingresar puesto"/>
                <Campo titulo="Foto" placeholder="Ingresar foto"/>
                <ListaOpciones />
                <Button>
                    Crear
                </Button>
            </form>
        </section>
    )
}

export default Formulario;