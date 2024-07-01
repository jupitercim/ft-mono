import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@mui/material';
import Box from '@mui/material/Box';
import { makeStyles } from 'tss-react/mui';
import logoTopSrc from '@/assets/images/logo-top.png';
import soccerSrc from '@/assets/images/ic-soccer.png';
import teamsSrc from '@/assets/images/ic-teams.png';
import eventsSrc from '@/assets/images/ic-events.png';
import partnershipSrc from '@/assets/images/ic-partnership.png';
import contactUsSrc from '@/assets/images/ic-contact-us.png';
import moreSrc from '@/assets/images/more.png';
import closeSrc from '@/assets/images/close.png';
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
      icon: teamsSrc,
    },
    {
      title: t('menu.event'),
      href: '/event',
      icon: eventsSrc,
    },
    {
      title: t('menu.partnership'),
      icon: partnershipSrc,
    },
    {
      title: t('menu.contactus'),
      icon: contactUsSrc,
    },
  ];

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <header className={cx(className, classes.root)}>
      <Link to="/" className={classes.link}>
        <img className={classes.logo} src={logoTopSrc} />
      </Link>
      <Drawer
        anchor="right"
        open={openDrawer}
        classes={{
          paper: classes.drawerWrap,
        }}
        onClose={() => setOpenDrawer(!openDrawer)}
      >
        <Box
          height="44px"
          display="flex"
          alignItems="center"
          justifyContent="end"
          marginRight="12px"
        >
          <img
            className={classes.opIcon}
            src={closeSrc}
            onClick={() => setOpenDrawer(false)}
          />
        </Box>
        <List sx={{ padding: '0' }}>
          {menus.map(m => (
            <ListItem key={m.title} disablePadding>
              <ListItemButton>
                <img className={classes.menuIcon} src={m.icon} />
                <ListItemText primary={m.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box className={classes.menu}>
        {menus.map(m =>
          m.href ? (
            <NavLink key={m.title} to={m.href}>
              {m.title}
            </NavLink>
          ) : (
            <Box key={m.title}>{m.title}</Box>
          ),
        )}
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        className={classes.soccerWrap}
      >
        <img
          className={cx(classes.soccer, { active: open })}
          src={soccerSrc}
          onClick={handleClick}
        />
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
      <Box display="flex" alignItems="center" justifyContent="center">
        <img
          className={classes.opIcon}
          src={moreSrc}
          onClick={() => setOpenDrawer(!openDrawer)}
        />
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
      height: '44px',
      borderRadius: 0,
      columnGap: '12px',
    },
  },

  drawerWrap: {
    '&&': {
      width: '300px',
      backgroundColor: theme.colors.gray5,
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
      display: 'none',
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

  menuIcon: {
    [theme.breakpoints.down('md')]: {
      width: '22px',
      height: '22px',
      marginRight: '6px',
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
      width: '25px',
      height: '25px',
    },
  },

  soccerWrap: {
    [theme.breakpoints.down('md')]: {
      marginLeft: 'auto',
    },
  },

  soccer: {
    width: '30px',
    height: '30px',
    opacity: '0.7',
    transition: 'all 200ms',
    transform: 'rotate(0deg)',
    cursor: 'pointer',
    '&:hover, &.active': {
      opacity: '1',
      transform: 'rotate(90deg)',
    },
    [theme.breakpoints.down('md')]: {
      width: '25px',
      height: '25px',
    },
  },

  opIcon: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      width: '25px',
      height: '25px',
    },
  },

  soccerMenu: {
    '&&': {
      marginTop: '20px',
      backgroundColor: theme.colors.gray5,
      ul: {
        padding: '0',
      },
    },
  },
}));
