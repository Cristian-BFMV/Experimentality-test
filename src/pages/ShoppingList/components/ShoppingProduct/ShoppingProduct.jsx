import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatPrice } from '../../../../utils/Product.utils';
import './ShoppingProduct.css';

const ShoppingProduct = ({ id, title, price, removeProductFromShoppingList }) => {
  return (
    <div className="shopping-product-container">
      <div className="shopping-product-info">
        <h4 className="shopping-product-title">{title}</h4>
        <p className="shopping-product-price">${formatPrice(price)}</p>
      </div>
      <FontAwesomeIcon
        icon={faTrashAlt}
        size="2x"
        color="black"
        className="shopping-product-icon"
        onClick={() => removeProductFromShoppingList(id)}
      />
    </div>
  );
};

export default ShoppingProduct;
