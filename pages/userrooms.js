import { Title } from '@mui/icons-material';
import React from 'react';
import Userlayout from './userlayout';
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Divider, Paper } from '@mui/material';
import Suiteone from './suiteOne';

function Userrooms() {

  return (
    <Box 
    sx={{
    backgroundImage: "url(https://wallpaperaccess.com/full/1687758.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height:"100vh"}}>
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
        <Suiteone/>
      </Divider>
      
    </Box>
  )
}

export default Userrooms;