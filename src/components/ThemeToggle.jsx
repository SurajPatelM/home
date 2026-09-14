import React from "react";

const preferenceKey = 'portfolio-theme';
export default function ThemeToggle() {
  const [theme, setTheme] = React.useState(() => {
    try {
      const saved = window.localStorage.getItem(preferenceKey);
      if (saved === 'dark' || saved === 'light') return saved;
    } catch { /* Storage may be disabled. */ }
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { window.localStorage.setItem(preferenceKey, next); } catch { /* Keep the toggle usable without storage. */ }
  };
  return <button className="theme-toggle" type="button" onClick={toggle} aria-label="Dark mode" aria-pressed={theme === 'dark'} title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
    <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span><span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
  </button>;
}
