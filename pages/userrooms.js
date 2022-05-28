import { Title } from '@mui/icons-material';
import React from 'react';
import Userlayout from './userlayout';
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Divider, Pagination, Paper } from '@mui/material';
import Room1official from './room1official';
import Room2official from './room2official';
import Room3official from './room3official';

function Userrooms() {

  return (
    <Box 
    sx={{
    backgroundImage: "url(https://wallpaperaccess.com/full/1687758.jpg)",
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
    backgroundSize: "200vh",
    height:"195vh",
    overflow: 'hidden',
    }}>
      <Head>
        <title>Dashboard</title>
      </Head>
      
      <Userlayout/>

      <Divider>
        <Paper sx={{backgroundColor: "white", marginTop:"15vh", width:"100vh"}}>HOTEL ROOMS</Paper>
      </Divider>
      
      <Divider
      sx={{
        textAlign:"left",
        justifyContent:"left",
        
      }}>
        
        <Room1official/>
        <Room2official/>
        <Room3official/>
      </Divider>
      
    </Box>
  )
}

export default Userrooms;