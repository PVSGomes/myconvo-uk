import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
  TfiPackage,
  TfiViewGrid,
  TfiNotepad,
  TfiAlignJustify,
} from 'react-icons/tfi';
import { SlLogout, SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import DashboardView from './views/DashboardView';
import EventView from './views/EventView';
import PackagesView from './views/PackagesView';
import { Colors } from '../../values/colors';
import * as AppActions from '../../store/actions/AppActions';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    backgroundColor: Colors.white,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const PersistentDrawer = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedView, setSelectedView] = useState('Event');
  const [hoverText, setHoverText] = useState('Dashboard');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (text) => {
    setSelectedView(text);
    if (text === 'Logout') {
      dispatch(AppActions.clearUserInfo());
      localStorage.removeItem('token');
      localStorage.removeItem('userInfo');
      navigate('/');
      window.location.reload();
    }
  };

  const renderView = () => {
    switch (selectedView) {
      case 'Dashboard':
        return <DashboardView />;
      case 'Package':
        return <PackagesView />;
      case 'Event':
        return <EventView />;
      default:
        return null;
    }
  };

  const handleListItemHover = (text) => {
    setHoverText(text);
  };

  const renderIcons = (text) => {
    switch (text) {
      case 'Dashboard':
        return (
          <TfiViewGrid
            color={
              (selectedView === text || hoverText === text) &&
              Colors.lightPurple
            }
          />
        );
      case 'Package':
        return (
          <TfiPackage
            color={
              (selectedView === text || hoverText === text) &&
              Colors.lightPurple
            }
          />
        );
      case 'Event':
        return (
          <TfiNotepad
            color={
              (selectedView === text || hoverText === text) &&
              Colors.lightPurple
            }
          />
        );
      case 'Logout':
        return <SlLogout color={hoverText === text && Colors.lightPurple} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ backgroundColor: Colors.white }}
      >
        <Toolbar>
          <IconButton
            color={Colors.black}
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mr: 2,
              ...(open && { display: 'none' }),
              color: Colors.secondary,
              fontSize: 18,
            }}
          >
            <TfiAlignJustify />
          </IconButton>
          <Typography
            variant="h3"
            noWrap
            component="div"
            color={Colors.secondary}
            fontWeight="400"
          >
            {selectedView}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton
            onClick={handleDrawerClose}
            sx={{
              color: Colors.lightPurple,
              fontSize: 14,
            }}
          >
            {theme.direction === 'ltr' ? <SlArrowLeft /> : <SlArrowRight />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Dashboard', 'Package', 'Event', 'Logout'].map((text) => (
            <ListItem
              key={text}
              disablePadding
              button
              selected={selectedView === text}
              onClick={() => handleListItemClick(text)}
              onMouseEnter={() => handleListItemHover(text)}
              onMouseLeave={() => handleListItemHover('')}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: Colors.silverBlue,
                  color: Colors.lightPurple,
                  '&:hover': {
                    backgroundColor: Colors.lightPurpleLight,
                  },
                },
                '&:hover': {
                  color: Colors.lightPurple,
                  backgroundColor: Colors.silverBlue,
                },
              }}
            >
              <ListItemButton>
                <ListItemIcon>{renderIcons(text)}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {renderView()}
      </Main>
    </Box>
  );
};

export default PersistentDrawer;
