import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import logoSrc from '@/assets/images/logo.png';
import bannerBgSrc from '@/assets/images/banner-bg.png';
import { ReactNode } from 'react';

interface Props {
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode | ReactNode[];
}

export const ContentSection = (props: Props) => {
  const { classes, cx } = useStyles();
  const { title, subtitle, children } = props;

  return (
    <Box className={classes.content}>
      {title && (
        <Typography
          component="p"
          variant="ftTitle"
          textAlign="center"
          className={classes.title}
        >
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography
          component="p"
          variant="ftSubtitle"
          textAlign="center"
          className={classes.subtitle}
        >
          {subtitle}
        </Typography>
      )}
      <Box>{children}</Box>
    </Box>
  );
};

const useStyles = makeStyles()(theme => ({
  content: {
    paddingTop: '100px',
    paddingBottom: '120px',
    '> div': {
      position: 'relative',
    },
  },
  title: {
    '&&': {
      marginBottom: '40px',
    },
  },
  subtitle: {},
}));
