import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import profileImage from '../Aplogo.png';

const navItems = ['My work', 'About me', 'Contact'];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" style={{ backgroundColor: '#edb832' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer} sx={{ display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
            <img src={profileImage} alt="Profile" style={{ width: '70px' }} />
          </Box>
          <Box sx={{ marginLeft: 'auto', display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} color="inherit">{item}</Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={toggleDrawer} sx={{ display: { xs: 'block', sm: 'none' } }}>
        <List>
          {navItems.map((item) => (
            <ListItem key={item} onClick={toggleDrawer}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Navbar;
