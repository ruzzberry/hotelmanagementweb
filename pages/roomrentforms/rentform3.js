import { Title } from '@mui/icons-material';
import React from 'react';
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Divider, Pagination, Paper } from '@mui/material';
import Userlayout from '../userlayout';
import Form3slider from './sliders/form3slider';
import {Button} from 'react-bootstrap';

function Rentform3() {

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
        <title>Suite 3</title>
      </Head>
      
      <Userlayout/>

      <Divider>
        <Paper sx={{backgroundColor: "white", marginTop:"15vh", width:"100vh"}}>SUITE 3 RENT FORM</Paper>
      </Divider>
      
      <Divider
      sx={{
        backgroundColor: "",
        textAlign:"left",
        justifyContent:"left",
        marginTop:"5vh"
      }}>
      
      <Form3slider/>
      </Divider>
      
    </Box>
  )
}

export default Rentform3;