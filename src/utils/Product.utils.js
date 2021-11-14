export const formatPrice = price => {
  return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

export const calculateTotalPrice = products => {
  let totalPrice = 0;
  products.forEach(product => (totalPrice += product.price));
  return totalPrice;
};
