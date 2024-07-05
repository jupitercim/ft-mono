import {
  Box,
  FormLabel as TFormLabel,
  FormLabelProps,
  styled,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
interface IFormLabelProps extends FormLabelProps {
  isRequired?: boolean;
}
const useStyles = makeStyles()(theme => ({
  root: {
    marginBotton: '20px',
    fontSize: '24px',
    [theme.breakpoints.down('md')]: {
      fontSize: '15px',
      marginBottom: '8px',
    },
  },
}));
export const FormLabel = styled((props: IFormLabelProps) => {
  const { isRequired, ...others } = props;
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <span className="Required">{isRequired && '* '}</span>
      <TFormLabel {...others} />
    </Box>
  );
})(({ theme }) => ({
  color: 'white',

  fontWeight: 500,
  lineHeight: '20px',
  '& .Required': {
    color: 'white',
  },
}));
