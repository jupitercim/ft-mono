import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import { makeStyles } from 'tss-react/mui';

import { FormControl } from '@/components/form/FormControl';
import { FormLabel } from '@/components/form/FormLabel';
import { TextField } from '@/components/form/TextField';
import { Uploader } from '@/components/form/Uploader';
import { stdPost } from '@/api/stdPost';
import { usePost } from '@/hooks/usePost';

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
  const [requesting, setRequesting] = useState(false);
  const [loading, post] = usePost();

  return (
    <form className={classes.form}>
      <FormControl>
        <FormLabel isRequired>{t('yourName')}</FormLabel>
        <TextField
          placeholder={t('pleaseInput')}
          {...register('name', { required: true })}
          error={!!errors.name}
          helperText={errors.name ? t('nameRequired') : ''}
        />
      </FormControl>

      <FormControl>
        <FormLabel isRequired>{t('yourEmail')}</FormLabel>
        <TextField
          placeholder={t('pleaseInput')}
          {...register('email', { required: true })}
          error={!!errors.email}
          helperText={errors.email ? t('emailRequired') : ''}
        />
      </FormControl>

      <FormControl>
        <FormLabel isRequired>{t('yourMessage')}</FormLabel>
        <TextField
          placeholder={t('pleaseInput')}
          multiline
          rows={4}
          {...register('message', { required: true })}
          error={!!errors.message}
          helperText={errors.message ? t('messageRequired') : ''}
        />
      </FormControl>

      <FormControl>
        <FormLabel>{t('uploadFiles')}</FormLabel>
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
        disabled={!isValid || loading}
        sx={{
          borderRadius: '20px',
          padding: '12px 20px',
        }}
        onClick={handleSubmit(values => {
          post('uploadContact', {
            email: values.email,
            file: values.files.join(','),
            message: values.message,
            name: values.name,
            remark: '',
          });
        })}
      >
        {t('send-message')}
      </Button>
    </form>
  );
};
