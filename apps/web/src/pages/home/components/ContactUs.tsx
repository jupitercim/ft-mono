import { Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { ContactForm } from './ContactForm';

export const ContactUs = () => {
  const { classes, cx } = useStyles();

  return (
    <Box className={classes.content}>
      <ContactForm />
    </Box>
  );
};

const useStyles = makeStyles()(() => ({
  content: {
    display: 'flex',
  },
}));
