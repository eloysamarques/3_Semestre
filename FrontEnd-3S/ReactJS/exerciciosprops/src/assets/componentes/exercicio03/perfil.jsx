import "./perfil.css";

export const Perfil = ({ nome, idade, profissao }) => {
  return (
    <p className="perfil-card">
      Nome: {nome} <br />
      Idade: {idade} anos <br />
      Profissão: {profissao}
    </p>
  );
};

export default Perfil;