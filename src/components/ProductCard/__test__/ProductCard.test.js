import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../ProductCard';

describe('Product Card Component', () => {
  test('Should render title correctly', () => {
    render(<ProductCard title="Telefono movil" price={10000} />);

    const headingElement = screen.getByRole('heading', { name: /Telefono movil/i });

    expect(headingElement).toBeInTheDocument();
  });

  test('Should render product price correctly', () => {
    render(<ProductCard title="Telefono movil" price={10000} />);

    const paragraphElement = screen.getByTestId('productPrice');

    expect(paragraphElement).toHaveTextContent('$10,000.00');
  });

  test('Should called function when button is clicked', () => {
    const addProductMock = jest.fn(productId => {});
    render(<ProductCard title="Telefono movil" price={10000} addProduct={addProductMock} />);

    const buttonElement = screen.getByRole('button', { name: /Agregar al carrito/i });
    fireEvent.click(buttonElement);

    expect(addProductMock).toHaveBeenCalled();
  });

  test('Should render the image with the correct src attribute', () => {
    const thumbnail = 'http://http2.mlstatic.com/D_982327-MCO44010911308_112020-O.jpg';
    render(<ProductCard title="Telefono movil" price={10000} thumbnail={thumbnail} />);

    const imageElement = screen.getByAltText(/Product/i);

    expect(imageElement).toHaveProperty('src', thumbnail);
  });
});
