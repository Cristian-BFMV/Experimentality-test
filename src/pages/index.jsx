import HomePage from './Home';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const PageRouter = () => {
  return (
    <>
      <Header />
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
};

export default PageRouter;
