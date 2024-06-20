import { Outlet } from 'react-router-dom';
import NiceModal from '@ebay/nice-modal-react';
import CssBaseline from '@mui/material/CssBaseline';
import { Layout } from '@/components/Layout';

import './polyfill';

import { ThemeProvider } from '@/theme';
import { loadNamespaces } from './i18n';

export const layoutLoader = async () => {
  await loadNamespaces('layout', 'en-US');
  return {};
};

export function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Layout>
        <Outlet />
      </Layout>
    </ThemeProvider>
  );
}
