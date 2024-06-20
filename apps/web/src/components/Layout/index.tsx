import { LoaderFunction } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';

import { Header } from './Header';
import { useLanguageChangeOnRouteChange } from '@/hooks/useLanguage';
import { loadNamespaces } from '../../i18n';

const CONTENT_MAX_WIDTH = 1200;
const DESKTOP_HEADER_HEIGHT = 96;
const MOBILE_HEADER_HEIGHT = 40;

export function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  useLanguageChangeOnRouteChange();

  const { classes } = useStyles({
    is404: false,
    withHomeLayout: true,
    showSidebar: false,
  });

  return (
    <div className={classes.root}>
      <Header className={classes.header} />
      <div className={classes.content}>{children}</div>
    </div>
  );
}

export const layoutLoader: LoaderFunction = async () => {
  await loadNamespaces(['layout', 'shared'], 'en-US');
  return {};
};

const useStyles = makeStyles<{
  showSidebar: boolean;
  is404: boolean;
  withHomeLayout: boolean;
}>()((theme, { withHomeLayout, showSidebar, is404 }) => ({
  root: {
    display: 'grid',
    minHeight: '100vh',
    background: withHomeLayout ? theme.colors.bg : theme.colors.bg,
    gridTemplateRows: `${DESKTOP_HEADER_HEIGHT}px max-content 1fr`,
    gridTemplateAreas: !showSidebar
      ? `
      "header"
      "content"
      "footer"
      `
      : `
      "header header"
      "sidebar content"
      "sidebar content"
      "sidebar footer"
      `,
    gridTemplateColumns: !showSidebar ? `1fr` : `min(25%, 352px) 1fr`,

    [theme.breakpoints.down('md')]: {
      gridTemplateRows: `${MOBILE_HEADER_HEIGHT}px max-content 1fr`,
      gridTemplateAreas: `
      "header"
      "content"
      "footer"
      "sidebar"
      `,
      gridTemplateColumns: '1fr',
    },
    [theme.breakpoints.up('xl')]: {
      gridTemplateColumns: !showSidebar ? `1fr` : `25% 1fr`,
    },
  },

  content: {
    gridArea: 'content',
    padding: !showSidebar ? 0 : '20px 30px 40px',
    maxWidth: !showSidebar ? '100%' : CONTENT_MAX_WIDTH,
    width: '100%',

    [theme.breakpoints.down('md')]: {
      maxWidth: CONTENT_MAX_WIDTH + 32,
      padding: !showSidebar ? 0 : '20px 16px 40px',
      overflowX: 'auto',
    },
  },

  sidebar: {
    gridArea: 'sidebar',
    position: 'sticky',
    top: '20px',
    alignSelf: 'start',
    justifySelf: 'end',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },

  header: {
    maxWidth: '100vw',
    gridArea: 'header',
    padding: '0',
    background: theme.colors.bg,
    zIndex: 999,
    '> div': {
      maxWidth: showSidebar || is404 ? '100vw' : CONTENT_MAX_WIDTH,
    },
    [theme.breakpoints.down('md')]: {
      padding: '0 12px',
    },
  },
}));
