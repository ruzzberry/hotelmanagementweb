import { Typography, AppBar } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./navbar";
import AdminLayout from './AdminLayout';
import Head4 from "next/head";

export default function Services() {
  return (
    <div>
      <Head4>
        <title>Services</title>
      </Head4>
      Services
    </div>
  );
}

Services.getLayout = function getLayout(page){

  return<AdminLayout>{page}</AdminLayout>;
}