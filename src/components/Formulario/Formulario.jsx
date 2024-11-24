import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones/ListaOpciones";


function Formulario(){
    return(
        <section className="formulario">
            <form>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo titulo="Nombre" placeholder="Ingresar nombre"/>
                <Campo titulo="Puesto" placeholder="Ingresar puesto"/>
                <Campo titulo="Foto" placeholder="Ingresar foto"/>
                <ListaOpciones />
                <button type="submit">Crear</button>
            </form>
        </section>
    )
}

export default Formulario;