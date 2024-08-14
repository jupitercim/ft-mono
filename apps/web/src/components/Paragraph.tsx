import { Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Trans, useTranslation } from 'react-i18next';

interface Props {
  ns?: string | string[];
  iKey: string;
  className?: string;
}

export const Paragraph = ({ ns, iKey, className }: Props) => {
  const { classes, cx } = useStyles();
  const { t } = useTranslation(ns);

  return (
    <Typography
      component={'p'}
      variant="body1"
      className={cx(classes.p, className)}
    >
      <Trans
        t={t}
        i18nKey={iKey}
        components={{
          br: <br />,
          b: <strong />,
          h3: <h3 />,
          a: <a />,
          // space
          s: (
            <i
              style={{
                paddingLeft: '4px',
              }}
            />
          ),
        }}
      />
    </Typography>
  );
};

const useStyles = makeStyles()(theme => ({
  p: {
    fontSize: '14px !important',
    opacity: 0.9,
    [theme.breakpoints.down('md')]: {
      fontSize: '12px !important',
    },
    a: {
      fontWeight: 700,
      color: theme.colors.white,
    },
  },
}));
