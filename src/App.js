import * as React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './App.css';
import './style/community.css';

import Home from './pages/home';
import DarkOcean from './pages/darkocean';
import Dashboard from './pages/darkocean/dashboard';
import BlogBus from './pages/darkocean/blogbus';
import BlogPost1 from './pages/darkocean/BlogPost1';
import Ecommerce from './pages/darkocean/ecommerce';
import DarkWave from './pages/darkwave';
import Bermudez from './pages/bermudez';

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
import NavigationDropdown from './components/mui-utilities/mui-select';



const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      
      <Route path='/darkocean' element={<DarkOcean />} >
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='blogbus' element={<BlogBus />} />
        <Route path='08-13-2023-best-ecommerce-platform-for-artists-in-2023' element={<BlogPost1 />} />
        <Route path='ecommerce' element={<Ecommerce />} />
      </Route>

      <Route path='/darkwave' element={<DarkWave />} />
      <Route path='/bermudez' element={<Bermudez />} />
    </Routes>
  );
};

const App = () => {
  const [library, setLibrary] = React.useState('');

  let location = useLocation();

  React.useEffect(() => {
    switch (location.pathname) {
      case '/':
        setLibrary(0);
        break;
      case '/darkocean':
        setLibrary(1);
        break;
      case '/darkwave':
        setLibrary(2);
        break;
      case '/bermudez':
        setLibrary(3);
        break;
      default:
        break;
    }
  }, [location]);

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: '#1A2027',
        }}
      >
        <Toolbar>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ marginRight: '1rem' }}
          >
            Dark Ocean Community
          </Typography>
          <NavigationDropdown library={library} setLibrary={setLibrary} />
        </Toolbar>
      </AppBar>
      <Pages />
    </Box>
  );
};

export default App;
