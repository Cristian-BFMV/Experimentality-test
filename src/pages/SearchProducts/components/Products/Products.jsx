import ProductsList from '../../../../components/ProductsList/ProductsList';
import './Products.css';

const Products = ({ products }) => {
  return (
    <div className="products-container">
      <div className="products-list-container">
        <ProductsList products={products} />
      </div>
    </div>
  );
};

export default Products;
