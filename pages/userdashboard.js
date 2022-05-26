import { Title } from '@mui/icons-material';
import React from 'react';
import Userlayout from './userlayout';
import Head from "next/head";
import { Box, Divider, Paper } from '@mui/material';
import Userhome from './userhome';
import { useRouter } from "next/router";

function userdashboard() {

  const router = useRouter();

      const gotoRooms = () => {
        router.push("/userrooms");
      };

      const gotoReservations = () => {
        router.push("/userreservations");
      };

  return (
    <Box 
    sx={{
    backgroundImage: "url(https://wallpaperaccess.com/full/1687758.jpg)",
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
    backgroundSize: "200vh",
    height:"100vh",
    overflow: 'hidden',
    }}>
      <Head>
        <title>Dashboard</title>
      </Head>
      
      <Userlayout/>
      
      <Divider>
        <Paper sx={{backgroundColor: "white", marginTop:"12vh", width:"100vh"}}>WELCOME TO HOTEL OMEGA!</Paper>
      </Divider>

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