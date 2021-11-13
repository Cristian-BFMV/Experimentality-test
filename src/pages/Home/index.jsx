import Category from './components/Category/Category';
import Landing from './components/Landing/Landing';
import PopularProducts from './components/PopularProducts/PopularProducts';

const HomePage = () => {
  return (
    <>
      <Landing />
      <Category />
      <PopularProducts />
    </>
  );
};

export default HomePage;
