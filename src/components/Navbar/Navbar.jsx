import close from '../../assets/icon-close.svg';
import { navbarOpen } from '../../utils/Navbar.utils';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-close">
        <img src={close} alt="Close" className="navbar-close-icon mobile" onClick={navbarOpen} />
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <p className="navbar-link">Hombre</p>
        </li>
        <li className="navbar-item">
          <p className="navbar-link">Mujer</p>
        </li>
        <li className="navbar-item">
          <p className="navbar-link">Junior</p>
        </li>
        <li className="navbar-item">
          <p className="navbar-link">Niños</p>
        </li>
        <li className="navbar-item">
          <p className="navbar-link">Accesorios</p>
        </li>
        <li className="navbar-item">
          <p className="navbar-link">Ofertas</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
