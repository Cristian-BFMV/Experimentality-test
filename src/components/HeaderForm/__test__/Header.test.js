import { render, screen, fireEvent } from '@testing-library/react';
import HeaderForm from '../HeaderForm';

describe('Header Form Component', () => {
  test('Should write the correct text on the input element', () => {
    render(<HeaderForm />);

    const inputElement = screen.getByPlaceholderText(/Buscar aquí producto/i);

    fireEvent.change(inputElement, { target: { value: 'Iphone' } });

    expect(inputElement.value).toBe('Iphone');
  });

  test('Should submit the form when clicking on the button', () => {
    const mockOnSubmit = jest.fn();
    render(<HeaderForm onSubmit={mockOnSubmit} />);

    const buttonElement = screen.getByAltText('Search');

    fireEvent.click(buttonElement);

    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
