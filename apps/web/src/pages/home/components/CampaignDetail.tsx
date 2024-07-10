import CampainDetail from '@/assets/images/campaign-detail.png';
import { Paragraph } from '@/components/Paragraph';
import { useEvent } from '@/hooks/useEvent';
import { useEvents } from '@/hooks/useEvents';
import { Logger } from '@/utils';
import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
const useStyles = makeStyles()(theme => ({
  imageContainer: {
    width: '70%',

    marginTop: '112px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginTop:0
    },
  },
  title: {
    '&&': {
      textAlign: 'left',
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '26px',
        marginBottom: 0,
      },
      marginBottom: "56px",
      width: '100%',
    },
  },
}));

const logger = Logger.get('CampaignDetail');
export const CampaignDetail = () => {
  const {classes} = useStyles()
  const {t} = useTranslation('event')
  const event = useEvent()
  
  

  return (
    <Grid container>
      <Grid item xs={12} md={5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Box
            display={'flex'}
            justifyContent={'center'}
            className={classes.imageContainer}
          >
            <img
              style={{
                width: '100%',
              }}
              src={CampainDetail}
              alt="campaign-detail"
            />
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={7}>
        <Typography component={'p'} variant="ftTitle" className={classes.title}>
          {t('campaign-detail')}
        </Typography>

        <Paragraph ns={'event'} iKey={event.desc}></Paragraph>
      </Grid>
    </Grid>
  );
};
