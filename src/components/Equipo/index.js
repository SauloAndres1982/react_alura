import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";

const Equipo = (props) => {

    const {colorPrimario, colorSecundario, titulo} = props.datos

    const obj = {
        backgroundColor:colorSecundario
    }
    return(
        <section className="equipo" style={obj}>
           <h3 style={{borderColor: colorPrimario}}>{   titulo}</h3>
           <div className="colaboradores">
            <Colaborador />
            <Colaborador />
            <Colaborador />
            <Colaborador />
            <Colaborador />
            <Colaborador />
            
            </div> 
        </section>
    )
}

export default Equipo;