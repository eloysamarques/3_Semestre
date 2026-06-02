import { useState } from "react"
import { ProdutoContext } from "../../context/ProdutoContext"
import { useContext } from "react"

const CadastrarProduto = () => {

    // contextos globais
    const { listaProdutos, setListaProdutos } = useContext(ProdutoContext)

    //states locais
    const [novoProduto, setNovoProduto] = useState()

    return (
        <div>
            <h2>Cadastro de produtos</h2>

            <input 
            type="text" 
            onChange={(e) => 
            setNovoProduto(e.target.value)} />

            <button 
            onClick={() => 
            {setListaProdutos([...listaProdutos, novoProduto]);
                alert("Produto cadastrado com sucesso!")
            }}>Cadastrar</button>

            <p>Produto que sera cadastrado: {novoProduto}</p>
        </div>
    )
}

export default CadastrarProduto