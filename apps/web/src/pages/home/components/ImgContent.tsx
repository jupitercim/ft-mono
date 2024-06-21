import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import logoSrc from '@/assets/images/logo.png';
import bannerBgSrc from '@/assets/images/banner-bg.png';
import { ReactNode } from 'react';

interface Props {
  title?: ReactNode;
  subtitle?: ReactNode;
  desc: ReactNode;
  imgSrc: string;
  opposite?: boolean;
}

export const ImgContent = (props: Props) => {
  const { classes, cx } = useStyles();
  const { title, subtitle, imgSrc, desc, opposite } = props;

  return (
    <Box className={cx(classes.content, { [classes.contentAppend]: opposite })}>
      <Box className={classes.blockWrap}>
        <img src={imgSrc} />
        <Box className={classes.textWrap}>
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        </Box>
      </Box>
      <Typography className={classes.desc}>{desc}</Typography>
    </Box>
  );
};

const useStyles = makeStyles()(theme => ({
  content: {
    display: 'flex',
    gap: '45px',
    marginBottom: '80px',
    '&:last-child': {
      marginBottom: '0',
    },
  },
  contentAppend: {
    flexDirection: 'row-reverse',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  blockWrap: {
    flex: 1,
    position: 'relative',
    img: {
      width: '100%',
    },
  },
  textWrap: {
    position: 'absolute',
    top: 0,
    margin: '60px',
  },
  title: {
    '&&': {
      fontSize: '32px',
      fontWeight: 700,
      color: theme.colors.white,
      lineHeight: '32px',
      marginBottom: '24px',
    },
  },
  subtitle: {},
  desc: {
    flex: 1,
    paddingTop: '30px',
    fontSize: '16px',
    lineHeight: '22px',
  },
}));
