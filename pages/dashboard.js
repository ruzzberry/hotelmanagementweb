import React from 'react'
import AdminLayout from './AdminLayout';
import Head from "next/head";
import { Box, Paper, Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function Dashboard() {
  return (
  <Box>
    <Head>
      <title>Dashboard</title>
    </Head>
    
    <Box>
      <Paper>
        <Typography variant="h2"></Typography>
      </Paper>
    </Box>
  </Box>
  );
}

Dashboard.getLayout = function getLayout(page){

  return<AdminLayout>{page}</AdminLayout>;
}