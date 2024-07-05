import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, Typography } from '@mui/material';
import { useAtomValue } from 'jotai';
import { makeStyles } from 'tss-react/mui';

import { ContactUs } from './components/ContactUs';
import { ImgContent } from './components/ImgContent';
import alpineSrc from '@/assets/images/alpine.png';
import alpineLogoSrc from '@/assets/images/alpine-1.png';
import alpineBgSrc from '@/assets/images/alpine-bg.png';
import bannerBgSrc from '@/assets/images/banner-bg.jpg';
import binanceLogoSrc from '@/assets/images/binance-1.png';
import communityBgSrc from '@/assets/images/community-bg.png';
import contactusBgSrc from '@/assets/images/contact-us-bg.png';
import potroLogoSrc from '@/assets/images/fc-potro-1.png';
import logoSrc from '@/assets/images/logo.png';
import missionBgSrc from '@/assets/images/mission-bg.png';
import portoSrc from '@/assets/images/pc-porto.png';
import portoBgSrc from '@/assets/images/pc-porto-bg.png';
import lazioLogoSrc from '@/assets/images/s.s.lazio-1.png';
import santosLogoSrc from '@/assets/images/santos-1.png';
import santosSrc from '@/assets/images/santos-fc.png';
import santosBgSrc from '@/assets/images/santos-fc-bg.png';
import lazioSrc from '@/assets/images/ss-lazio.png';
import lazioBgSrc from '@/assets/images/ss-lazio-bg.png';
import tgLogoSrc from '@/assets/images/tg-logo.png';
import visionBgSrc from '@/assets/images/vision-bg.png';
import { ContentSection } from '@/components/ContentSection';
import { Events } from '@/components/Events';
import { Paragraph } from '@/components/Paragraph';
import ScrollToView, {
  ScrollToViewItem,
  useScrollToView,
} from '@/components/ScrollToView';
import { loadNamespaces } from '@/i18n';
import { anchorNameAtom,AnchorNameEnum } from '@/state/view';
import { Footer } from './components/Footer';

export async function loader() {
  await loadNamespaces('home');
  return {};
}

