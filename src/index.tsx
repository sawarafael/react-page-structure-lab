import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="https://am.hmg.sigtrans.com.br:9443/oauth2"
    clientId="cjHhXdMChNyOsDYrcKiqfFUFkwca"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
