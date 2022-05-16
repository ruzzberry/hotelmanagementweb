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
            WIP : LANDING PAGE
        </Box>
    );
};
