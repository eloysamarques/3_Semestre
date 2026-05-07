import "./filme.css";

const Filmes = ({ titulo, ano, genero, nota }) => {
  return (
    <div className="filme-card">
        <h2>{titulo}</h2>
        <p>Ano: {ano}</p>
        <p>Gênero: {genero}</p>
        <p>Nota: {nota}</p>
    </div>
  )
}

export default Filmes;