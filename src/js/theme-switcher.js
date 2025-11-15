const THEME_KEY = 'theme'; 
const TOGGLE_ID = '#themeToggle';

function applyTheme(theme) {
  document.body.classList.remove('theme-light', 'theme-dark');
  
  document.body.classList.add(`theme-${theme}`);

  const btn = document.querySelector(TOGGLE_ID);
  if (btn) {
    const dark = theme === 'dark';
    btn.setAttribute('aria-pressed', String(dark));
    btn.textContent = dark ? '☀️ Light Theme' : '🌙 Dark Theme';
  }
}

function getStoredTheme() {
  return localStorage.getItem(THEME_KEY);
}

function storeTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

function systemPrefersDark() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function initTheme() {
  const stored = getStoredTheme();
  const initial = stored ?? (systemPrefersDark() ? 'dark' : 'light');
  applyTheme(initial);
}

export function toggleTheme() {
  const current = document.body.classList.contains('theme-dark') ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  storeTheme(next);
}

export default { initTheme, toggleTheme };
