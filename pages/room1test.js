import { AddBox } from '@mui/icons-material'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SwipeableTextMobileStepper from './listcarousel1'

function room1test() {
  return (
    <Box sx={{ height: "400px", width:"1080px", borderRadius:"20px", backgroundColor:"#2B2B2B"}}>
        <SwipeableTextMobileStepper/>
        <Box sx={{ height: "400px", width:"540px", borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px", backgroundColor:"#2B2B2B"}}>
            
        </Box>
    </Box>
  )
}

export default room1test