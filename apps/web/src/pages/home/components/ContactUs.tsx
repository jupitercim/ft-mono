import { Box, Button, Grid, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { ContactForm } from './ContactForm';

import { useTranslation } from 'react-i18next';

export const ContactUs = () => {

  const { t } = useTranslation('home');
  return (
    <Grid
      container
      sx={{
        mt: {
          md: '91px',
        },
      }}
    >
      <Grid item xs={12} sm={12} md={6}>
        <Info />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Box
          sx={{
            maxWidth: '584px',
            margin: '0 auto',
          }}
        >
          <ContactForm />
        </Box>
      </Grid>
    </Grid>
  );
};

const Info = () => {
  const { classes } = useStyles();
  const { t } = useTranslation('home');
  const lines = [
    t('contact-desc-01'),
    t('contact-desc-02'),
    t('contact-desc-03'),
  ];
  return (
    <Box
      flex={1}
      className={classes.info}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box flex={1}>
        <h2 className={classes.title}>Welcome to connect with Follower Club</h2>

        {lines.map((line, i) => {
          return (
            <p className={classes.text} key={i}>
              * {line}
            </p>
          );
        })}
      </Box>
    </Box>
  );
};

const useStyles = makeStyles()(theme => ({
  info: {
    maxWidth: '482px',
    [theme.breakpoints.down('md')]: {
      maxWidth: '584px',
      width: '100%',
    },
    margin: '0 auto',
  },
  title: {
    fontWeight: 500,
    fontSize: '24px',
    color: '#FFFFFF',
    lineHeight: '36px',
    marginBottom: '54px',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      marginBottom: '18px',
    },
  },
  text: {
    fontWeight: 400,
    fontSize: '20px',
    color: '#666666',
    lineHeight: '44px',
    fontStyle: 'normal',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      lineHeight: '16px',
    },
  },
}));
