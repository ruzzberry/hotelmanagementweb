import { AddBox } from '@mui/icons-material';
import { Divider, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Listcarousel2 from '../../roomlistsliders/listcarousel2';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Form1slider() {
  return (
    <Box sx={{height: "400px", width:"1080px",borderRadius:"20px", backgroundColor:"#FFFFFF"}}>
        <Listcarousel2/>
        
        <Box sx={{ height: "400px", maxWidth:"540px", borderTopLeftRadius:"20px", backgroundColor:"#FFFFFF"}}>
          <Typography variant="h4" sx={{marginLeft:"10px",color:"#000000"}}>
            Suite 2 - Prince Patrick Suite
          </Typography>

          <Typography variant="h5" sx={{marginLeft:"10px",color:"#000000"}}>
            PHP.9000
          </Typography>

          <Divider sx={{backgroundColor:"#000000"}}/>

          <Typography variant="h6" sx={{marginLeft:"10px",color:"#000000"}}>
            This suite has the following service:
          </Typography>

          <Typography variant="subtitle1" sx={{marginLeft:"10px",color:"#000000"}}>
            ● Offers 2 queen size bed.
          </Typography>

          <Typography variant="subtitle1" sx={{marginLeft:"10px",color:"#000000"}}>
            ● Breakfast, and dinner.
          </Typography>

          <Typography variant="subtitle1" sx={{marginLeft:"10px",color:"#000000"}}>
            ● Has a nice view of the town from the window.
          </Typography>          
        </Box>

        <Divider sx={{backgroundColor:"#000000"}}/>

        <Box sx={{ marginTop: "0px", height: "400px", maxWidth:"1080px", backgroundColor:"#FFFFFF", borderBottomLeftRadius:"20px", borderBottomRightRadius:"20px"}}>
        
          <Typography variant="h5" sx={{color:"#000000", textAlign:"center"}}>
            Book form
          </Typography> 

          <Typography variant="h6" sx={{marginLeft:"10px",color:"#000000"}}>
            First Name:
          </Typography>

          <TextField sx={{marginLeft:"10px"}}
          margin="normal"
          label="First Name"
          required
          name="firstname"
          id="firstname"
          >
          </TextField>

          <Typography variant="h6" sx={{marginLeft:"10px",color:"#000000"}}>
            Last Name:
          </Typography>

          <TextField sx={{marginLeft:"10px"}}
          margin="normal"
          label="Last Name"
          required
          name="lastname"
          id="lastname"
          >
          </TextField>

          <Typography variant="h6" sx={{marginLeft:"10px",color:"#000000"}}>
            Check-in
          </Typography>
          
          <Typography variant="h6" sx={{marginLeft:"10px",color:"#000000"}}>
            Check-out
          </Typography>

          <Typography variant="h6" sx={{marginLeft:"10px",color:"#000000"}}>
            Payment
          </Typography>
          
          <Button
                fullWidth
                variant="dark"
                style={{marginLeft:"10px", width:"20vh",color:"#FFFFFF", }}
              >
                Rent now
          </Button>
        </Box>
    </Box>

    
  )
}

export default Form1slider;