import "./saudacao.css"

const Saudacao = ({ nome }) => {
    return (
        <p className="saudacao-card">Olá, {nome}! Seja bem-vindo(a)!</p>
    )
}

export default Saudacao;