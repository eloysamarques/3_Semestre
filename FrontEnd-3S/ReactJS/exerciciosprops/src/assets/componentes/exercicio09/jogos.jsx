import "./jogos.css";

const Jogos = ({ nome, plataforma, preco, imagem }) => {
    return (
        <div className="jogo-card">
            <img src={imagem} alt={nome} className="jogo-imagem" />
            <h2>{nome}</h2>
            <p>Plataforma: {plataforma}</p>
            <p>Preço: R${preco.toFixed(2)}</p>
        </div>
    )
}

export default Jogos;