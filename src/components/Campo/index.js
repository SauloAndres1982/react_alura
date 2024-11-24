import "./Campo.css"

const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`     
    return(
        <div className="campo-texto">
            <label>{props.titulo}</label>
            <input placeholder={placeholderModificado} required/>
        </div>
    )
}

export default Campo;