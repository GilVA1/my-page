import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders About me link', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const linkElement = screen.getByText(/about me/i); // Check for "About me"
  expect(linkElement).toBeInTheDocument();
});
