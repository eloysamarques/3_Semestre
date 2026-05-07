import "./aluno.css";

function Aluno({ nome, curso, imagem }) {
  return (
    <div className="aluno-card">
      <p>{nome}</p>
      <p>{curso}</p>
      <img src={imagem} alt="Foto do Aluno" className="aluno-imagem" />
    </div>
  )
}

export default Aluno;