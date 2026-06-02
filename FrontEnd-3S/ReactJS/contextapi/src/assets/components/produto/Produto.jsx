import { useContext } from "react"
import { useState } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"
import { ProdutoContext } from "../../context/ProdutoContext"

const Produto = () => {
    const { produto } = useContext(ProdutoContext)

    //states
    const [novoproduto, setNovoProduto] = useState()

    


    return (
        <div>
            <h2>Pagina de Produtos</h2>
            <p>Bem-Vindo, {produto}</p>


            <input type="text"
                placeholder="Digite o novo produto"
                onChange={(e) => {
                    setNovoProduto(e.target.value)
                }}
            />


            <button
                onClick={() => {
                    setNovoProduto(novoproduto)
                }}
            >Adicionar Produto</button>

             <p>Novo Produto: {novoproduto}</p>


             
        </div>
    )
}

export default Produto