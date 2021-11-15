import { calculateTotalPrice, formatPrice } from '../../../../utils/Product.utils';
import './ShoppingTotalPrice.css';

const ShoppingTotalPrice = ({ products }) => {
  return (
    <div className="shopping-list-price-container">
      <h4 className="shopping-list-price-title">Precio Total</h4>
      <p className="shopping-list-price-price" data-testid="totalPrice">
        ${formatPrice(calculateTotalPrice(products))}
      </p>
    </div>
  );
};

export default ShoppingTotalPrice;
