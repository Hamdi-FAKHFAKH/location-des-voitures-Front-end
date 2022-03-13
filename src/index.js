/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import FormCountClient from "components/Body/FormCountClient";
// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import Connexion from "components/Body/Connexion";
import Service from "components/Body/Service";
import FormEntrepriser from "components/Body/FormEntrepriser";
/*import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";

// others
/*<Route
path="/nucleo-icons"
render={(props) => <NucleoIcons {...props} />}
/>
<Route
path="/landing-page"
render={(props) => <LandingPage {...props} />}
/>
<Route
path="/profile-page"
render={(props) => <ProfilePage {...props} />}
/>
<Route
path="/register-page"
/>*/
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route path="/inscrit" render={(props) => <FormCountClient {...props} />}/>
      <Route path="/connexion" render={(props) => <Connexion {...props} />}/>
      <Route path="/service" render={(props) => <Service {...props} />}/>
      <Route path="/entreprise" render={(props) => <FormEntrepriser {...props} />}/>
      <Redirect to="/index" />

    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
