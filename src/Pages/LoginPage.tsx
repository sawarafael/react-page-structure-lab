import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Authentication } from "../Containers/Authentication";
import { Box, Button } from "@material-ui/core";

export const LoginPage = () => {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } =
    useAuth0();

  return (
    <Box>
      <Authentication>
        <Button variant="contained" color="success" onClick={loginWithPopup}>
          Login com Popup
        </Button>
      </Authentication>
      <h2>Usuário está {isAuthenticated ? "Logado" : "Deslogado"}</h2>
    </Box>
  );
};
