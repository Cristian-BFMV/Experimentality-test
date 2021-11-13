import logo from '../../assets/logo.svg';
import user from '../../assets/icon-user.svg';
import cart from '../../assets/icon-cart.svg';
import search from '../../assets/icon-search.svg';
import menu from '../../assets/icon-menu.svg';
import { navbarOpen } from '../../utils/Navbar.utils';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-brand">
        <img src={menu} alt="Menu" className="header-icon menu mobile" onClick={navbarOpen} />
        <img src={logo} alt="Clothes Store" className="header-brand-logo" />
        <img src={cart} alt="Shopping cart" className="header-icon mobile" />
      </div>
      <div className="header-actions">
        <form className="header-search-form">
          <input type="text" className="header-search-form-input" placeholder="Buscar aquí producto" />
          <img src={search} alt="Search" className="search-icon" />
        </form>
        <img src={cart} alt="Shopping cart" className="header-icon desktop" />
        <img src={user} alt="User" className="header-icon desktop" />
        <button className="header-button desktop">Iniciar Sesión</button>
      </div>
    </header>
  );
};

export default Header;
