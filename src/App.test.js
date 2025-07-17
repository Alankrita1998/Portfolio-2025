import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders project titles from the Projects component', () => {
  render(<App />);

  // Checks that at least one match exists
  expect(screen.getByText(/Weather App - SkyCast/i)).toBeInTheDocument();
  expect(screen.getAllByText(/DevOps Agent/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Food Ordering App - Foodie.co/i)).toBeInTheDocument();
  expect(screen.getByText(/CI\/CD Portfolio Website/i)).toBeInTheDocument();
});
