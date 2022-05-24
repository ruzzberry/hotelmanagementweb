import { Title } from '@mui/icons-material';
import React from 'react';
import Userlayout from './userlayout';
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Divider } from '@mui/material';
import Userhome from './userhome';

function userdashboard() {

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

      <Divider
      sx={{
        textAlign:"left",
      }}>
        <Userhome/>
      </Divider>
    </Box>
  )
}

export default userdashboard;