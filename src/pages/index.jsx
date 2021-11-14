import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Home';
import ProductsPage from './SearchProducts';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';

const Page = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Page;
