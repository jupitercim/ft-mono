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
    <Trans
      t={t}
      i18nKey={iKey}
      components={{
        br: <br />,
      }}
    />
  );
};

const useStyles = makeStyles()(() => ({}));
