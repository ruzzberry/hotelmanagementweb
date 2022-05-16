import { Typography, AppBar } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./navbar";
import AdminLayout from './AdminLayout';
import Head1 from "next/head";

export default function About() {
  return (
    <div>

      <Head1>
        <title>About us</title>
      </Head1>

      About
    </div>
  );
}

About.getLayout = function getLayout(page){

  return<AdminLayout>{page}</AdminLayout>;
}