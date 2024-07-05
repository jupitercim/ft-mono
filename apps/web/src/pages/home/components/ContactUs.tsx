import { Box, Button, Grid, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { ContactForm } from './ContactForm';
import DisLogo from '@/assets/images/dis-logo.png';
import XLogo from '@/assets/images/x-logo.png';
import { useTransition } from 'react';
import { useTranslation } from 'react-i18next';

export const ContactUs = () => {
  const { classes, cx } = useStyles();

  const { t } = useTranslation('home');
  const lines = [
    t("contact-desc-01"),
    t("contact-desc-02"),
    t("contact-desc-03"),
  ];

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
        <Box
          flex={1}
          className={classes.info}
          sx={{

          }}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
        >
          <Box flex={1}>
            <h2 className={classes.title}>
              Welcome to connect with Follower Club
            </h2>

            {lines.map((line, i) => {
              return (
                <p className={classes.text} key={i}>
                  * {line}
                </p>
              );
            })}
          </Box>
          <Box>
            <Box>
              <Box className={classes.linkw}>
                <a className={classes.link}>Legal</a>
              </Box>
              <Box className={classes.linkw}>
                <a className={classes.link}>Terms</a>
              </Box>
            </Box>
            <Box className={classes.fantokenline}>
              <a className={classes.link}>
                <Typography
                  style={{
                    opacity: 0.5,
                  }}
                >
                  fantoken@followerclub.io
                </Typography>
              </a>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                className={classes.fticons}
              >
                <a className={classes.link}>
                  <img alt="" src={DisLogo} className={classes.fticon} />
                </a>
                <a className={classes.link}>
                  <img alt="" src={XLogo} className={classes.fticon} />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
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

const useStyles = makeStyles()(theme => ({
  info: {
    maxWidth: '482px',
    [theme.breakpoints.down('md')]: {
      maxWidth: '584px',
      width: '100%',
    },
    margin: '0 auto',
  },
  link: {
    cursor: 'pointer',
    '&:hover': {
      color: theme.colors.blue,
    },
    [theme.breakpoints.down('md')]: {
      marginRight: '5px',
    },
  },
  linkw: {
    display: 'inline-block',
    marginRight: '60px',
    [theme.breakpoints.down('md')]: {
      marginRight: '20px',
    },
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
  fantokenline: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
  },
  fticons: {},
  fticon: {
    width: '32px',
    [theme.breakpoints.down('md')]: {
      width: '16px',
      opacity: 0.7,
    },
  },
}));
