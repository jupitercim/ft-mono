import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { useMediaQuery } from '@mui/material';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import events1Src from '@/assets/images/events-1.png';
import ongoingBgSrc from '@/assets/images/ongoing-bg.png';
import notStartedBgSrc from '@/assets/images/not-started-bg.png';
import endedBgSrc from '@/assets/images/ended-bg.png';
import { ReactNode } from 'react';
import { useEvents } from '@/hooks/useEvents';

enum EventStatusEnum {
  Ongoing,
  NotStarted,
  Ended,
}

const Event = ({
  src,
  title,
  status,
}: {
  src: string;
  title: string;
  status: EventStatusEnum;
}) => {
  const { classes, cx } = useStyles();
  const statusMap = {
    [EventStatusEnum.Ongoing]: ongoingBgSrc,
    [EventStatusEnum.NotStarted]: notStartedBgSrc,
    [EventStatusEnum.Ended]: endedBgSrc,
  };
  return (
    <Box className={classes.event}>
      <img src={src} />
      <Typography>{title}</Typography>
      <Box className={classes.eventStatus}>
        <span
          style={{
            backgroundImage: `url('${statusMap[status]}')`,
          }}
        >
          Ongoing
        </span>
      </Box>
    </Box>
  );
};

export const Events = () => {
  const { classes, cx } = useStyles();

  const isMobile = useMediaQuery('(max-width:700px)');

  const events = useEvents();

  const settings: Settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    arrows: false,
    dotsClass: classes.dots,
  };

  let eventsNode: ReactNode | ReactNode[] = (
    <Box width="100%">
      <Slider {...settings}>
        {events.map(evt => (
          <Box
            key={evt.title}
            sx={{
              cursor: 'pointer',
            }}
            onClick={() => {
              window.open(`/event/${evt.id}`);
            }}
          >
            <Event src={evt.img} title={evt.title} status={evt.status} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
  if (isMobile) {
    eventsNode = events.map(evt => (
      <Event
        key={evt.title}
        src={evt.img}
        title={evt.title}
        status={evt.status}
      />
    ));
  }

  return <Box className={classes.eventsWrap}>{eventsNode}</Box>;
};

const useStyles = makeStyles()(theme => ({
  eventsWrap: {
    display: 'flex',
    marginTop: '90px',
    gap: '50px',
    [theme.breakpoints.down('md')]: {
      marginTop: '30px',
      flexDirection: 'column',
      gap: '30px',
    },
  },
  event: {
    display: 'flex',
    flexDirection: 'column',
    width: '434px',
    img: {
      width: '100%',
    },
    p: {
      fontSize: '30px',
      lineHeight: '35px',
      fontWeight: '500',
      color: theme.colors.white,
      marginTop: '30px',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      p: {
        fontSize: '17px',
        lineHeight: '22px',
        marginTop: '10px',
      },
    },
  },
  eventStatus: {
    display: 'inline-block',
    marginTop: '40px',
    span: {
      display: 'inline-block',
      minWidth: '155px',
      height: '42px',
      lineHeight: '42px',
      fontSize: '20px',
      paddingLeft: '20px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      color: theme.colors.white,
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '15px',
      span: {
        minWidth: '78px',
        height: '22px',
        lineHeight: '22px',
        fontSize: '14px',
        paddingLeft: '10px',
        color: theme.colors.white,
      },
    },
  },
  dots: {
    display: 'flex !important',
    gap: '10px',
    marginTop: '80px',
    padding: '0px',
    alignItems: 'center',
    justifyContent: 'center',
    button: {
      display: 'block',
      width: '24px',
      height: '24px',
      borderRadius: '12px',
      backgroundColor: theme.colors.gray6,
      border: 'none',
      transition: 'all 200ms',
      color: 'transparent',
      cursor: 'pointer',
    },
    li: {
      listStyle: 'none',
      '&.slick-active': {
        button: {
          width: '48px',
          backgroundColor: theme.colors.white,
          cursor: 'default',
        },
      },
    },
  },
}));
