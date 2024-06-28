// src/components/Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Drawer, List, ListItem, ListItemText } from "@mui/material";

const drawerWidth = 240;

const Layout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <List>
          <ListItem button component="a" href="/resize">
            <ListItemText primary="Image Basics with openCV" />
          </ListItem>
          <ListItem button component="a" href="/home">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component="a" href="/about">
            <ListItemText primary="About" />
          </ListItem>
          {/* Add more navigation items here */}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
