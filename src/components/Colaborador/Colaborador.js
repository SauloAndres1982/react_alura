import "./Colaborador.css"
import { AiFillCloseCircle } from "react-icons/ai"

const Colaborador = (props) => {
    const { colorPrimario, eliminarColaborador } = props
    const {nombre, foto, equipo, puesto} = props.datos
    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={eliminarColaborador} />
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt={nombre}></img>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}

export default Colaborador;