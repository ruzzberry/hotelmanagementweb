import React from 'react'
import AdminLayout from './AdminLayout';
import Head from "next/head";

export default function Dashboard() {
  return (
  <div>
    <Head>
      <title>Dashboard</title>
    </Head>
    
    dashboard
  </div>
  );
}

Dashboard.getLayout = function getLayout(page){

  return<AdminLayout>{page}</AdminLayout>;
}