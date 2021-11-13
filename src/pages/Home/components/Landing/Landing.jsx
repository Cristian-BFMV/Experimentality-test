import banner from '../../../../assets/banner-principal.jpg';
import bannermobile from '../../../../assets/banner-principal-mobile.png';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <img src={banner} alt="Landing" className="landing-image desktop" />
      <img src={bannermobile} alt="Landing" className="landing-image mobile" />
    </div>
  );
};

export default Landing;
