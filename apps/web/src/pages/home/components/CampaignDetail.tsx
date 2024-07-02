import CampainDetail from '@/assets/images/campaign-detail.png';
import { Box, Grid, Typography } from '@mui/material';
export const CampaignDetail = () => {
  return (
    <Grid
      container
      sx={{
        mt: '56px',
      }}
    >
      <Grid item xs={12} md={4}>
        <Box display={'flex'} justifyContent={'center'}>
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
          Join our fun football event and earn a medal just by participating!
          Whether you're a beginner or a pro, everyone is welcome. Thisevent
          aims to promote a healthy lifestyle, foster friendships, andprovide a
          platform for football enthusiasts to showcase their skills. Sign up
          now, enjoy the thrill of the game, and take home a shiny medalas a
          reward. Limited spots available, so don't miss out-register todayand
          be part of the excitement! Join our fun football event and earn a
          medal just by participating! Whether you're a beginner or a pro,
          everyone is welcome. Thisevent aims to promote a healthy lifestyle,
          foster friendships, andprovide a platform for football enthusiasts to
          showcase their skills. Sign up now, enjoy the thrill of the game, and
          take home a shiny medalas a reward. Limited spots available, so don't
          miss out-register todayand be part of the excitement!
        </Typography>
      </Grid>
    </Grid>
  );
};
