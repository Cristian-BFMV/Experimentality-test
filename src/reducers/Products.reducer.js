export const initialState = {
  products: [],
  loading: true,
  error: false,
};

export const productsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        products: action.payload.products,
        loading: false,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};
