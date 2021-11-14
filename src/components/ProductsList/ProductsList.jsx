import ProductCard from '../ProductCard/ProductCard';
import './ProductsList.css';

const ProductsList = ({ products }) => {
  return (
    <div className="products-list">
      {products.map(product => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </div>
  );
};

export default ProductsList;
