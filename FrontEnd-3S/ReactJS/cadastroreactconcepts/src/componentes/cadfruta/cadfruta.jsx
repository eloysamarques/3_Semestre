import { useState } from "react";
import "./cadfruta.css";

export default function CadFruta() {
    // states, variável e funções

    //state do formulário
    const [fruta, setFruta] = useState("")
    const [arrFrutas, setArrFrutas] = useState([
        { id: 1, nome: "Abacaxi", quantidade: 10 },
        { id: 2, nome: "Mamão", quantidade: 2 }
    ])
    const [quantidade, setQuantidade] = useState(0)

    function Cadastrar(e) {
        e.preventDefault(); //evida o submit do formulario
        setArrFrutas([...arrFrutas, { id: Date.now(), nome: fruta, quantidade: quantidade }]);

        limparFormulario() // apos cadasstrar, limpar os campos do formulario
        return false;
    }

    function limparFormulario() {
        setFruta("")
        setQuantidade(0)
    }


    return (
        <section className="sessao-cadastro">
            <h1>Cadastro</h1>
            <form action="" method="post" onSubmit={Cadastrar}>
                <fieldset className="cadstro">
                    <label htmlFor="fruta" className="cadastro_rotulo"></label>
                    <label htmlFor="quantidade" className="cadastro_rotulo"></label>
                    <input
                        type="text"
                        id="fruta"
                        placeholder="Digite o nome da fruta"
                        className="cadastro_entrada"
                        onChange={(e) => {
                            setFruta(e.target.value)
                        }}
                    />
                    <input
                        type="number"
                        id="quantidade"
                        className="cadastro__entrada"
                        placeholder="Digite a quantidade de frutas"
                        onChange={(q) => {
                            setQuantidade(parseInt(q.target.value))
                        }} />

                    <button type="submit" className="cadastro__btn-cadastrar">Cadastrar</button>
                    <br />
                    <label htmlFor="">{fruta}</label>
                </fieldset>
            </form>
            
            <ul className="listagem">
                {arrFrutas.map((f) => {
                    return <li key={f.id}>Fruta {f.nome} | Quantidade {f.quantidade} </li>
                })}
            </ul>
        </section>
    );
}