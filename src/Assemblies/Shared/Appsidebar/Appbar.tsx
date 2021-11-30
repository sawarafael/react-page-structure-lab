import * as React from "react";
import {
  AppBar as MuiAppBar,
  Drawer,
  Button,
  IconButton,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import { IoMenuOutline } from "react-icons/io5";
import zIndex from "@material-ui/core/styles/zIndex";

export const AppBar = ({ children }: any) => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MuiAppBar
        color="inherit"
        position="fixed"
        style={{ zIndex: zIndex.drawer + 1 }}
      >
        <Toolbar disableGutters={true} variant="dense">
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, ml: 2 }}
            onClick={handleDrawerOpen}
          >
            <IoMenuOutline />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Overview
          </Typography>
          {!isAuthenticated ? (
            <Button
              color="primary"
              variant="contained"
              sx={{ mr: 2 }}
              onClick={loginWithRedirect}
            >
              Login
            </Button>
          ) : (
            <Button
              color="primary"
              variant="contained"
              sx={{ mr: 2 }}
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </MuiAppBar>
      <Drawer variant="permanent" open={open}>
        teste
      </Drawer>
    </>
  );
};
