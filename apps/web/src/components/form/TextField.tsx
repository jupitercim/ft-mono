import { styled, TextField as _TextField, TextFieldProps as _TextFieldProps } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(theme => ({
  root: {
    background: '#2B303A',
    borderRadius: '10px !important',
    variants: 'outlined',
    '& .MuiInputBase-input::placeholder': {
      color: '#FFFFFF',
      opacity: 0.7,
    },
    '& .MuiOutlinedInput-root': {
      fontSize: '20px',
      '& fieldset': {
        borderColor: 'transparent', // Remove default border color
      },
      '&:hover fieldset': {
        borderColor: 'transparent', // Remove border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: 'transparent', // Remove border color on focus
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '14px'
      }
    },
  },
}));

export const TextField = (props: _TextFieldProps) => {
  const { classes, cx } = useStyles();
  const {className, ...others} = props

  const cls = cx(classes.root, className)

  return <_TextField className={cls} {...others} />

}