import { Box, Grid, Typography } from '@mui/material';
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
        mt: '91px',
      }}
    >
      <Grid flex={1} display={'flex'}>
        <Box
          flex={1}
          sx={{
            maxWidth: '482px',
            margin: '0 auto',
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
              <a className={classes.link}>Legal</a>
              <a
                className={classes.link}
                style={{
                  marginLeft: '60px',
                }}
              >
                Terms
              </a>
            </Box>
            <a
              className={classes.link}
              style={{
                display: 'block',
                margin: '36px 0px',
              }}
            >
              <Typography
                style={{
                  opacity: 0.5,
                }}
              >
                fantoken@followerclub.io
              </Typography>
            </a>
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
              <a className={classes.link}>
                <img
                  src={DisLogo}
                  style={{
                    width: '32px',
                    opacity: 0.7,
                  }}
                />
              </a>
              <a
                className={classes.link}
                style={{
                  marginLeft: '27px',
                }}
              >
                <img
                  src={XLogo}
                  style={{
                    opacity: 0.7,
                    width: '26px',
                  }}
                />
              </a>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item flex={1}>
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
  link: {
    cursor: 'pointer',
    '&:hover': {
      color: theme.colors.blue,
    },
  },
  title: {
    fontWeight: 500,
    fontSize: '24px',
    color: '#FFFFFF',
    lineHeight: '36px',
    marginBottom: '54px',
  },
  text: {
    fontWeight: 400,
    fontSize: '20px',
    color: '#666666',
    lineHeight: '44px',
    fontStyle: 'normal',
  },
}));
