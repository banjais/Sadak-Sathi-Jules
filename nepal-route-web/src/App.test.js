import { render, screen } from '@testing-library/react';
import App from './App';

test('renders map container', () => {
  const { container } = render(<App />);
  const mapElement = container.querySelector('.leaflet-container');
  expect(mapElement).toBeInTheDocument();
});
