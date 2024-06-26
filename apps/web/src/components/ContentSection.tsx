import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { ReactNode } from 'react';

interface Props {
  title?: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  contentClassName?: string;
  children: ReactNode | ReactNode[];
}

export const ContentSection = (props: Props) => {
  const { classes, cx } = useStyles();
  const { title, subtitle, className, contentClassName, children } = props;

  return (
    <Box className={cx(classes.content, className)}>
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
      <Box className={contentClassName}>{children}</Box>
    </Box>
  );
};

const useStyles = makeStyles()(theme => ({
  content: {
    width: '1395px',
    margin: '0 auto',
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
  subtitle: {
    '&&': {
      maxWidth: '680px',
      margin: 'auto',
    },
  },
}));
