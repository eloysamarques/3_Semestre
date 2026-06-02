import { useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import { useState } from "react";

const Perfil = () => {
    //contexts - destructing
    const {usuario, setUsuario} = useContext(UsuarioContext) // state global
    // states e variáveis locais
    const [novoUsuario, setNovoUsuario] = useState() // state é local

    // ciclo de vida e funções

    //jsx

    return (
        <div>
            <h2>Página do Perfil ( {usuario} )</h2>

            <input type="text" placeholder="digite o novo usuário" 
            onChange={(e) => {
                setNovoUsuario(e.target.value)
            }}/>

            <button onClick={() => {
                setUsuario("Jade"); 
            }}>Trocar Usuário</button>
            <p>Novo Usuário: <strong>{novoUsuario}</strong></p>
        </div>
    )
}

export default Perfil