import * as React from "react";
import { Box } from "@material-ui/core";
import { AppBar } from "../Assemblies/Shared/Appsidebar/Appbar";
import { HelloWorld } from "../Assemblies/Static/Main/HelloWorld";

export const LoginPage = () => {
  return (
    <Box>
      <AppBar />
      <HelloWorld />
    </Box>
  );
};
