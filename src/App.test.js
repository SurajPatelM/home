import { render, screen, within } from '@testing-library/react';
import App from './App';

test('connects portfolio navigation, projects, and contact to usable destinations', () => {
  const { container } = render(<App />);
  for (const link of container.querySelectorAll('a[href^="#"]')) {
    expect(container.querySelector(link.getAttribute('href'))).not.toBeNull();
  }
  const projects = container.querySelector('#projects');
  expect(within(projects).getAllByRole('article')).toHaveLength(6);
  for (const link of within(projects).getAllByRole('link', {name: /view .* on github/i})) {
    expect(link.href).toMatch(/^https:\/\/github.com\/SurajPatelM\/.+/);
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  }
  expect(screen.getByRole('link', {name: /muthegowda.s@northeastern.edu/i})).toHaveAttribute('href', 'mailto:muthegowda.s@northeastern.edu');
  expect(container.textContent).not.toContain('\u2014');
});
