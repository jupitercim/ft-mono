import DisLogo from '@/assets/images/dis-logo.png';
import XLogo from '@/assets/images/x-logo.png';
import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

export const Footer = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.linkSection}>
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
  );
}


const useStyles = makeStyles()(theme => ({
  root: {
    padding: '0 50px',
    marginBottom: '36px',
    [theme.breakpoints.down('md')]: {
      maxWidth: '584px',
      marginBottom: '14px'
    }
  },
  linkSection: {
    marginBottom: '20px',
  },
  link: {
    cursor: 'pointer',
    '&:hover': {
      color: theme.colors.blue,
    },
    marginRight: '10px',
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

  fantokenline: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fticons: {},
  fticon: {
    width: '16px',
    opacity: 0.7,
  },
}));
