import React, { useState } from 'react'
import { Drawer, IconButton, Link, List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';



const DrawerComp1 = () => {

    const [openDrawer, setopenDrawer] = useState(false)

  return (
    <React.Fragment>
        <Drawer open={openDrawer}
        onClose={() => setopenDrawer(false)}
        >
            <List>
                {
                        <ListItemButton onClick={() => setopenDrawer(false)}>
                            <ListItemIcon>
                                <ListItemText>
                                    <Link href="/about" underline="none" sx={{color: "black"}}>ABOUT US</Link>
                                </ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                        
                }
            </List>

            <List>
                {
                        <ListItemButton onClick={() => setopenDrawer(false)}>
                            <ListItemIcon>
                                <ListItemText>
                                    <Link href="/contacts" underline="none" sx={{color: "black"}}>CONTACTS</Link>
                                </ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                        
                }
            </List>

            <List>
                {
                        <ListItemButton onClick={() => setopenDrawer(false)} disabled>
                            <ListItemIcon>
                                <ListItemText>
                                    <Link href="#" underline="none" sx={{color: "black"}}>REVIEWS</Link>
                                </ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                        
                }
            </List>

            <List>
                {
                        <ListItemButton onClick={() => setopenDrawer(false)}>
                            <ListItemIcon>
                                <ListItemText>
                                    <Link href="/services" underline="none" sx={{color: "black"}}>SERVICES</Link>
                                </ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                        
                }
            </List>

            <List>
                {
                        <ListItemButton onClick={() => setopenDrawer(false)}>
                            <ListItemIcon>
                                <ListItemText>
                                    <Link href="/sidesignin" underline="none" sx={{color: "black"}}>SIGN IN</Link>
                                </ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                        
                }
            </List>

        </Drawer>
        <IconButton sx={{color:"white", marginLeft:"auto"}} onClick={()=> setopenDrawer(!openDrawer)}>
            <MenuIcon/>
        </IconButton>
    </React.Fragment>
  )
}
export default DrawerComp1;