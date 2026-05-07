import "./contato.css";

const Contato = ({ nome, email, telefone }) => {
    return (    
        <div className="contato-card">
            <h2>{nome}</h2>
            <p>Email: {email}</p>
            <p>Telefone: {telefone}</p>
        </div>
    )
}

export default Contato;