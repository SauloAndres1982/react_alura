import { useState } from "react"
import "./Campo.css"


const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`     

    const manejarCambio = (e) =>{
        props.setValor(e.target.value)
    }
    return(
        <div className="campo-texto">
            <label>{props.titulo}</label>
            <input 
                placeholder={placeholderModificado} 
                required={props.required} 
                value={props.value}
                onChange={manejarCambio}
            />
        </div>
    )
}

export default Campo;