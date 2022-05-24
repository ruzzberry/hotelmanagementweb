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

export default function Index() {

    const router = useRouter();

    const gotoAbout = () => {
        router.push("/about");
      };
    
      const gotoService = () => {
        router.push("/services");
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

            <Head>
                <title>Hotel Omega</title>
            </Head>
            {/*FOR THE NAVIGATION BAR*/}
            <AppBar sx={{background:"#2B2B2B"}}>
                <Toolbar>
                    <IconButton>
                    <Image src="/assets/svg/omegaicon.ico" alt="Hotel Icon" 
                        width={45} 
                        height={45}/>
                    </IconButton>

                    <Typography 
                    sx={{fontStyle:"normal", 
                    fontWeight:"normal",
                    fontSize:"24px",
                    lineHeight:"24px",
                    marginLeft:"10px"}}>Hotel Omega</Typography>

                    
                    <Typography onClick={gotoAbout}
                        sx={{
                        cursor:"pointer",
                        fontStyle:"normal", 
                        fontWeight:"normal",
                        fontSize:"18px",
                        lineHeight:"24px",
                        marginLeft:"420px"}}>ABOUT US
                    </Typography>

                    <Typography onClick={gotoService}
                        sx={{
                        cursor:"pointer",
                        fontStyle:"normal", 
                        fontWeight:"normal",
                        fontSize:"18px",
                        lineHeight:"24px",
                        marginLeft:"50px"}}>SERVICES
                    </Typography>

                    <IconButton onClick={setDrawerOpen} sx={{marginLeft:"500px"}}>
                    <Image src="/assets/svg/menu.svg" alt="Burger Icon" 
                        width={25} 
                        height={25}/>
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/*FOR THE CAROUSEL*/}
            <Visitcarousel/>

            {/*FOR THE DRAWER*/}
            <Drawer anchor="right" open={open} onClose={HandleClose}>
                <Box minWidth={"200px"} sx={{display:"flex", flexDirection:"column"}}>
                    
                    <List sx={{marginTop:"55px"}}>
                        <Divider/>

                        <ListItem button onClick={() => CloseHandleClick("/sidesignin")} 
                        selected={router.pathname.includes("sidesignin")}>
                            <ListItemIcon>
                                <Image src="/assets/svg/signin.svg" 
                                alt="Sign in" 
                                width={25} 
                                height={25}/>
                            </ListItemIcon>
                            <ListItemText primary="SIGN IN"/>
                        </ListItem>
                        <Divider/>
                        
                        <ListItem button onClick={() => CloseHandleClick("/about")}
                        selected={router.pathname.includes("about")}>
                            <ListItemIcon>
                                <Image src="/assets/svg/about.svg" 
                                alt="About" 
                                width={25} 
                                height={25}/>
                            </ListItemIcon>
                            <ListItemText primary="ABOUT US"/>
                        </ListItem>

                        <ListItem 
                        button 
                        onClick={() => CloseHandleClick("/services")}
                        selected={router.pathname.includes("services")}>
                            <ListItemIcon>
                                <Image src="/assets/svg/service.svg" 
                                alt="Service" 
                                width={25} 
                                height={25}/>
                            </ListItemIcon>
                            <ListItemText primary="SERVICES"/>
                        </ListItem>

                    </List>
                </Box>
            </Drawer>

            <Box sx={{
                marginTop:"5px",
                backgroundImage: "url(https://wallpaperaccess.com/full/1687758.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height:"40vh",
                }}> 
                    
                <Divider align="center">
                    <Getstarted/>
                </Divider>
            </Box>

        </Box>
    );
};
