import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '@mui/material/Button';
import { makeStyles } from 'tss-react/mui';
import { TextField } from '@/components/form/TextField';
import { FormLabel } from '@/components/form/FormLabel';
import { FormControl } from '@/components/form/FormControl';
import { Uploader } from '@/components/form/Uploader';

type FormValues = {
  userName: string;
  email: string;
  message: string;
  files: FileList;
};

const useStyles = makeStyles()(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    backgroundColor: '#2C2C2C',
    padding: 3,
    borderRadius: theme.shape.borderRadius,
  },
}));

export const ContactForm: React.FC = () => {
  const { classes } = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel isRequired>Your Name</FormLabel>
        <TextField
          placeholder="Please Input"
          {...register('userName', { required: true })}
          error={!!errors.userName}
          helperText={errors.userName ? 'Name is required' : ''}
        />
      </FormControl>

      <FormControl>
        <FormLabel isRequired>Your Email</FormLabel>
        <TextField
          placeholder="Please Input"
          {...register('email', { required: true })}
          error={!!errors.email}
          helperText={errors.email ? 'Email is required' : ''}
        />
      </FormControl>

      <FormControl>
        <FormLabel isRequired>Message</FormLabel>
        <TextField
          placeholder="Please Input"
          multiline
          rows={4}
          {...register('message', { required: true })}
          error={!!errors.message}
          helperText={errors.message ? 'Message is required' : ''}
        />
      </FormControl>

      <FormControl>
        <Uploader />
      </FormControl>

      <Button type="submit" variant="contained" color="info">
        Send Message
      </Button>
    </form>
  );
};
