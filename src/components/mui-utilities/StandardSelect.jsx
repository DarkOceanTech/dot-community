import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const StandardSelect = (p) => {
  const [variable, setVariable] = React.useState('');

  const handleChange = (event) => {
    setVariable(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label" sx={{color: 'white'}}>{p.inputLabel}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={variable}
          label={p.inputLabel}
          onChange={handleChange}
          sx={{color: 'white'}}
        >
          <MenuItem value={0}>{p.navItems.item0}</MenuItem>
          <MenuItem value={1}>{p.navItems.item1}</MenuItem>
          <MenuItem value={2}>{p.navItems.item2}</MenuItem>
          <MenuItem value={3}>{p.navItems.item3}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default StandardSelect;