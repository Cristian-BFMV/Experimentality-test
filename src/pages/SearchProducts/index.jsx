import { useEffect, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import Products from './components/Products/Products';
import Error from '../../components/Error/Error';
import Spinner from '../../components/Spinner/Spinner';
import { getProductsByNameService } from '../../services/Products.service';
import { initialState, productsReducer } from '../../reducers/Products.reducer';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ProductsPage = () => {
  const query = useQuery();
  const productName = query.get('search');
  const [{ products, loading, error }, dispatch] = useReducer(productsReducer, initialState);

  useEffect(() => {
    let isMounted = true;

    const getProducstByName = async () => {
      try {
        const products = await getProductsByNameService(productName);
        if (isMounted) dispatch({ type: 'FETCH_SUCCESS', payload: { products } });
      } catch (error) {
        if (isMounted) dispatch({ type: 'FETCH_ERROR' });
      }
    };

    getProducstByName();

    return () => {
      isMounted = false;
    };
  }, [productName]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <> {error ? <Error message="No ha sido posible cargar los productos" /> : <Products products={products} />} </>
      )}
    </>
  );
};

export default ProductsPage;
