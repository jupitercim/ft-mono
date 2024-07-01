import { styled, TextField as _TextField } from '@mui/material';
export const TextField = styled(_TextField)({
  background: '#2B303A',
  fontSize: '20px',
  borderRadius: '10px !important',
  variants: 'outlined',
  '& .MuiInputBase-input::placeholder': {
    fontSize: '20px',
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
  },
});
