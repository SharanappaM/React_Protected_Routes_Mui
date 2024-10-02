import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const drawerWidth = 240;

export default function ClippedDrawer() {


    const token = localStorage.getItem("token")

    const navigate = useNavigate()

    const handleLogout = () => {
        navigate("/")
        localStorage.removeItem("token");
        alert("Log out success");
    }


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Clipped drawer
                    </Typography>

                    <Box bgcolor="red">
                        {token ?
                            <p onClick={handleLogout} >Logout</p>
                            :
                            <Link className='hover:border-b-2 hover:border-red-500' to={"/login"}>Login</Link>
                        }
                    </Box>
                </Toolbar>


            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <Link>Home</Link>
                            </ListItemButton>

                        </ListItem>
                        <ListItem disablePadding>

                            <ListItemButton>
                                <Link to="template">Template</Link>
                            </ListItemButton>

                        </ListItem>
                        <ListItem disablePadding>

                            <ListItemButton>
                                <Link to="profile">Profile</Link>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Divider />

                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}