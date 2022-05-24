import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Divider, Paper } from '@mui/material';

export default function Suiteone() {
  return (
    <div>
    <Card sx={{width: "1000px", height:"350px", marginTop:"35px" }}>
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
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          RENT NOW
        </Button>
      </CardActions>
    </Card>

    <Card sx={{width: "1000px", height:"350px", marginTop:"35px" }}>
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
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          RENT NOW
        </Button>
      </CardActions>
    </Card><Card sx={{width: "1000px", height:"350px", marginTop:"35px" }}>
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
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          RENT NOW
        </Button>
      </CardActions>
    </Card>
        </div>

    
  );
}
