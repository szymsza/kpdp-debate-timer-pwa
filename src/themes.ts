export const themesLocalStorageKey = 'themeColour';

type ThemeColour = 'dark' | 'light';
type ThemeColourOption = ThemeColour | 'auto';

export const getActiveThemeColourOption = (): ThemeColourOption => {
  const storedValue = typeof window !== 'undefined' ? localStorage.getItem(themesLocalStorageKey) : null;
  if (storedValue !== null) {
    return <ThemeColourOption>storedValue;
  }
  return 'auto';
};

// Inspired by https://stackoverflow.com/a/56550819/8631727
export const getActiveThemeColour = (): ThemeColour => {
  let theme: ThemeColourOption = getActiveThemeColourOption();

  if (theme === 'auto') {
    // OS theme detected as dark
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'dark';
    } else {
      theme = 'light';
    }
  }

  return theme;
};

export const activateThemeColour = () => {
  const theme = getActiveThemeColour();
  document.body.setAttribute('data-theme', theme);
};
