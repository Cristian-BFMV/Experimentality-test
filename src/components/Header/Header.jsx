import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import HeaderForm from '../HeaderForm/HeaderForm';
import logo from '../../assets/logo.svg';
import user from '../../assets/icon-user.svg';
import cart from '../../assets/icon-cart.svg';
import menu from '../../assets/icon-menu.svg';
import { navbarOpen } from '../../utils/Navbar.utils';
import { ShoppingCartContext } from '../../context/ShoppingCart';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const { shoppingListNumber } = useContext(ShoppingCartContext);

  const onSubmit = search => {
    if (search) navigate(`/products?search=${search}`);
  };

  return (
    <header className="header-container">
      <div className="header-brand">
        <img src={menu} alt="Menu" className="header-icon menu mobile" onClick={navbarOpen} />
        <Link to="/">
          <img src={logo} alt="Clothes Store" className="header-brand-logo" />
        </Link>
        <div className="shopping-cart-container mobile">
          <Link to="/shoppinglist">
            <img src={cart} alt="Shopping cart" className="header-icon" />
          </Link>
          <p className="shopping-cart-tooltip">{shoppingListNumber}</p>
        </div>
      </div>
      <div className="header-actions">
        <HeaderForm onSubmit={onSubmit} />
        <div className="shopping-cart-container desktop">
          <Link to="/shoppinglist">
            <img src={cart} alt="Shopping cart" className="header-icon " />
          </Link>
          <p className="shopping-cart-tooltip">{shoppingListNumber}</p>
        </div>
        <img src={user} alt="User" className="header-icon desktop" />
        <button className="header-button desktop">Iniciar Sesión</button>
      </div>
    </header>
  );
};

export default Header;
