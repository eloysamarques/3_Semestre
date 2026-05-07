import "./contador.css";
import { useState } from "react";

const Contador = ({ valor, incrementar, decrementar }) => {
    
    const [valor, setValor] = useState(0);
    return (
        <>
        <p>Contador: {valor}</p>
        <button onClick={() => { return setValor(valor + 1) }}>++</button>
        <button onClick={() => { return setValor(valor - 1) }}>--</button>
        </>
    )
}

export default Contador;