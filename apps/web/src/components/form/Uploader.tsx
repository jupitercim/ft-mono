import uploaderImageSrc from '@/assets/images/folder-upload@2x.png';
import { Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => {
  return {
    hiddenInput: {
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: 0,
      cursor: 'pointer',  
      width: '100%',
      height: '100%',
      zIndex: 1,
    },
  };
});
export const Uploader = () => {
  const { classes } = useStyles();
  return (
    <Box
      position={'relative'}
      style={{
        padding: '14px 10px',
        background: '#2B303A',
      }}
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <div
        style={{
          flex: 1,
        }}
      ></div>
      <div>
        <img
          style={{
            width: '22px',
            height: '22px',
          }}
          src={uploaderImageSrc}
        />
      </div>
      <input type="file" className={classes.hiddenInput} />
    </Box>
  );
};
