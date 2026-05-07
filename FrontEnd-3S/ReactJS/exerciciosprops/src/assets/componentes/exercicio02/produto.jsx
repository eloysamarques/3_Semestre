import "./produto.css";

const Produto = ({ nome, preco, descricao }) => {
  return (
    <div className="produto-container">
      <h2>{nome}</h2>
      <p>R${preco.toFixed(2)}</p>
      <p>{descricao}</p>
    </div>
  );
};

export default Produto;

