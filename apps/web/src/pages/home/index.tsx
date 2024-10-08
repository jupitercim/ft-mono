import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { useAtomValue } from 'jotai';
import { makeStyles } from 'tss-react/mui';

import { ContactUs } from './components/ContactUs';
import { ImgContent } from './components/ImgContent';
import alpineSrc from '@/assets/images/alpine.png';
import alpineLogoSrc from '@/assets/images/alpine-1.png';
import alpineLogoHoverSrc from '@/assets/images/alpine-2.png';
import alpineBgSrc from '@/assets/images/alpine-bg.png';
import bannerBgSrc from '@/assets/images/banner-bg.jpg';
import binanceLogoSrc from '@/assets/images/binance-1.png';
import binanceLogoHoverSrc from '@/assets/images/binance-2.png';
import communityBgSrc from '@/assets/images/community-bg.png';
import contactusBgSrc from '@/assets/images/contact-us-bg.png';
import potroLogoSrc from '@/assets/images/fc-potro-1.png';
import potroLogoHoverSrc from '@/assets/images/fc-potro-2.png';
import logoSrc from '@/assets/images/logo.png';
import missionBgSrc from '@/assets/images/mission-bg.png';
import portoSrc from '@/assets/images/pc-porto.png';
import portoBgSrc from '@/assets/images/pc-porto-bg.png';
import lazioLogoSrc from '@/assets/images/s.s.lazio-1.png';
import lazioLogoHoverSrc from '@/assets/images/s.s.lazio-2.png';
import santosLogoSrc from '@/assets/images/santos-1.png';
import santosLogoHoverSrc from '@/assets/images/santos-2.png';
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
import { anchorNameAtom, AnchorNameEnum } from '@/state/view';
import { Footer } from './components/Footer';
import { Team, fetchPriceMap } from '@/api/fetchTeams';

export async function loader() {
  await loadNamespaces(['home', 'event']);
  return {};
}

export const Component = () => {
  const { t } = useTranslation('home');
  const { classes } = useStyles();
  const isMobile = useMediaQuery('(max-width:700px)');
  const view = useScrollToView();
  const anchorName = useAtomValue(anchorNameAtom);
  const [teams, setTeams] = useState<
    (Pick<Team, 'logo' | 'name' | 'coinName' | 'coinPrice'> & { bg: string })[]
  >([]);

  useEffect(() => {
    fetchPriceMap(['LAZIO', 'PORTO', 'SANTOS', 'ALPINE']).then(priceMap => {
      setTeams([
        {
          logo: lazioSrc,
          bg: lazioBgSrc,
          name: 'SS Lazio',
          coinName: 'LAZIO',
          coinPrice: priceMap.LAZIO || 0,
        },
        {
          logo: portoSrc,
          bg: portoBgSrc,
          name: 'PC Porto',
          coinName: 'PORTO',
          coinPrice: priceMap.PORTO || 0,
        },
        {
          logo: santosSrc,
          bg: santosBgSrc,
          name: 'Santos FC',
          coinName: 'SANTOS',
          coinPrice: priceMap.SANTOS || 0,
        },
        {
          logo: alpineSrc,
          bg: alpineBgSrc,
          name: 'BWT Alpine F1',
          coinName: 'ALPINE',
          coinPrice: priceMap.ALPINE || 0,
        },
      ]);
    });
  }, []);

  useEffect(() => {
    if (anchorName) {
      view.scrollTo(anchorName);
    }
  }, [anchorName]);

  const partnerships = [
    {
      logo: binanceLogoSrc,
      hoverLogo: binanceLogoHoverSrc,
      title: t('ps-binance'),
      link: 'https://www.binance.com/',
    },
    {
      logo: lazioLogoSrc,
      hoverLogo: lazioLogoHoverSrc,
      title: t('ps-lazio'),
      link: 'https://www.sslazio.it/en',
    },
    {
      logo: potroLogoSrc,
      hoverLogo: potroLogoHoverSrc,
      title: t('ps-potro'),
      link: 'https://www.fcporto.pt/en',
    },
    {
      logo: santosLogoSrc,
      hoverLogo: santosLogoHoverSrc,
      title: t('ps-santos'),
      link: 'https://www.santosfc.com.br/en/home/',
    },
    {
      logo: alpineLogoSrc,
      hoverLogo: alpineLogoHoverSrc,
      title: t('ps-alpine'),
      link: 'https://www.alpine-cars.co.uk/formula-1/f1-team.html',
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
                      backgroundPosition: 'center center',
                    }}
                  >
                    <img src={team.logo} />
                    <Typography className={classes.teamName}>
                      {team.name}
                    </Typography>
                    <Typography className={classes.teamToken}>
                      {team.coinName}
                    </Typography>
                    <Typography className={classes.teamPrice}>
                      ${team.coinPrice.toFixed(3)}
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
                  <Box
                    key={ps.logo}
                    className={classes.partnership}
                    onClick={() => window.open(ps.link)}
                  >
                    <img src={isMobile ? ps.hoverLogo : ps.logo} />
                    <img className="hoverImg" src={ps.hoverLogo} />
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
      marginTop: '30px',
      marginBottom: '20px',
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
    width: '1200px',
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
      marginTop: '36px',
      fontSize: '16px',
      padding: '6px 10px 6px 6px',
      img: {
        width: '24px',
        height: '24px',
        marginRight: '10px',
      },
      [theme.breakpoints.down('md')]: {
        marginTop: '20px',
        img: {
          width: '25px',
          height: '25px',
          marginRight: '8px',
        },
        fontSize: '18px',
      },
    },
  },
  partnershipContent: {
    textAlign: 'center',
  },
  partnershipWrap: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '32px',
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
    cursor: 'pointer',
    img: {
      width: '140px',
      height: '140px',
      '&.hoverImg': {
        display: 'none',
      },
    },
    '&:hover': {
      img: {
        display: 'none',
      },
      'img.hoverImg': {
        display: 'inline-block',
      },
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
