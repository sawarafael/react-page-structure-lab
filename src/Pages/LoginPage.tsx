import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button } from "@material-ui/core";
import { AppSideBar } from "../Containers/Appbar/Appsidebar";

export const LoginPage = () => {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } =
    useAuth0();

  return (
    <Box>
      <AppSideBar />
      <Button variant="contained" color="success" onClick={loginWithPopup}>
        Login com Popup
      </Button>
      <hr />
      <Button variant="contained" color="success" onClick={loginWithRedirect}>
        Login com Redirecionamento
      </Button>
      <h2>Usuário está {isAuthenticated ? "Logado" : "Deslogado"}</h2>
      {isAuthenticated && (
        <pre style={{ textAlign: "start" }}>
          {JSON.stringify(user, null, 2)}
        </pre>
      )}
    </Box>
  );
};
