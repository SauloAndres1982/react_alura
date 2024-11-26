import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
    const [mostrar, setActualizar] = useState(true)    
    
    return(
        <section className="orgSection">
            <h3 className="title">Mi organización</h3>
            <img src="/img/MiOrg.png" onClick={props.cambiarMostrar}></img>
        </section>
    )
}

export default MiOrg;