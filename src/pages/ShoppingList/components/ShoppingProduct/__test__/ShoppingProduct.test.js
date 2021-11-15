import { screen, render, fireEvent } from '@testing-library/react';
import ShoppingProduct from '../ShoppingProduct';

describe('Shopping Product Component', () => {
  test('Should render the title correctly', () => {
    render(<ShoppingProduct title="Iphone" price={1000000} />);

    const headingElement = screen.getByRole('heading', { name: /Iphone/i });

    expect(headingElement).toBeInTheDocument();
  });

  test('Should render the price correctly', () => {
    render(<ShoppingProduct title="Iphone" price={1000000} />);

    const paragraphElement = screen.getByTestId('productPrice');

    expect(paragraphElement).toHaveTextContent('$1,000,000.00');
  });

  test('Should called the function when button was clicked', () => {
    const mockRemoveFromShoppingList = jest.fn(productId => {});
    render(<ShoppingProduct title="Iphone" price={1000000} removeProductFromShoppingList={mockRemoveFromShoppingList} />);

    const buttonElement = screen.getByTestId('deleteButton');
    fireEvent.click(buttonElement);

    expect(mockRemoveFromShoppingList).toHaveBeenCalled();
  });
});
