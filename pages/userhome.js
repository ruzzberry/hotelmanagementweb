import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import BasicTabs from './userhometabs';

function Userhome() {
  return (
    <Box>
        <Paper elevation={3}
        sx={{
            width:"100vh",
            height:"80vh",
            marginTop:"15vh"
        }}>
            <BasicTabs/>
        </Paper>
    </Box>
  )
}

export default Userhome;