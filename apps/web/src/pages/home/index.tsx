import { loadNamespaces } from '@/i18n';
import { Box } from '@mui/material';

export async function loader() {
  await loadNamespaces('home', 'en-US');
  return {};
}

export const Component = () => {
  return <Box>home</Box>;
};
