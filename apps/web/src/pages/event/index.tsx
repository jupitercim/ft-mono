import { loadNamespaces } from '@/i18n';

export async function loader() {
  await loadNamespaces('event', 'en-US');
  return {};
}

export const Component = () => {
  return <>event--</>;
};
