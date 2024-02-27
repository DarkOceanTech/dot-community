import * as React from 'react';
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
import {
  yourJamSessions,
  yourSessionInvites,
  activeJamSessions,
} from '../../../tests/mockData';
// import { Link, withRouter, useNavigate} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const BlogBus = () => {
  return (
    <div className='community-container'>
      <div className='section-discussion'>
        <DiscussionPosts />
      </div>
    </div>
  );
};

export default BlogBus;
