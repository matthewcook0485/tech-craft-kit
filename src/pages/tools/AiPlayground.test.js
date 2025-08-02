import { render, screen, fireEvent } from '@testing-library/react';
import AiPlayground from './AiPlayground';

test('shows error when API key is missing', () => {
  render(<AiPlayground />);
  fireEvent.click(screen.getByText(/Ask AI/i));
  expect(screen.getByRole('alert')).toHaveTextContent(/No API key set/i);
});
