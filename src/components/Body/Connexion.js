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
import IndexNavbar from "components/Navbars/IndexNavbar";
import React from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components

function Connexion() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
    <IndexNavbar/>
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("assets/img/3.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto"  style={{backgroundColor:'rgba(100, 119, 126,0.6)'}}>
                <h3 className="title mx-auto">Bienvenue</h3>
                <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="facebook"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="google"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon"
                    color="twitter"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <Form className="register-form">
                  <label>Pseudo</label>
                  <Input placeholder="Pseudo" type="text" />
                  <label>Password</label>
                  <Input placeholder="Password" type="password" />
                  <Button block className="btn-round"  color="dark"> 
                  S'inscrire
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    style={{color:'rgb(100, 119, 161)'}}
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Mot de Passe Oubliée ?
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        
      </div>
    </>
  );
}
export default Connexion;
