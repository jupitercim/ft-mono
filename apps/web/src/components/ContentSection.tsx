import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { ReactNode, Ref, forwardRef } from 'react';

interface Props {
  title?: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  contentClassName?: string;
  children: ReactNode | ReactNode[];
}

export const ContentSection = forwardRef(
  (props: Props, ref: Ref<HTMLDivElement>) => {
    const { classes, cx } = useStyles();
    const { title, subtitle, className, contentClassName, children } = props;

    return (
      <Box ref={ref} className={cx(classes.content, className)}>
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
  },
);

const useStyles = makeStyles()(theme => ({
  content: {
    width: '1395px',
    margin: '0 auto',
    paddingTop: '100px',
    paddingBottom: '120px',
    '> div': {
      position: 'relative',
    },
    [theme.breakpoints.down('md')]: {
      padding: '25px 15px 30px 15px',
      width: '100%',
    },
  },
  title: {
    '&&': {
      marginBottom: '40px',
      [theme.breakpoints.down('md')]: {
        fontSize: '26px',
        lineHeight: '30px',
        marginBottom: '10px',
      },
    },
  },
  subtitle: {
    '&&': {
      maxWidth: '680px',
      margin: 'auto',
      [theme.breakpoints.down('md')]: {
        fontSize: '14px',
        lineHeight: '20px',
      },
    },
  },
}));
