import { Typography, AppBar } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./navbar";
import AdminLayout from './AdminLayout';
import Head2 from "next/head";

export default function Contacts() {
  return (
    <div>

      <Head2>
        <title>Contacts</title>
      </Head2>

      Contacts
    </div>
  );
}

Contacts.getLayout = function getLayout(page){

  return<AdminLayout>{page}</AdminLayout>;
}