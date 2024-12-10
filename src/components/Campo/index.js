import { useState } from "react"
import "./Campo.css"


const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`     

    const { type = "text" } = props

    const manejarCambio = (e) =>{
        props.setValor(e.target.value)
    }
    return(
        <div className={`campo campo-${type}`}>
            <label>{props.titulo}</label>
            <input
                placeholder={placeholderModificado} 
                required={props.required} 
                value={props.value}
                onChange={manejarCambio}
                type={type}
            />
        </div>
    )
}

export default Campo;