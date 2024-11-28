import { useState } from "react"
import "./Campo.css"


const Campo = (props) => {
    const [valor, setValor] = useState("SAULITO")
    const placeholderModificado = `${props.placeholder}...`     

    const manejarCambio = (e) =>{
        setValor(e.target.value)
    }
    return(
        <div className="campo-texto">
            <label>{props.titulo}</label>
            <input 
                placeholder={placeholderModificado} 
                required={props.required} 
                value={valor}
                onChange={manejarCambio}
            />
        </div>
    )
}

export default Campo;