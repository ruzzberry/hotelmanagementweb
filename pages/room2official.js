import { AddBox } from '@mui/icons-material';
import { Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Listcarousel2 from './roomlistsliders/listcarousel2';
import { useRouter } from "next/router";

function Room2official() {

  const router = useRouter();

      const gotoRentform2 = () => {
        router.push("/roomrentforms/rentform2");
      };

  return (
    <Box sx={{ marginTop:"15px",height: "400px", width:"1080px",borderRadius:"20px", backgroundColor:"#FFFFFF"}}>
        <Listcarousel2/>
        
        <Box sx={{ height: "400px", maxWidth:"540px", borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px", backgroundColor:"#FFFFFF"}}>
          <Typography variant="h4" sx={{marginLeft:"10px",color:"#000000"}}>
            Suite 2 - Prince Patrick Suite
          </Typography>

          <Typography variant="h5" sx={{marginLeft:"10px",color:"#000000"}}>
            PHP.9000
          </Typography>

          <Divider/>

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

          <Button onClick={gotoRentform2}
                fullWidth
                variant="dark"
                style={{ width:"20vh",marginLeft:"20px", marginTop:"150px",color:"#FFFFFF", }}
              >
                Rent now
          </Button>
          
        </Box>
    </Box>
  )
}

export default Room2official;