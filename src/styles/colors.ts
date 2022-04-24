import { palette } from './palette';

const colors = {
  transparent: 'rgba(0, 0, 0, 0)',
  palette,
  light: {
    background: palette.white,
    title: palette.black,
    text: palette.darkGray,
  },
  dark: {
    background: '#16222e',
    title: palette.white,
    text: palette.iceWhite,
  },
};

export { colors };
