import { TimeSlotConfig } from './types';
import localisation from './localisation';
import { RadioOption } from './components/Radio';
import { getActiveThemeColourOption } from './themes';
import { getActiveMode } from './modes';
import { autoValue } from './localStorage';

const activeThemeColour = getActiveThemeColourOption();
export const themes: RadioOption[] = [{
  label: localisation.themeColourAuto,
  value: autoValue,
}, {
  label: localisation.themeColourDark,
  value: 'dark',
}, {
  label: localisation.themeColourLight,
  value: 'light',
}].map((item) => ({
  ...item,
  active: item.value === activeThemeColour,
}));

const activeMode = getActiveMode();
export const modes: RadioOption[] = [{
  label: localisation.modeLinear,
  value: 'linear',
}, {
  label: localisation.modeClassic,
  value: 'classic',
}].map((item) => ({
  ...item,
  active: item.value === activeMode,
}));

const speechTimes: Record<string, number> = {
  constructive: 6,
  closing: 5,
  questions: 3,
};

export const speakers: TimeSlotConfig[][] = [
  [{
    label: 'A1',
    time: speechTimes.constructive,
  }, {
    label: 'A2',
    time: speechTimes.constructive,
  }, {
    label: 'A3',
    time: speechTimes.closing,
  }, {
    label: 'A3 ➝ N1',
    time: speechTimes.questions,
  }, {
    label: 'A1 ➝ N2',
    time: speechTimes.questions,
  }],
  [{
    label: 'N1',
    time: speechTimes.constructive,
  }, {
    label: 'N2',
    time: speechTimes.constructive,
  }, {
    label: 'N3',
    time: speechTimes.closing,
  }, {
    label: 'N3 ➝ A1',
    time: speechTimes.questions,
  }, {
    label: 'N1 ➝ A2',
    time: speechTimes.questions,
  }],
];

export const prepTimes: TimeSlotConfig[] = [
  {
    label: localisation.affirmative,
    time: 5,
  }, {
    label: localisation.negative,
    time: 7,
  },
];
