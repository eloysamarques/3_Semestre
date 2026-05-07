import "./botao.css";

const Botao  = ({ texto, cor}) => {
  return (
    <button className="botao-bonito" style={{ backgroundColor: cor }}>{texto}</button>
  )
}

export default Botao;