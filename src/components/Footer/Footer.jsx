import facebook from '../../assets/icon-facebook.svg';
import instagram from '../../assets/icon-instagram.svg';
import twitter from '../../assets/icon-twitter.svg';
import youtube from '../../assets/icon-youtube.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-information">
        <div className="footer-section">
          <h3 className="footer-title">POLÍTICAS</h3>
          <p className="footer-description">Políticas de privacidad</p>
          <p className="footer-description">Políticas de cambio</p>
          <p className="footer-description">Políticas de envío</p>
          <p className="footer-description">Términos y condiciones</p>
          <p className="footer-description">Responsibilidad social</p>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">SOBRE NOSOTROS</h3>
          <p className="footer-description">Encuentra tu tienda</p>
          <p className="footer-description">Contáctanos</p>
          <p className="footer-description">Trabaja con nosotros</p>
        </div>
        <div className="footer-section">
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
