import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/ShoppingCart';
import ShoppingList from './components/ShoppingList/ShoppingList';

const ShoppingListPage = () => {
  const { shoppingList, removeProductFromShoppingList } = useContext(ShoppingCartContext);

  return <ShoppingList products={shoppingList} removeProductFromShoppingList={removeProductFromShoppingList} />;
};

export default ShoppingListPage;
