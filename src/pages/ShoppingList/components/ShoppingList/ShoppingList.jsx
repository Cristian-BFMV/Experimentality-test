import ShoppingProduct from '../ShoppingProduct/ShoppingProduct';
import { calculateTotalPrice, formatPrice } from '../../../../utils/Product.utils';
import './ShoppingList.css';

const ShoppingList = ({ products, removeProductFromShoppingList }) => {
  return (
    <div className="shopping-list-container">
      <h2>Tu carrito de compras</h2>
      {products.map(product => {
        return (
          <ShoppingProduct key={product.id} {...product} removeProductFromShoppingList={removeProductFromShoppingList} />
        );
      })}
      <div className="shopping-list-price-container">
        <h4 className="shopping-list-price-title">Precio Total</h4>
        <p className="shopping-list-price-price">${formatPrice(calculateTotalPrice(products))}</p>
      </div>
    </div>
  );
};

export default ShoppingList;
