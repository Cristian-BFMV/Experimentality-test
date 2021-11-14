import React from 'react';
import Arrow from '../Arrow/Arrow';
import Error from '../../../../components/Error/Error';
import ProductsList from '../../../../components/ProductsList/ProductsList';
import Spinner from '../../../../components/Spinner/Spinner';
import { getPopularProductsService } from '../../../../services/Products.service';
import arrowleft from '../../../../assets/arrow-left.svg';
import arrowright from '../../../../assets/arrow-right.svg';
import { initialState, productsReducer } from '../../../../reducers/Products.reducer';
import './PopularProducts.css';

let sliceEnd = window.innerWidth > 1200 ? 4 : 1;

const reportWindowSize = () => {
  sliceEnd = window.innerWidth > 1200 ? 4 : 1;
};

window.onresize = reportWindowSize;

const PopularProducts = () => {
  const [{ products, loading, error }, dispatch] = React.useReducer(productsReducer, initialState);
  const [slicedProducts, setSlicedProducts] = React.useState([]);
  const [sliceStart, setSliceStart] = React.useState(0);

  React.useEffect(() => {
    let isMounted = true;

    const getPopularProducts = async () => {
      try {
        const products = await getPopularProductsService();
        setSlicedProducts(products.slice(0, sliceEnd));
        if (isMounted) dispatch({ type: 'FETCH_SUCCESS', payload: { products } });
      } catch (error) {
        if (isMounted) dispatch({ type: 'FETCH_ERROR' });
      }
    };

    getPopularProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  const nextSlice = () => {
    setSliceStart(prevSliceStart => (prevSliceStart + sliceEnd) % 12);
    setSlicedProducts(products.slice(sliceStart, sliceStart + sliceEnd));
  };

  const prevSlice = () => {
    setSliceStart(prevSliceStart => (prevSliceStart - sliceEnd < 0 ? 12 - sliceEnd : prevSliceStart - sliceEnd));
    setSlicedProducts(products.slice(sliceStart, sliceStart + sliceEnd));
  };

  return (
    <section className="popular-products-container">
      <header className="popular-products-header">
        <h1 className="popular-products-title">PRODUCTOS MÁS BUSCADOS</h1>
      </header>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {error ? (
            <Error message="No ha sido posible cargar los productos" />
          ) : (
            <div className="popular-products-body">
              <Arrow className="arrow-left" image={arrowleft} onClick={prevSlice} />
              <ProductsList products={slicedProducts} />
              <Arrow className="arrow-right" image={arrowright} onClick={nextSlice} />
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default PopularProducts;
