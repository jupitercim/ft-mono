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

    components: {
      MuiTypography: {
        styleOverrides: {
          ftTitle: {
            fontSize: '56px',
            lineHeight: '56px',
            color: baseTheme.colors.white,
          },
          ftSubtitle: {
            fontSize: '24px',
            lineHeight: '30px',
            color: baseTheme.colors.gray1,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          ftNormal: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '22px',
            lineHeight: '22px',
            color: baseTheme.colors.white,
            backgroundColor: baseTheme.colors.blue,
            padding: '10px',
            borderRadius: '25px',
            textTransform: 'none',
            ':hover': {
              backgroundColor: baseTheme.colors.blue,
            },
          },
        },
      },
    },
  });
}
