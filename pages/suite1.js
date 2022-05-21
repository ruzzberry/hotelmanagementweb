import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';

export default function Suite1() {
  return (
    <Card sx={{ maxWidth: 345, marginLeft:"12px", marginTop:"12px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="assets/img/carousel1.jpg"
          alt="Suite 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Suite 1 - Php.9000
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ● Offers 2 queen size bed.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ● Breakfast, and dinner.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ● Has a nice view of the town from the window.
          </Typography>
          <Button align="center">Rent now</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
