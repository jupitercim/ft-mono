import { SliderTypeMap } from '@mui/material';

export const COLORS = {
  white: '#fff',
  bg: '#0E1015',
  red: '#FF2929',
  blue: '#28A7E8',
  gray: '#CDCDCD',
  gray1: '#B9BABA',
  gray2: '#666666',
  gray3: '#828488',
  gray4: '#A6A6A7',
  gray5: '#22262D',
};

export type Colors = typeof COLORS;

export const FONTS = {
  default: 'Gilroy, sans-serif',
};

export const SliderErrorClasses: SliderTypeMap['props']['classes'] = {
  markLabel: 'error',
  track: 'error',
  thumb: 'error',
};

export const SliderOkClasses: SliderTypeMap['props']['classes'] = {
  markLabel: 'ok',
  track: 'ok',
  thumb: 'ok',
};

export const SliderFadedClasses: SliderTypeMap['props']['classes'] = {
  markLabel: 'faded',
};
