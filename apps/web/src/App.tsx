import { Outlet } from 'react-router-dom';
import NiceModal from '@ebay/nice-modal-react';
import CssBaseline from '@mui/material/CssBaseline';
import { Layout } from '@/components/Layout';
import { SnackbarProvider } from 'notistack';

import './polyfill';

import { ThemeProvider } from '@/theme';
import { loadNamespaces } from './i18n';

export const layoutLoader = async () => {
  await loadNamespaces('layout');
  return {};
};

export function App() {
  return (
    <ThemeProvider>
      <SnackbarProvider>
        <CssBaseline />
        <Layout>
          <Outlet />
        </Layout>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
