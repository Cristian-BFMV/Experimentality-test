import { render, screen } from '@testing-library/react';
import ShoppingTotalPrice from '../ShoppingTotalPrice';

describe('Shopping Total Price Component', () => {
  test('Should render the correct total price', () => {
    render(<ShoppingTotalPrice products={[{ price: 10000 }, { price: 25000 }]} />);

    const paragraphElement = screen.getByTestId('totalPrice');

    expect(paragraphElement).toHaveTextContent('$35,000.00');
  });
});
