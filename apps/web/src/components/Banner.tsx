import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

interface BannerProps {
  title: string;
  subtitle: string;
  bgImage: string;
}

const useStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '207px 20px 177px 20px',
    [theme.breakpoints.down('md')]: {
      padding: '56px 20px 90px 20px',
    }
  },
  title: {
    '&&': {
      color: '#FFFFFF',
      fontWeight: 700,
      fontSize: '48px',
      fontStyle: 'normal',
      textDecoration: 'none',
      [theme.breakpoints.down('md')]: {
        fontSize: '22px',
      },
    },
  },
  subtitle: {
    '&&': {
      opacity: 0.7,
      fontFamily: 'San Francisco Display',
      color: '#FFFFFF',
      fontWeight: 100,
      fontSize: '32px',
      fontStyle: 'normal',
      textDecoration: 'none',
      [theme.breakpoints.down('md')]: {
        fontSize: '16px',
      }
    },

  },
}));

const Banner: React.FC<BannerProps> = ({ title, subtitle, bgImage }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { classes } = useStyles();

  return (
    <Box
      className={classes.root}
      sx={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Typography
        className={classes.title}
        sx={{
          margin: isMobile ? '20px' : '40px',
        }}
        component="h1"
        gutterBottom
      >
        {title}
      </Typography>
      <Typography
        className={classes.subtitle}
        sx={{
          margin: isMobile ? '5px' : '10px',
        }}
        component="h2"
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Banner;
