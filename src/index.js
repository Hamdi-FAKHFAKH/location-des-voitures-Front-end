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
import Contact from "components/Body/Contact";

import ProfileSociété from "components/Body/profile_société/ProfileSociété";
import Profileclient from "components/Body/profile_client/ProfileClient";
import CarcontextProvider from "context/Carcontext";


ReactDOM.render(
  <CarcontextProvider>
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route path="/inscrit" render={(props) => <FormCountClient {...props} />}/>
      <Route path="/connexion" render={(props) => <Connexion {...props} />}/>
      <Route path="/service" render={(props) => <Service {...props} />}/>
      <Route path="/entreprise" render={(props) => <FormEntrepriser {...props} />}/>
      <Route path="/profiles" render={(props) => <ProfileSociété {...props} />}/>
      <Route path="/profilec" render={(props) => <Profileclient {...props} />}/>
      <Route path="/contact" render={(props) => <Contact {...props} />}/>
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>
  </CarcontextProvider>,
  document.getElementById("root")
);
