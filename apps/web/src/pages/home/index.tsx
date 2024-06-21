import { loadNamespaces } from '@/i18n';
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import logoSrc from '@/assets/images/logo.png';
import bannerBgSrc from '@/assets/images/banner-bg.png';
import lazioSrc from '@/assets/images/ss-lazio.png';
import lazioBgSrc from '@/assets/images/ss-lazio-bg.png';
import portoSrc from '@/assets/images/pc-porto.png';
import portoBgSrc from '@/assets/images/pc-porto-bg.png';
import santosSrc from '@/assets/images/santos-fc.png';
import santosBgSrc from '@/assets/images/santos-fc-bg.png';
import alpineSrc from '@/assets/images/alpine.png';
import alpineBgSrc from '@/assets/images/alpine-bg.png';
import visionBgSrc from '@/assets/images/vision-bg.png';
import missionBgSrc from '@/assets/images/mission-bg.png';
import communityBgSrc from '@/assets/images/community-bg.png';
import tgLogoSrc from '@/assets/images/tg-logo.png';
import contactusBgSrc from '@/assets/images/contact-us-bg.png';
import { ContentSection } from '@/components/ContentSection';
import { useTranslation } from 'react-i18next';
import { ImgContent } from './components/ImgContent';

export async function loader() {
  await loadNamespaces('home', 'en-US');
  return {};
}

export const Component = () => {
  const { t } = useTranslation('home');
  const { classes, cx } = useStyles();

  const teams = [
    {
      logo: lazioSrc,
      bg: lazioBgSrc,
      name: 'SS Lazio',
      token: 'LAZIO',
      price: '$2.78',
    },
    {
      logo: portoSrc,
      bg: portoBgSrc,
      name: 'PC Porto',
      token: 'PORTO',
      price: '$2.78',
    },
    {
      logo: santosSrc,
      bg: santosBgSrc,
      name: 'Santos FC',
      token: 'SANTOS',
      price: '$2.78',
    },
    {
      logo: alpineSrc,
      bg: alpineBgSrc,
      name: 'BWT Alpine F1 Team',
      token: 'ALPINE',
      price: '$2.78',
    },
  ];

  return (
    <Box>
      <Box className={classes.banner}>
        <img src={logoSrc} />
      </Box>
      <Box className={classes.content}>
        <ContentSection
          title={t('featuredTeams')}
          subtitle={t('featuredTeamsSubtitle')}
        >
          <Box className={classes.teamWrap}>
            {teams.map(team => (
              <Box
                className={classes.team}
                sx={{
                  backgroundImage: `url('${team.bg}')`,
                  backgroundSize: 'cover',
                }}
              >
                <img src={team.logo} />
                <Typography className={classes.teamName}>
                  {team.name}
                </Typography>
                <Typography className={classes.teamToken}>
                  {team.token}
                </Typography>
                <Typography className={classes.teamPrice}>
                  {team.price}
                </Typography>
              </Box>
            ))}
          </Box>
        </ContentSection>
        <ContentSection>
          <img className={classes.contactBg} src={contactusBgSrc} />
          <ImgContent
            imgSrc={visionBgSrc}
            title={t('ourVision')}
            desc={t('ourVisionDesc')}
          />
          <ImgContent
            imgSrc={missionBgSrc}
            title={t('ourMission')}
            desc={t('ourMissionDesc')}
            opposite
          />
          <ImgContent
            imgSrc={communityBgSrc}
            title={t('community')}
            desc={
              <>
                {t('communityDesc')}
                <Box>
                  <Button
                    variant="ftNormal"
                    className={classes.joinNow}
                    href="/xxx"
                  >
                    <img src={tgLogoSrc} />
                    {t('joinNow')}
                  </Button>
                </Box>
              </>
            }
          />
        </ContentSection>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles()(theme => ({
  banner: {
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: `url('${bannerBgSrc}')`,
    backgroundSize: 'cover',
    padding: '40px 0 150px 0',
    '& img': {
      width: 890,
      height: 410,
    },
  },
  content: {
    width: '1395px',
    margin: '0 auto',
  },
  teamWrap: {
    display: 'grid',
    marginTop: '140px',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap: '45px',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  team: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.colors.gray5,
    borderRadius: '20px',
    img: {
      width: '192px',
      height: '192px',
      marginTop: '-80px',
    },
  },
  teamName: {
    '&&': {
      fontWeight: '700',
      fontSize: '30px',
      lineHeight: '30px',
      marginTop: '8px',
      color: theme.colors.white,
    },
  },
  teamToken: {
    '&&': {
      fontSize: '20px',
      lineHeight: '20px',
      marginTop: '22px',
      color: theme.colors.gray1,
    },
  },
  teamPrice: {
    '&&': {
      fontSize: '30px',
      lineHeight: '30px',
      marginTop: '50px',
      marginBottom: '60px',
      color: theme.colors.white,
    },
  },
  contactBg: {
    width: '506px',
    position: 'absolute',
    left: '-200px',
    bottom: 0,
  },
  joinNow: {
    '&&': {
      marginTop: '46px',
      img: {
        width: '30px',
        height: '30px',
        marginRight: '10px',
      },
    },
  },
}));
