import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { ReactNode } from 'react';
import { Trans, useTranslation } from 'react-i18next';

interface Props {
  ns?: string | string[];
  iKey: string;
}



export const Paragraph = ({ ns, iKey }: Props) => {
  const { classes, cx } = useStyles();
  const { t } = useTranslation(ns);

  return (
    <Typography component={'p'} variant="body1" className={classes.p}>
      <Trans
        t={t}
        i18nKey={iKey}
        components={{
          br: <br />,
        }}
      />
    </Typography>
  );
};

const useStyles = makeStyles()((theme) => ({
  p: {
    fontSize: '16px !important',
    opacity: .7,
    [theme.breakpoints.down('md')]: {
      fontSize: '12px !important',
    }

  }
}));
