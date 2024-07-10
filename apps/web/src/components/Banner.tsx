import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

interface BannerProps {
  title: string;
  subtitle: string;
  bgImage: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, bgImage }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '207px 20px 177px 20px',
      }}
    >
      <Typography
        sx={{
          color: '#FFFFFF',
          fontWeight: 700,
          fontSize: '48px',
          fontStyle: 'normal',
          textDecoration: 'none',
          margin: isMobile ? '20px' : '40px',
        }}
        component="h1"
        gutterBottom
      >
        {title}
      </Typography>
      <Typography
        sx={{
          opacity: 0.7,
          fontFamily: 'San Francisco Display',
          color: '#FFFFFF',
          fontWeight: 100,
          fontSize: '32px',
          fontStyle: 'normal',
          textDecoration: 'none',
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
