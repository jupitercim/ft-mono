import React from 'react';
import Web3 from 'web3';

import { Colors } from './theme';
import { AppDispatch as Dispatch, RootState as State } from './store';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: unknown;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ethereum: any;
    web3: Web3;
    okexchain: unknown;
    coin98: unknown;
    trustwallet: unknown;
    gtag: (...args: any[]) => void;
  }

  type RootState = State;
  type AppDispatch = Dispatch;
}

declare module '@mui/material/Slider' {
  interface SliderPropsColorOverrides {
    red: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    tiny: true;
    tiny1: true;
  }
  interface ButtonPropsVariantOverrides {
    menu: true;
    dark: true;
    brand1: true;
    brand2: true;
    brand3: true;
    brand4: true;
    tab: true;
    outlined2: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body: true;
    body3: true;
    body4: true;
    body5: true;
    body6: true;
    body7: true;
    body8: true;
    subtitle3: true;
    subtitle4: true;
    subtitle5: true;
    subtitle6: true;
    subtitle7: true;
    subtitle8: true;
    subtitle9: true;
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    colors: Colors;
  }

  interface ThemeOptions {
    colors: Colors;
  }
}

declare module 'react' {
  function forwardRef<T, P = Record<string, unknown>>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}
