import { AddBox } from '@mui/icons-material'
import { Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SwipeableTextMobileStepper from './listcarousel1'

function room1test() {
  return (
    <Box sx={{ height: "400px", width:"1080px", borderRadius:"20px", backgroundColor:"#2B2B2B"}}>
        <SwipeableTextMobileStepper/>
        
        <Box sx={{ height: "400px", maxWidth:"540px", borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px", backgroundColor:"#2B2B2B"}}>
          <Typography variant="h4" sx={{marginLeft:"10px",color:"#FFFFFF"}}>
            Suite 1 - Queen Elizabeth
          </Typography>

          <Typography variant="h5" sx={{marginLeft:"10px",color:"#FFFFFF"}}>
            PHP.9000
          </Typography>

          <Divider/>

          <Typography variant="h6" sx={{marginLeft:"10px",color:"#FFFFFF"}}>
            This suite has the following service:
          </Typography>

          <Typography variant="subtitle1" sx={{marginLeft:"10px",color:"#FFFFFF"}}>
            ● Offers 2 queen size bed.
          </Typography>

          <Typography variant="subtitle1" sx={{marginLeft:"10px",color:"#FFFFFF"}}>
            ● Breakfast, and dinner.
          </Typography>

          <Typography variant="subtitle1" sx={{marginLeft:"10px",color:"#FFFFFF"}}>
            ● Has a nice view of the town from the window.
          </Typography>
        </Box>
    </Box>
  )
}

export default room1test