import { Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

export const ContactUs = () => {
  const { classes, cx } = useStyles();

  return <Box className={classes.content}>Contact Us</Box>;
};

const useStyles = makeStyles()(theme => ({
  content: {
    display: 'flex',
  },
}));
