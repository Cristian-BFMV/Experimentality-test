import banner from '../../../../assets/banner-principal.jpg';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <img src={banner} alt="Landing" className="landing-image" />
    </div>
  );
};

export default Landing;