export const Component = () => {
  const { t } = useTranslation('home');
  const { classes, cx } = useStyles();
  const view = useScrollToView();
  const anchorName = useAtomValue(anchorNameAtom);

  useEffect(() => {
    if (anchorName) {
      view.scrollTo(anchorName);
    }
  }, [anchorName]);

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

  const partnerships = [
    {
      logo: binanceLogoSrc,
      title: t('ps-binance'),
    },
    {
      logo: lazioLogoSrc,
      title: t('ps-lazio'),
    },
    {
      logo: potroLogoSrc,
      title: t('ps-potro'),
    },
    {
      logo: santosLogoSrc,
      title: t('ps-santos'),
    },
    {
      logo: alpineLogoSrc,
      title: t('ps-alpine'),
    },
  ];

  return (
    <Box>
      <Box className={classes.banner}>
        <img src={logoSrc} />
      </Box>
      <Box className={classes.content}>
        <ScrollToView scrollToView={view}>
          <ScrollToViewItem anchorName={AnchorNameEnum.Team}>
            <ContentSection
              title={t('featuredTeams')}
              subtitle={t('featuredTeamsSubtitle')}
            >
              <Box className={classes.teamWrap}>
                {teams.map(team => (
                  <Box
                    key={team.bg}
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
          </ScrollToViewItem>
          <ScrollToViewItem anchorName={AnchorNameEnum.Vision}>
            <ContentSection
              className={classes.ourVision}
              contentClassName={classes.ourVisionContent}
            >
              <img className={classes.contactBg} src={contactusBgSrc} />
              <ImgContent
                imgSrc={visionBgSrc}
                title={t('ourVision')}
                desc={<Paragraph iKey="ourVisionDesc" ns="home" />}
              />
              <ImgContent
                imgSrc={missionBgSrc}
                title={t('ourMission')}
                desc={<Paragraph iKey="ourMissionDesc" ns="home" />}
                opposite
              />
              <ImgContent
                imgSrc={communityBgSrc}
                title={t('community')}
                desc={
                  <>
                    <Paragraph iKey="communityDesc" ns="home" />
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
          </ScrollToViewItem>
          <ScrollToViewItem anchorName={AnchorNameEnum.Partnership}>
            <ContentSection
              title={t('partnershipNetwork')}
              subtitle={t('partnershipNetworkSubtitle')}
              contentClassName={classes.partnershipContent}
            >
              <Box className={classes.partnershipWrap}>
                {partnerships.map(ps => (
                  <Box key={ps.logo} className={classes.partnership}>
                    <img src={ps.logo} />
                    <Typography className={classes.partnershipName}>
                      {ps.title}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </ContentSection>
          </ScrollToViewItem>
          <ScrollToViewItem anchorName={AnchorNameEnum.Event}>
            <ContentSection title={t('event')} subtitle={t('eventSubtitle')}>
              <Events />
            </ContentSection>
          </ScrollToViewItem>
          <ScrollToViewItem anchorName={AnchorNameEnum.ContactUs}>
            <ContentSection title={t('contactUs')}>
              <ContactUs />
            </ContentSection>
          </ScrollToViewItem>
          <Footer />
        </ScrollToView>
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
    [theme.breakpoints.down('md')]: {
      padding: '20px 40px 44px 40px',
      '& img': {
        width: '100%',
        height: 'auto',
      },
      backgroundPosition: 'center center',
    },
  },
  content: {
    // width: '1395px',
    // margin: '0 auto',
  },
  teamWrap: {
    display: 'grid',
    marginTop: '140px',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap: '45px',
    [theme.breakpoints.down('md')]: {
      marginTop: '68px',
      gridTemplateColumns: '1fr 1fr',
      rowGap: '62px',
      columnGap: '10px',
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
    [theme.breakpoints.down('md')]: {
      img: {
        width: '100px',
        height: '100px',
        marginTop: '-46px',
      },
    },
  },
  teamName: {
    '&&': {
      fontWeight: '700',
      fontSize: '30px',
      lineHeight: '30px',
      marginTop: '8px',
      color: theme.colors.white,
      [theme.breakpoints.down('md')]: {
        fontSize: '16px',
        lineHeight: '16px',
        marginTop: '18px',
      },
    },
  },
  teamToken: {
    '&&': {
      fontSize: '20px',
      lineHeight: '20px',
      marginTop: '22px',
      color: theme.colors.gray1,
      [theme.breakpoints.down('md')]: {
        fontSize: '12px',
        lineHeight: '12px',
        marginTop: '10px',
      },
    },
  },
  teamPrice: {
    '&&': {
      fontSize: '30px',
      lineHeight: '30px',
      marginTop: '50px',
      marginBottom: '60px',
      color: theme.colors.white,
      [theme.breakpoints.down('md')]: {
        fontSize: '16px',
        lineHeight: '16px',
        marginTop: '22px',
        marginBottom: '30px',
      },
    },
  },
  ourVision: {
    width: '100%',
    margin: '0',
    backgroundColor: theme.colors.bg1,
  },
  ourVisionContent: {
    width: '1395px',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '100%',
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
      [theme.breakpoints.down('md')]: {
        marginTop: '20px',
        img: {
          width: '25px',
          height: '25px',
          marginRight: '8px',
        },
        fontSize: '20px',
      },
    },
  },
  partnershipContent: {
    textAlign: 'center',
  },
  partnershipWrap: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '102px',
    marginTop: '100px',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(6, 1fr)',
      columnGap: '30px',
      rowGap: '20px',
      marginTop: '25px',
      padding: '0 35px',
    },
  },
  partnership: {
    img: {
      width: '140px',
      height: '140px',
    },
    [theme.breakpoints.down('md')]: {
      gridColumn: 'span 2',
      img: {
        width: '70px',
        height: '70px',
      },
      ':nth-last-child(2)': {
        gridColumnEnd: '4',
      },
    },
  },
  partnershipName: {
    '&&': {
      marginTop: '24px',
      fontSize: '26px',
      lineHeight: '26px',
      color: theme.colors.gray4,
      [theme.breakpoints.down('md')]: {
        marginTop: '10px',
        fontSize: '14px',
        lineHeight: '14px',
      },
    },
  },
}));
