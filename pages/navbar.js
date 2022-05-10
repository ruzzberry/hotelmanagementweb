import { 
  Typography, 
  AppBar, 
  Toolbar, 
  Tabs, 
  Tab, 
  Button, 
  useMediaQuery, 
  useTheme } from '@mui/material';
  import { useRouter } from "next/router";

import React,{useState} from 'react';
import Link from "next/link";
import HotelIcon from '@mui/icons-material/Hotel';
import DrawerComp1 from './DrawerComp1';

const Pages = ["ABOUT US","CONTACTS","SERVICES"]

export default function Navbar() {

  const router = useRouter();

  const gotoSideSignIn = () => {
    router.push("/sidesignin");
  };

  const gotoAbout = () => {
    router.push("/about");
  };

  const gotoContacts = () => {
    router.push("/contacts");
  };

  const gotoComments = () => {
    router.push("/about");
  };

  const gotoServices = () => {
    router.push("/services");
  };

  const theme= useTheme();  
  const [value, setValue]= useState()
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{background:"#2B2B2B"}}>
        <Toolbar>
            <HotelIcon/>
            {
              isMatch ? 
              (
                <>
                  <Typography sx={{fontSize:"1.5 rem", paddingLeft:"10%"}}>
                    HOTEL
                  </Typography>
                  <DrawerComp1/>
                </>
              ) : 
              
              (
                <>
                  <Tabs textColor="#FFFFFF" 
                  value = {value} 
                  onChange={(e,value)=> setValue(value) } 
                  indicatorColor="secondary" 
                  sx={{marginLeft:"auto"}}>

                    <Tab label="ABOUT US" onClick={gotoAbout}/>
                    <Tab label="CONTACTS" onClick={gotoContacts}/>
                    <Tab label="REVIEWS" disabled onClick={gotoComments}/>
                    <Tab label="SERVICES" onClick={gotoServices}/>
                  </Tabs>

                  <Link href="/sidesignin">
                    <Button variant="outlined" 
                      sx={{marginLeft:"auto", 
                      marginRight:"12px",
                      background:"#FFFFFF",
                      color:"#000000"}} 
                      onClick={gotoSideSignIn}>SIGN IN
                    </Button>
                  </Link>
                </>
              )
            }
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}