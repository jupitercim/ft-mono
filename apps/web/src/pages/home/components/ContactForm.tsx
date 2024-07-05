import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import { makeStyles } from 'tss-react/mui';

import { uploadContact } from '@/api/uploadContact';
import { FormControl } from '@/components/form/FormControl';
import { FormLabel } from '@/components/form/FormLabel';
import { TextField } from '@/components/form/TextField';
import { Uploader } from '@/components/form/Uploader';

type FormValues = {
  name: string;
  email: string;
  message: string;
  files: string[];
};

const useStyles = makeStyles()(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    padding: 3,
    borderRadius: theme.shape.borderRadius,
  },
}));

export const ContactForm: React.FC = () => {
  const { classes } = useStyles();
  const { t } = useTranslation('home');
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>();
  const [requesting, setRequesting] = useState(false)


  return (
    <form className={classes.form}>
      <FormControl>
        <FormLabel isRequired>Your Name</FormLabel>
        <TextField
          placeholder="Please Input"
          {...register('name', { required: true })}
          error={!!errors.name}
          helperText={errors.name ? 'Name is required' : ''}
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
        <FormLabel>Upload Files</FormLabel>
        <Uploader
          onChange={files => {
            setValue('files', files);
          }}
        />
      </FormControl>

      <Button
        variant="contained"
        color="info"
        size="large"
        disabled={!isValid || requesting}
        sx={{
          borderRadius: '20px',
          height: '81px',
        }}
        onClick={handleSubmit(async values => {
          setRequesting(true);
          try {
            await uploadContact({
              email: values.email,
              file: values.files.join(','),
              message: values.message,
              name: values.name,
              remark: '',
            });
          } finally {
            setRequesting(false);
          }
        })}
      >
        {t('send-message')}
      </Button>
    </form>
  );
};
