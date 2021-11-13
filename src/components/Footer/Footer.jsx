import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import facebook from '../../assets/icon-facebook.svg';
import instagram from '../../assets/icon-instagram.svg';
import twitter from '../../assets/icon-twitter.svg';
import youtube from '../../assets/icon-youtube.svg';
import { showMore } from '../../utils/Footer.utils';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-information">
        <div className="footer-section footer-mobile-section">
          <div className="footer-title-container">
            <h3 className="footer-title">POLÍTICAS</h3>
            <FontAwesomeIcon icon={faPlus} size="1x" color="white" className="mobile" onClick={() => showMore(0)} />
          </div>
          <div className="footer-description-container">
            <p className="footer-description">Políticas de privacidad</p>
            <p className="footer-description">Políticas de cambio</p>
            <p className="footer-description">Políticas de envío</p>
            <p className="footer-description">Términos y condiciones</p>
            <p className="footer-description">Responsibilidad social</p>
          </div>
        </div>
        <div className="footer-section footer-mobile-section">
          <div className="footer-title-container">
            <h3 className="footer-title">SOBRE NOSOTROS</h3>
            <FontAwesomeIcon icon={faPlus} size="1x" color="white" className="mobile" onClick={() => showMore(1)} />
          </div>
          <div className="footer-description-container">
            <p className="footer-description">Encuentra tu tienda</p>
            <p className="footer-description">Contáctanos</p>
            <p className="footer-description">Trabaja con nosotros</p>
          </div>
        </div>
        <div className="footer-section footer-mobile-section mobile">
          <div className="footer-title-container">
            <h3 className="footer-title">MÉTODOS DE PAGO</h3>
            <FontAwesomeIcon icon={faPlus} size="1x" color="white" className="mobile" onClick={() => showMore(2)} />
          </div>
          <div className="footer-description-container">
            <p className="footer-description">Lorem, ipsum dolor.</p>
            <p className="footer-description">Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="footer-section footer-section-social-media">
          <h3 className="footer-title">SÍGUENOS EN:</h3>
          <div className="footer-icons">
            <img src={facebook} alt="Facebook" className="footer-image" />
            <img src={instagram} alt="Facebook" className="footer-image" />
            <img src={twitter} alt="Facebook" className="footer-image" />
            <img src={youtube} alt="Facebook" className="footer-image" />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p className="footer-copyright-description">© Copyright Colombia. Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
