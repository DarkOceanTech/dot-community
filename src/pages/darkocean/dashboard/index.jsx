import * as React from 'react';
import { useNavigate } from "react-router-dom";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import SessionCard from './layout/SessionCard';
import DiscussionPosts from './layout/DiscussionPosts';
import JoinMySesh from './layout/JoinMySesh';
import ProductUpdates from './layout/ProductUpdates';
import { yourJamSessions, yourSessionInvites, activeJamSessions } from '../../../tests/mockData';


const members = 'Members';
const join = 'Join Sesh';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const CustomTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: 'red',
  },
});

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(() => ({
  textTransform: 'none',
  minWidth: 0,
  color: 'rgba(0, 0, 0, 0.85)',
  '&:hover': {
    color: 'red',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: 'red',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'red',
  },
}));

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const Dashboard = () => {
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const action1 = () => {

    console.log('action1');
  };

  const action2 = () => {
    console.log('action2');
  };

  const joinSesh = () => {
    // User clicks on "JOIN SESH"
    // Fetch ACS GroupId
    /// Redirect to Mixer
      navigate("/mixer");
    /// SignalR Method from App.js - joinRoom
    // Create a new Channel to display video
    // console.log(join);
  };

  return (
    <div className='community-container'>
      <div className='section-discussion'>
        <Box sx={{ width: '100%' }}>
            <CustomTabs
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
            >
              <CustomTab
                label='Find a Group for a Creative Discussion'
                {...a11yProps(0)}
                sx={{ color: 'white' }}
              />
              <CustomTab
                label='Join my Session & lets start making Music'
                {...a11yProps(1)}
                sx={{ color: 'white' }}
              />
              <CustomTab
                label='Product & Service Updates'
                {...a11yProps(2)}
                sx={{ color: 'white' }}
              />
            </CustomTabs>
          <TabPanel value={value} index={0}>
              <DiscussionPosts />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <JoinMySesh />
          </TabPanel>
          <TabPanel value={value} index={2}>
           <ProductUpdates/>
          </TabPanel>
        </Box>
      </div>

      <div className='section-summary'>
        <h3 className='text-center'>My Active Session</h3>
        {yourJamSessions.map((post) => (
          <SessionCard
            key={post.id}
            name={post.name}
            body={post.body}
            action1={joinSesh}
            action2={action2}
            button1Title1={join}
            button1Title2={members}
          />
        ))}
        <h3 className='text-center'>My Open Invitations</h3>
        {yourSessionInvites.map((post) => (
          <SessionCard
            key={post.id}
            name={post.name}
            body={post.body}
            action1={joinSesh}
            action2={action2}
            button1Title1={join}
            button1Title2={members}
          />
        ))}

        <h3 className='text-center'>Community Sessions</h3>
        {activeJamSessions.map((post) => (
          <SessionCard
            key={post.id}
            name={post.name}
            body={post.body}
            action1={action1}
            action2={action2}
            button1Title1={join}
            button1Title2={members}
          />
        ))}
      </div>
    </div>
  );
};


export default Dashboard;