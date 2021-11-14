import React from 'react';

export const ShoppingCartContext = React.createContext();

const ShoppingCartProvider = ({ children }) => {
  const [shoppingList, setShoppingList] = React.useState([]);

  const addProductToShoppingList = product => {
    setShoppingList(prevShoppingList => [...prevShoppingList, product]);
  };

  const removeProductFromShoppingList = productId => {
    setShoppingList(prevShoppingList => prevShoppingList.filter(product => productId !== product.id));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingList,
        shoppingListNumber: shoppingList.length,
        addProductToShoppingList,
        removeProductFromShoppingList,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
