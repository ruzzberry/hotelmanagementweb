import {AppBar, Box, Drawer, Toolbar, Typography, IconButton, Divider, ButtonBase, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import global from "../styles/global";

import {useState} from "react";

export default function index() {

    const[open, setOpen] = useState(false);

    const setDrawerOpen = () => {
        setOpen(true)
    };

    const HandleClose = () => {
        setOpen(false)
    };

    return(
        <Box>
            <Head>
                <title>Hotel Omega</title>
            </Head>


            {/*FOR THE NAVIGATION BAR*/}
            <AppBar sx={{background:"#2B2B2B"}}>
                <Toolbar>
                    <IconButton onClick={setDrawerOpen}>
                    <Image src="/assets/svg/menu.svg" alt="Hotel Icon" 
                        width={25} 
                        height={25}/>
                    </IconButton>
                    
                    <Typography 
                    sx={{fontStyle:"normal", 
                    fontWeight:"normal",
                    fontSize:"24px",
                    lineHeight:"24px",
                    marginLeft:"12px"}}>Hotel Omega</Typography>
                </Toolbar>
            </AppBar>

            {/*FOR THE DRAWER*/}
            <Drawer anchor="left" open={open} onClose={HandleClose}>
                <Box minWidth={"200px"} sx={{display:"flex", flexDirection:"column"}}>
                    
                    <List sx={{marginTop:"55px"}}>
                        <Divider/>
                        <ListItem button>
                            <ListItemIcon>
                                <Image src="/assets/svg/about.svg" 
                                alt="About" 
                                width={25} 
                                height={25}/>
                            </ListItemIcon>
                            <ListItemText primary="ABOUT US"/>
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <Image src="/assets/svg/contact.svg" 
                                alt="Contact" 
                                width={25} 
                                height={25}/>
                            </ListItemIcon>
                            <ListItemText primary="CONTACTS"/>
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <Image src="/assets/svg/review.svg" 
                                alt="Review" 
                                width={25} 
                                height={25}/>
                            </ListItemIcon>
                            <ListItemText primary="REVIEWS"/>
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <Image src="/assets/svg/service.svg" 
                                alt="Service" 
                                width={25} 
                                height={25}/>
                            </ListItemIcon>
                            <ListItemText primary="SERVICES"/>
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <Image src="/assets/svg/signin.svg" 
                                alt="Sign in" 
                                width={25} 
                                height={25}/>
                            </ListItemIcon>
                            <ListItemText primary="SIGN IN"/>
                        </ListItem>
                    </List>
                    
                </Box>
            </Drawer>
        </Box>
    );
};
