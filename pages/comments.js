import { Typography, AppBar } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./navbar";
import AdminLayout from './AdminLayout';
import Head3 from "next/head";

export default function Comments() {
  return (
    <div>

      <Head3>
        <title>Reviews</title>
      </Head3>

      Comments 
    </div>
  );
}

Comments.getLayout = function getLayout(page){

  return<AdminLayout>{page}</AdminLayout>;
}