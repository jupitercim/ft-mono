import { styled, TextField as _TextField } from '@mui/material';
export const TextField = styled(_TextField)({
  background: '#2B303A',
  fontSize: '14px',
  borderRadius: '10px !important',
  variants: 'outlined',
  '& .MuiInputBase-input::placeholder': {
    fontSize: '14px',
    color: '#FFFFFF',
    opacity: 0.7,
  },
  '& .MuiOutlinedInput-root': {
    fontSize: '14px',
    '& fieldset': {
      borderColor: 'transparent', // Remove default border color
    },
    '&:hover fieldset': {
      borderColor: 'transparent', // Remove border color on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent', // Remove border color on focus
    },
  },
});
