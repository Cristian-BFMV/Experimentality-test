import React from 'react';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import { getPopularProductsService } from '../../../../services/Products.service';
import arrowleft from '../../../../assets/arrow-left.svg';
import arrowright from '../../../../assets/arrow-right.svg';
import './PopularProducts.css';

let sliceEnd = window.innerWidth > 1200 ? 4 : 1;

const reportWindowSize = () => {
  sliceEnd = window.innerWidth > 1200 ? 4 : 1;
};

window.onresize = reportWindowSize;

const PopularProducts = () => {
  const [products, setProducts] = React.useState([]);
  const [slicedProducts, setSlicedProducts] = React.useState([]);
  const [sliceStart, setSliceStart] = React.useState(0);

  React.useEffect(() => {
    const getPopularProducts = async () => {
      const products = await getPopularProductsService();
      setProducts(products);
      setSlicedProducts(products.slice(0, sliceEnd));
    };

    getPopularProducts();
  }, []);

  const nextSlice = () => {
    setSliceStart(prevSliceStart => (prevSliceStart + sliceEnd) % 12);
    setSlicedProducts(products.slice(sliceStart, sliceStart + sliceEnd));
  };

  const prevSlice = () => {
    setSliceStart(prevSliceStart => (prevSliceStart - sliceEnd < 0 ? 12 - sliceEnd : prevSliceStart - 4));
    setSlicedProducts(products.slice(sliceStart, sliceStart + sliceEnd));
  };

  return (
    <section className="popular-products-container">
      <header className="popular-products-header">
        <h1 className="popular-products-title">PRODUCTOS MÁS BUSCADOS</h1>
      </header>
      <div className="popular-products-body">
        <div className="arrow-left">
          <img src={arrowleft} alt="Arrow left" className="arrow-image" onClick={prevSlice} />
        </div>
        <div className="popular-products-list">
          {slicedProducts.map(product => {
            return <ProductCard key={product.id} {...product} />;
          })}
        </div>
        <div className="arrow-right">
          <img src={arrowright} alt="Arrow right" className="arrow-image" onClick={nextSlice} />
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
