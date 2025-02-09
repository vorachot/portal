import { Description, Home, Settings } from "@mui/icons-material";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

interface DrawerComponentProps {
  drawerOpen: boolean;
}

const DrawerComponent: React.FC<DrawerComponentProps> = () => {
  return (
    <Drawer variant="permanent" sx={{ width: 180 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <List sx={{ pt: 2, pr: 4 }}>
          <ListItem>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Description />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
        </List>
        <Box sx={{ flexGrow: 1 }} />
        <List sx={{ pb: 2, pr: 4 }}>
          <ListItem>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
