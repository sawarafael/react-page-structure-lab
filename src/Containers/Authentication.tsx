import * as React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { AppBar, Toolbar } from "@material-ui/core";

export const Authentication = ({ children }: any) => {
  return (
    <AppBar>
      <Toolbar>
        <Auth0Provider
          domain="http://is.hmg.sigtrans.com.br:9443/"
          clientId="DrVzEFmGl8OprpsEwQOaxfSKwKQa"
          redirectUri={window.location.origin}
        ></Auth0Provider>
        {children}
      </Toolbar>
    </AppBar>
  );
};

//DOMAIN:
//  http://is.hmg.sigtrans.com.br:9443/
//CLIENTID:
// DrVzEFmGl8OprpsEwQOaxfSKwKQa
