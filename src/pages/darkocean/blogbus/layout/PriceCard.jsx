import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const PriceCard = (props) => {
  return (
    <Card
      variant='outlined'
      sx={{
        minWidth: 275,
        background: '#161e26',
        color: 'white',
        padding: '2rem',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2.0,
        }}
      >
        <Typography variant='h5' component='div'>
          {props.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {props.pricing}
        </Typography>
        {/* <Typography color='text.secondary'>
          adjective
        </Typography> */}
        <Typography variant='body2'>Studio usage: Unlimited</Typography>
        <Typography variant='body2'>Session Length: 30 mins</Typography>
        <Typography variant='body2'>Max. musicians: 5</Typography>
        <Typography variant='body2'>Recordings: Public/Private</Typography>
        <Typography variant='body2'>Video quality: SD</Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>{props.cta}</Button>
      </CardActions>
    </Card>
  );
};

export default PriceCard;
