import {Paper, AppBar, Box, Drawer, Toolbar, Typography, IconButton, Divider, ButtonBase, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import Image from "next/image";
import global from "../styles/global";
import { useRouter } from "next/router";
import Button from '@mui/material/Button';
import {useState} from "react";
import Link from '@mui/material/Link';
import Visitcarousel from "./visitcarousel";
import Getstarted from "./getStarted";
import { Title } from "@mui/icons-material";
import Head from "next/head";

export default function Userlayout() {

    const router = useRouter();

    const gotoHome = () => {
        router.push("/userdashboard");
      };

    const gotoRooms = () => {
        router.push("/userrooms");
      };
    
      const gotoReservations = () => {
        router.push("/userreservations");
      };

    const[open, setOpen] = useState(false);

    const setDrawerOpen = () => {
        setOpen(true)
    };

    const HandleClose = () => {
        setOpen(false)
    };

    const CloseHandleClick = (url) => {
        setOpen(false);
        router.push(url);
    }

    return(
        <Box sx={{backgroundColor:"#2B2B2B"}}>
            {/*FOR THE NAVIGATION BAR*/}
            <AppBar sx={{background:"#2B2B2B"}}>
                <Toolbar disableGutters
          sx={{
            display: { xs: "flex" },
            flexDirection: "row",
            justifyContent: "space-between"
          }}>
                    <Typography 
                    sx={{fontStyle:"normal", 
                    fontWeight:"normal",
                    fontSize:"24px"}}><IconButton sx={{marginRight:"15px"}}>
                    <Image src="/assets/svg/omegaicon.ico" alt="Hotel Icon" 
                        width={45} 
                        height={45}/>
                    </IconButton>Hotel Omega</Typography>

                    <Toolbar>
                    <Typography onClick={gotoHome}
                        sx={{
                        cursor:"pointer",
                        fontStyle:"normal", 
                        fontWeight:"normal",
                        fontSize:"18px",
                        lineHeight:"24px",
                        marginLeft:"18px"}}>HOME
                    </Typography>

                    <Typography onClick={gotoRooms}
                        sx={{
                        cursor:"pointer",
                        fontStyle:"normal", 
                        fontWeight:"normal",
                        fontSize:"18px",
                        lineHeight:"24px",
                        marginLeft:"18px"}}>ROOMS
                    </Typography>
                    
                    <Typography onClick={gotoReservations}
                        sx={{
                        cursor:"pointer",
                        fontStyle:"normal", 
                        fontWeight:"normal",
                        fontSize:"18px",
                        lineHeight:"24px",
                        marginLeft:"18px"}}>RESERVATIONS
                    </Typography>

                    <IconButton onClick={setDrawerOpen} sx={{marginLeft:"50px"}}>
                    <Image src="/assets/svg/menu.svg" alt="Burger Icon" 
                        width={25} 
                        height={25}/>
                    </IconButton>
                    </Toolbar>
                </Toolbar>
            </AppBar>

            {/*FOR THE DRAWER*/}
            <Drawer anchor="right" open={open} onClose={HandleClose}>
                <Box minWidth={"200px"} sx={{display:"flex", flexDirection:"column"}}>
                    
                    <List sx={{marginTop:"55px"}}>

                    <ListItem button onClick={() => CloseHandleClick("/userdashboard")}
                        selected={router.pathname.includes("userdashboard")}>
                            <ListItemIcon>
                                <Image src="/assets/svg/service.svg" 
                                alt="Rooms" 
                                width={25} 
                                height={25}/>
                            </ListItemIcon>
                            <ListItemText primary="HOME"/>
                        </ListItem>

                        <ListItem button onClick={() => CloseHandleClick("/userrooms")}
                        selected={router.pathname.includes("userrooms")}>
                            <ListItemIcon>
                                <Image src="/assets/svg/service.svg" 
                                alt="Suites" 
                                width={25} 
                                height={25}/>
                            </ListItemIcon>
                            <ListItemText primary="SUITES"/>
                        </ListItem>

                        <ListItem 
                        button 
                        onClick={() => CloseHandleClick("/userreservations")}
                        selected={router.pathname.includes("userreservations")}>
                            <ListItemIcon>
                                <Image src="/assets/svg/service.svg" 
                                alt="Reservations" 
                                width={25} 
                                height={25}/>
                            </ListItemIcon>
                            <ListItemText primary="RESERVATIONS"/>
                        </ListItem>

                        <Divider/>
                        <ListItem button onClick={() => CloseHandleClick("/sidesignin")} 
                        selected={router.pathname.includes("sidesignin")}>
                            <ListItemIcon>
                                <Image src="/assets/svg/signin.svg" 
                                alt="Sign in" 
                                width={25} 
                                height={25}/>
                            </ListItemIcon>
                            <ListItemText primary="SIGN OUT"/>
                        </ListItem>
                        <Divider/>

                    </List>
                </Box>
            </Drawer>
        </Box>
    );
};
