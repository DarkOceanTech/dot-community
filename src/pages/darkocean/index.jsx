import * as React from 'react';

import { Routes, Route, Link, useLocation, useNavigate, Outlet } from 'react-router-dom';


import Dashboard from './dashboard/index.jsx';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import {
  // SettingsOutlined,
  // ChevronLeft,
  ChevronRightOutlined,
  // HomeOutlined,
  // ShoppingCartOutlined,
  // Groups2Outlined,
  // ReceiptLongOutlined,
  // PublicOutlined,
  // PointOfSaleOutlined,
  // TodayOutlined,
  // CalendarMonthOutlined,
  // AdminPanelSettingsOutlined,
  // TrendingUpOutlined,
  // PieChartOutlined,
  LanOutlined,
} from '@mui/icons-material';

import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

import StorageIcon from '@mui/icons-material/Storage';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ComputerIcon from '@mui/icons-material/Computer';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import EngineeringIcon from '@mui/icons-material/Engineering';
// import TableChartIcon from '@mui/icons-material/TableChart';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDatabase,
  faTachographDigital,
} from '@fortawesome/free-solid-svg-icons';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'


const drawerWidth = 240;

//'Website Builders', 'Web Development', 'Cloud Software', 'ARMSS Program'

const softwareNavItems = [
  {
    text: 'Dashboard',
    icon: <FontAwesomeIcon icon={faTachographDigital} size='xl' />,
  },
  {
    text: 'BlogBus',
    icon: <DirectionsBusIcon />,
  },
  // {
  //   text: 'Web Development',
  //   icon: null,
  // },
  // {
  //   text: 'Ecommerce',
  //   icon: <EngineeringIcon />,
  // },
  // {
  //   text: 'Cloud Software',
  //   icon: null,
  // },
  // {
  //   text: 'Network',
  //   icon: <LanOutlined />,
  // },
  // {
  //   text: 'Monitoring',
  //   icon: <MonitorHeartIcon />,
  // },
  // {
  //   text: 'Server',
  //   icon: <StorageIcon />,
  // },
  // {
  //   text: 'Databases',
  //   icon: <FontAwesomeIcon icon={faDatabase} size='xl' />,
  // },
  // {
  //   text: 'Current Projects',
  //   icon: null,
  // },
  // {
  //   text: 'ARMSS',
  //   icon: <WebAssetIcon />,
  // },
  // {
  //   text: 'MARS',
  //   icon: <ComputerIcon />,
  // },
  // {
  //   text: 'Mobile',
  //   icon: <PhoneAndroidIcon />,
  // },
];

// const softwareNavItems = [
//   {
//     text: 'Dashboard',
//     icon: <FontAwesomeIcon icon={faTachographDigital} size='xl' />,
//   },
//   {
//     text: 'DevOps',
//     icon: null,
//   },
//   {
//     text: 'Projects',
//     icon: <EngineeringIcon />,
//   },
//   {
//     text: 'Management',
//     icon: null,
//   },
//   {
//     text: 'Network',
//     icon: <LanOutlined />,
//   },
//   {
//     text: 'Monitoring',
//     icon: <MonitorHeartIcon />,
//   },
//   {
//     text: 'Applications',
//     icon: null,
//   },
//   {
//     text: 'Web',
//     icon: <WebAssetIcon />,
//   },
//   {
//     text: 'Desktop',
//     icon: <ComputerIcon />,
//   },
//   {
//     text: 'Mobile',
//     icon: <PhoneAndroidIcon />,
//   },
//   {
//     text: 'Server',
//     icon: <StorageIcon />,
//   },
//   {
//     text: 'Databases',
//     icon: <FontAwesomeIcon icon={faDatabase} size='xl' />,
//     // icon: <FontAwesomeIcon icon={regular("database")} />,
//   },
// ];

const DarkOcean = () => {
  const { pathname } = useLocation();
  // TODO: set to app state??
  const [active, setActive] = React.useState('');
  const navigate = useNavigate();
  // const theme = useTheme();

  React.useEffect(() => {
    setActive(pathname.substring(1));
    console.log(pathname.substring(1))
  }, [pathname]);

  return (
    <>
      <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: '#1A2027'
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto'}}>
          <List>
            {softwareNavItems.map(({ text, icon }) => {
              if (!icon) {
                return (
                  <Typography
                    key={text}
                    sx={{
                      m: '1.25rem 0 1rem 3rem',
                      color: 'black'//theme.palette.neutral.main,
                    }}
                  >
                    {text}
                  </Typography>
                );
              }

              const lcText = text.toLowerCase();

              return (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate(`/darkocean/${lcText}`);
                      setActive(lcText);
                    }}
                    sx={{
                      backgroundColor:
                        active === lcText
                          ? 'grey'//theme.palette.background.alt //[300]
                          : 'transparent',
                      color:
                        active === lcText
                          ? 'pink'//theme.palette.primary.main //[600]
                          : 'red' //theme.palette.secondary.main, //[200],
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        ml: '1rem',
                        color:
                          active === lcText
                            ? 'pink'//theme.palette.primary.main //[600]
                            : 'red'//theme.palette.secondary.main, //[100],
                      }}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    {active === lcText && (
                      <ChevronRightOutlined sx={{ ml: 'auto' }} />
                    )}
                  </ListItemButton>
                  {/* <Collapse in={active === lcText ? true : false} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText primary="Starred" />
                        </ListItemButton>
                      </List>
                    </Collapse> */}
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
          {active === 'darkocean' ? <Dashboard/> : <Outlet />}
      </Box>
    </>
  );
};

export default DarkOcean;
