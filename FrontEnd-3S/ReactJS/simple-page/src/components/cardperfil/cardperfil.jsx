import './cadperfil.css';
import people from '../../assets/react.svg';
function CardPerfil() {
  return (
    <div className="card-perfil">
        <img 
            className="card-perfil__image" 
            src={people} 
            alt="foto de perfil do usuario"
        />
    </div>
  );
}

export default CardPerfil;