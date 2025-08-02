import { render, screen, fireEvent } from '@testing-library/react';
import JsonBeautifier from './JsonBeautifier';

test('formats valid JSON', () => {
  render(<JsonBeautifier />);
  const input = screen.getByLabelText(/JSON Input/i);
  fireEvent.change(input, { target: { value: '{"a":1}' } });
  fireEvent.click(screen.getByText(/Beautify JSON/i));
  const output = screen.getByTestId('formatted-json');
  expect(output).toHaveTextContent('"a": 1');
});

test('shows error for invalid JSON', () => {
  render(<JsonBeautifier />);
  const input = screen.getByLabelText(/JSON Input/i);
  fireEvent.change(input, { target: { value: '{invalid}' } });
  fireEvent.click(screen.getByText(/Beautify JSON/i));
  expect(screen.getByRole('alert')).toHaveTextContent(/Invalid JSON/i);
  expect(screen.queryByTestId('formatted-json')).toBeNull();
});

test('copies formatted JSON to clipboard', () => {
  Object.assign(navigator, {
    clipboard: { writeText: jest.fn() },
  });

  render(<JsonBeautifier />);
  const input = screen.getByLabelText(/JSON Input/i);
  fireEvent.change(input, { target: { value: '{"a":1}' } });
  fireEvent.click(screen.getByText(/Beautify JSON/i));
  fireEvent.click(screen.getByText(/Copy to Clipboard/i));
  const expected = JSON.stringify({ a: 1 }, null, 2);
  expect(navigator.clipboard.writeText).toHaveBeenCalledWith(expected);
});
