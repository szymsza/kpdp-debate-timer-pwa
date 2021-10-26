import { autoValue, getActiveOption } from './localStorage';

type ThemeColour = 'dark' | 'light';
type ThemeColourOption = ThemeColour | typeof autoValue;

export const getActiveThemeColourOption = (): ThemeColourOption => <ThemeColourOption>getActiveOption('theme');

// Inspired by https://stackoverflow.com/a/56550819/8631727
export const getActiveThemeColour = (): ThemeColour => <ThemeColour>
  getActiveOption(
    'theme',
    (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? 'dark' : 'light',
  );

export const activateThemeColour = () => {
  const theme = getActiveThemeColour();
  document.body.setAttribute('data-theme', theme);
};
