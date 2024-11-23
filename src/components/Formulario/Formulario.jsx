import "./Formulario.css";
import Campo from "../Campo";

function Formulario(){
    return(
        <section className="formulario">
            <form>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo />
                <Campo />
                <Campo />
                {/* <input type="text">Nombre</input>
                <input type="text">Puesto</input>
                <input type="text">Foto</input>
                <input type="text">Equipo</input> */}
                <button type="submit">Crear</button>
            </form>
        </section>
    )
}

export default Formulario;