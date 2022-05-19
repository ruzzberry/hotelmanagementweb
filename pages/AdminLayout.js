import {AppBar, Box, Drawer, Toolbar, Typography, IconButton, Divider, ButtonBase, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import global from "../styles/global";
import { useRouter } from "next/router";

import {useState} from "react";

export default function AdminLayout({children}) {

    const router = useRouter();

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
        <Box>
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
                    
                    <IconButton onClick={setDrawerOpen} sx={{marginLeft:"75px"}}>
                    <Image src="/assets/svg/menu.svg" alt="Burger Icon" 
                        width={25} 
                        height={25}/>
                    </IconButton>
                </Toolbar>
            </AppBar>

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

                        <ListItem button 
                        onClick={() => CloseHandleClick("/contacts")}
                        selected={router.pathname.includes("contact")}>
                            <ListItemIcon>
                                <Image src="/assets/svg/contact.svg" 
                                alt="Contact" 
                                width={25} 
                                height={25}/>
                            </ListItemIcon>
                            <ListItemText primary="CONTACTS"/>
                        </ListItem>

                        <ListItem button 
                        onClick={() => CloseHandleClick("/comments")}
                        selected={router.pathname.includes("comments")}>
                            <ListItemIcon>
                                <Image src="/assets/svg/review.svg" 
                                alt="Review" 
                                width={25} 
                                height={25}/>
                            </ListItemIcon>
                            <ListItemText primary="REVIEWS"/>
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

            <Box sx={{marginTop:"90px", marginLeft:"12px;"}}>{children}</Box>
        </Box>
    );
};
