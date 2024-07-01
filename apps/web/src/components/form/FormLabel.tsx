import {
  Box,
  FormLabel as _FormLabel,
  FormLabelProps,
  styled,
} from '@mui/material';
interface IFormLabelProps extends FormLabelProps {
  isRequired?: boolean;
}
export const FormLabel = styled((props: IFormLabelProps) => {
  const { isRequired, style, ...others } = props;

  return (
    <Box
      sx={{
        marginBottom: '21px',
      }}
    >
      <span className="Required">{isRequired && '* '}</span>
      <_FormLabel {...others} />
    </Box>
  );
})({
  color: 'white',
  fontSize: '24px',
  fontWeight: 500,
  lineHeight: '20px',
  '& .Required': {
    color: 'white',
  },
});
