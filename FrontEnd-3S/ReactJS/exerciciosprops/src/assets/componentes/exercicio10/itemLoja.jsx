import "./itemLoja.css"

const ItemLoja = ({ nome, preco, categoria, estoque }) => {
    return (
        <div className="item">
            <h2>{nome}</h2>

            <p>Preço: R$ {preco}</p>

            <p>Categoria: {categoria}</p>

            {
                estoque > 0
                ? <p>Produto disponível</p>
                : <p>Produto indisponível</p>
            }
        </div>
    )
}

export default ItemLoja