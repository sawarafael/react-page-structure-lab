import * as React from "react";
import { AppBar, Drawer, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from '@mui/icons-material/Menu';

export const AppSideBar = ({ children }: any) => {
  return (
    <>
      <AppBar color="inherit">
        <Toolbar disableGutters={true} variant="dense" >
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer>Sidebar</Drawer>
      {children}
    </>
  );
};
