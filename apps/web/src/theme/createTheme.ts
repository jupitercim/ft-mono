import type { PaletteMode } from '@mui/material';
import { createTheme as createMuiTheme, Theme } from '@mui/material';

// import { switchClasses } from '@mui/material/Switch';
import { COLORS, FONTS } from './consts';

export function createTheme(mode: PaletteMode): Theme {
  const baseTheme = createMuiTheme({
    palette: { mode },
    colors: mode === 'light' ? COLORS : COLORS,

    breakpoints: {
      values: {
        xs: 0,
        sm: 900,
        md: 1080,
        lg: 1280,
        xl: 1536,
      },
    },

    typography: {
      fontFamily: FONTS.default,
    },
  });

  return createMuiTheme(baseTheme, {
    palette: {
      mode,
      common: {
        black: baseTheme.colors.white,
        white: baseTheme.colors.gray,
      },

      primary: {
        main: baseTheme.colors.gray,
        dark: baseTheme.colors.gray,
      },

      secondary: {
        main: baseTheme.colors.white,
      },

      text: {
        primary: baseTheme.colors.gray,
        secondary: baseTheme.colors.white,
      },

      error: {
        main: baseTheme.colors.red,
      },
    },

    components: {},
  });
}
