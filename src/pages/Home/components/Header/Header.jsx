import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../../../assets/logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-brand">
        <img src={logo} alt="Clothes Store" className="header-brand-logo" />
      </div>
      <div className="header-actions">
        <form className="header-search-form">
          <input type="text" className="header-search-form-input" placeholder="Buscar aquí producto" />
        </form>
        <FontAwesomeIcon icon={faShoppingCart} size="2x" color="grey" />
        <FontAwesomeIcon icon={faUser} size="2x" color="grey" />
        <button className="header-button">Iniciar Sesión</button>
      </div>
    </header>
  );
};

export default Header;
