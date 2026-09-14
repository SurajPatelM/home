import {fireEvent, render, screen} from '@testing-library/react';
import ThemeToggle from './ThemeToggle';
afterEach(() => { localStorage.clear(); delete document.documentElement.dataset.theme; });
test('switches themes and restores the saved choice after remount', () => {
  localStorage.setItem('portfolio-theme', 'light');
  const first = render(<ThemeToggle />);
  fireEvent.click(screen.getByRole('button', {name:'Dark mode'}));
  expect(document.documentElement.dataset.theme).toBe('dark');
  expect(localStorage.getItem('portfolio-theme')).toBe('dark');
  first.unmount();
  render(<ThemeToggle />);
  expect(screen.getByRole('button', {name:'Dark mode'})).toHaveAttribute('aria-pressed', 'true');
  fireEvent.click(screen.getByRole('button', {name:'Dark mode'}));
  expect(document.documentElement.dataset.theme).toBe('light');
});
