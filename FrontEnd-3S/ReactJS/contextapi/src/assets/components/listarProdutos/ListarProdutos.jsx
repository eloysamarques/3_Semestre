import { useContext } from 'react';
import { ProdutoContext } from '../../context/ProdutoContext';

const ListarProdutos = () => {
    const {listaProdutos} = useContext(ProdutoContext)
    console.log(listaProdutos)
    
    return (
        <>
        <h2>Listagem de Produtos</h2>
        {listaProdutos.map((produto, index) => {
            return (
                <p key={index}>{produto}</p>
            )
        })}
        </>
    )

}

export default ListarProdutos