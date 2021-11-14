import { Routes, Route } from 'react-router-dom';
import HomePage from './Home';
import ProductsPage from './SearchProducts';
import ShoppingList from './ShoppingList';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';

const Page = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/shoppinglist" element={<ShoppingList />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Page;
