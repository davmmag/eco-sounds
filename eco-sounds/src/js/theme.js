const setTheme = (theme) => {
  localStorage.setItem('theme', theme);
  document.documentElement.className = theme;
};

const changeTheme = () => localStorage.getItem('theme') === 'dark' ? setTheme('light') : setTheme('dark');
const loadTheme = () => {
  const theme = localStorage.getItem('theme') || 'dark';
  setTheme(theme);
};

export { changeTheme, loadTheme };