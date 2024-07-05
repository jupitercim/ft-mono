import CampainDetail from '@/assets/images/campaign-detail.png';
import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { makeStyles } from 'tss-react/mui';
const useStyles = makeStyles()(theme => ({

  imageContainer: {
    width: '70%',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  }
}))

export const CampaignDetail = () => {
  const {classes} = useStyles()
  const {t} = useTranslation('event')
  return (
    <Grid
      container
      sx={{
        mt: '56px',
      }}
    >
      <Grid item xs={12} md={4}>
        <Box display={'flex'} justifyContent={'center'} className={classes.imageContainer}>
          <img
            style={{
              width: '70%',
            }}
            src={CampainDetail}
            alt="campaign-detail"
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography>
          {t('detail')}
        </Typography>
      </Grid>
    </Grid>
  );
};
