import { useContext } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { ShoppingCartContext } from '../../context/ShoppingCart';
import './ProductsList.css';

const ProductsList = ({ products }) => {
  const { addProductToShoppingList } = useContext(ShoppingCartContext);

  const addProduct = product => {
    addProductToShoppingList(product);
  };

  return (
    <div className="products-list">
      {products.map(product => {
        return <ProductCard key={product.id} {...product} addProduct={addProduct} />;
      })}
    </div>
  );
};

export default ProductsList;
