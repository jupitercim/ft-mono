import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Button, Menu, MenuItem, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { makeStyles } from 'tss-react/mui';
import logoTopSrc from '@/assets/images/logo-top.png';
import soccerSrc from '@/assets/images/ic-soccer.png';
import { useState } from 'react';

interface Props {
  className?: string;
}

export function Header({ className }: Props): JSX.Element {
  const { t } = useTranslation('layout');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { classes, cx } = useStyles();

  const isMobile = useMediaQuery('(max-width:1080px)');

  const menus = [
    {
      title: t('menu.team'),
    },
    {
      title: t('menu.event'),
      href: '/event',
    },
    {
      title: t('menu.partnership'),
    },
    {
      title: t('menu.contactus'),
    },
  ];

  return (
    <header className={cx(className, classes.root)}>
      <Link to="/" className={classes.link}>
        <img className={classes.logo} src={logoTopSrc} />
      </Link>

      <Box className={classes.menu}>
        {menus.map(m =>
          m.href ? (
            <NavLink to={m.href}>{m.title}</NavLink>
          ) : (
            <Box>{m.title}</Box>
          ),
        )}
      </Box>
      <Box>
        <img className={classes.soccer} src={soccerSrc} onClick={handleClick} />
        <Menu
          classes={{
            paper: classes.soccerMenu,
          }}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>English</MenuItem>
          <MenuItem onClick={handleClose}>Dansk</MenuItem>
          <MenuItem onClick={handleClose}>Japanese</MenuItem>
        </Menu>
      </Box>
    </header>
  );
}

const useStyles = makeStyles()(theme => ({
  root: {
    width: '1200px',
    height: '96px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    // justifyContent: 'space-between',
    columnGap: '24px',

    [theme.breakpoints.down('md')]: {
      borderRadius: 0,
      columnGap: '12px',
    },
  },
  menu: {
    marginLeft: 'auto',
    marginRight: '56px',
    display: 'inline-flex',
    columnGap: '56px',
    // margin: '0 auto',
    alignItems: 'center',
    fontSize: '20px',
    color: theme.colors.gray,

    '& > a': {
      textDecoration: 'none',
      color: theme.colors.gray,
    },

    '& > div,a': {
      cursor: 'pointer',
      '&:hover': {
        color: theme.colors.blue,
      },
    },

    '& .active': {
      color: theme.colors.blue,
    },

    [theme.breakpoints.down('md')]: {
      margin: '0 0 0 auto',
    },
  },

  menuLinks: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      '&&': {
        display: 'none',
      },
    },
  },

  link: {
    display: 'flex',
    position: 'relative',
  },

  logo: {
    width: '50px',
    height: '50px',
    [theme.breakpoints.down('md')]: {
      width: '28px',
      height: '28px',
    },
  },

  soccer: {
    width: '30px',
    height: '30px',
    opacity: '0.7',
    transition: 'all 200ms',
    transform: 'rotate(0deg)',
    cursor: 'pointer',
    '&:hover': {
      opacity: '1',
      transform: 'rotate(90deg)',
    },
  },

  soccerMenu: {
    '&&': {
      marginTop: '20px',
      backgroundColor: theme.colors.gray5,
    },
  },
}));
