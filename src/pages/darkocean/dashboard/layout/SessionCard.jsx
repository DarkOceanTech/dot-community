import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SessionCard = ({name, body, action1, action2, button1Title1, button1Title2}) => {

  return (
    <Card className='media-card'>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={action1}>{button1Title1}</Button>
        <Button size="small" onClick={action2}>{button1Title2}</Button>
      </CardActions>
    </Card>
  );
}

export default SessionCard;