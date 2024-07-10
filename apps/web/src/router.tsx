import { createBrowserRouter, generatePath, PathParam } from 'react-router-dom';

import packageJSON from '../package.json';
import { App, layoutLoader } from './App';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <>error</>,
      loader: layoutLoader,
      children: [
        {
          index: true,
          lazy: async () => {
            const { Component, loader } = await import('@/pages/home');
            return {
              loader,
              Component,
            };
          },
        },
        {
          path: '/event/:id',
          lazy: async () => {
            const { Component, loader } = await import('@/pages/event/event');
            return {
              loader,
              Component,
            };
          },
        },
      ],
    },
  ],
  { basename: packageJSON.homepage },
);

type Params<Path extends string> = {
  [key in PathParam<Path>]: string | null;
};

export const routerPaths = {
  home: '/',
  bnbStaking: '/liquid-staking/BNB',
  cac: '/cac',
  invitation: '/invitation/:code?',
  megadrop: '/megadrop',
  borrowLisUSD: '/borrow-lisusd',
  generatePath: {
    cac: (params: Params<'/cac/:tab?'>) => generatePath('/cac/:tab?', params),
    invitation: (params: Params<'/invitation/:code?'>) =>
      generatePath('/invitation/:code?', params),
  },
};
