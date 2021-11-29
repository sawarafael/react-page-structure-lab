import * as React from "react";
import { AppBar, Drawer, Toolbar } from "@material-ui/core";

export const AppSideBar = ({ children }: any) => {
  return (
    <>
      <AppBar>
        <Toolbar>Lab de Repositório Uranus com Autenticação IS</Toolbar>
      </AppBar>
      <Drawer>Sidebar</Drawer>
      {children}
    </>
  );
};
