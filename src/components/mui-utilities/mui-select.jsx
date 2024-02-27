import * as React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const NavigationDropdown = (props) => {
  // const [library, setLibrary] = React.useState('');

  const handleChange = (event) => {
    props.setLibrary(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 220}}>
      <FormControl fullWidth>
        {/* <InputLabel id='demo-simple-select-label'>Library</InputLabel> */}
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={props.library}
          // label='Library'
          onChange={handleChange}
        >
          {/* TODO: add a line on handleChange to navigate to the proper page. Remove the Link. It is fucking things up. */}
          <MenuItem value={0}>
            <Link to='/'>Home Base</Link>
          </MenuItem>
          <MenuItem value={1}>
            <Link to='darkocean'>Dark Ocean Engineering</Link>
          </MenuItem>
          <MenuItem value={2}>
            <Link to='darkwave'>Dark Wave Analytics</Link>
          </MenuItem>
          <MenuItem value={3}>
            <Link to='bermudez'>Bermudez Associates</Link>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default NavigationDropdown;
