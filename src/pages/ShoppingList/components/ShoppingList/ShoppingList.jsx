import ShoppingProduct from '../ShoppingProduct/ShoppingProduct';
import ShoppingTotalPrice from '../ShoppingTotalPrice/ShoppingTotalPrice';
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
      <ShoppingTotalPrice products={products} />
    </div>
  );
};

export default ShoppingList;
