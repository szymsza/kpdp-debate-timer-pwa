import { TimeSlotConfig } from './types';
import localisation from './localisation';
import { RadioOption } from './components/Radio';

export const themes: RadioOption[] = [{
  label: localisation.colourModeAuto,
  value: 'auto',
  active: true,
}, {
  label: localisation.colourModeDark,
  value: 'dark',
  active: false,
}, {
  label: localisation.colourModeLight,
  value: 'light',
  active: false,
}];

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
    label: 'N3 ➝ A1',
    time: speechTimes.questions,
  }, {
    label: 'N1 ➝ A2',
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
    label: 'A3 ➝ N1',
    time: speechTimes.questions,
  }, {
    label: 'A1 ➝ N2',
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
