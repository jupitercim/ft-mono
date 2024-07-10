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
    marginBottom: '20px',
    '& .Required': {
      color: theme.colors.white,
    },
  },
  label: {
    color: theme.colors.white,
    fontWeight: 500,
    lineHeight: '20px',

    fontSize: '24px !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '15px !important',
      marginBottom: '8px',
    },
  },
}));
export const FormLabel = styled((props: IFormLabelProps) => {
  const { isRequired, className, ...others } = props;
  const { classes } = useStyles();

  const cls = `${className} ${classes.label}`;

  return (
    <Box className={classes.root}>
      <span className="Required">{isRequired && '* '}</span>
      <TFormLabel className={cls} {...others} />
    </Box>
  );
})(() => ({
  color: 'white',
  fontWeight: 500,
  lineHeight: '20px',
  '& .Required': {
    color: 'white',
  },
}));
