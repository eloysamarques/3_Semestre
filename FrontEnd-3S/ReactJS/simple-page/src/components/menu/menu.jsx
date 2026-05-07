import './menu.css';
import CardPerfil from '../cardPerfil/cardperfil';

function Menu() {
  return (  
    <nav className="menu">
        <a href="#" className="menu__item">Home</a>
        <a href="#" className="menu__item">Quem Somos</a>
        <a href="#" className="menu__item">Contato</a>
        <a href="#" className="menu__item menu__item--button--default">Cadastrar</a>
        <a href="#" className="menu__item menu__item--sucess">Entrar</a>

        <CardPerfil />
    </nav>

    
    
  );
}

export default Menu;
