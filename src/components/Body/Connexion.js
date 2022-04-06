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
import React, { useState } from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components

function Connexion() {

  localStorage.setItem("auth", false);
  const  [client , setClient] = useState({});


  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });

  const signIn = (e) => {
    e.preventDefault();        
    const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json'
        },
        body: JSON.stringify(client)
    };
    fetch('http://localhost:3000/api/client/signIn', requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log("data: ",data)
      localStorage.setItem("token", data.token);
      localStorage.setItem("auth", true);
      var date = new Date();
      date.setTime(date.getTime() + (3*24*60*60*1000));
      document.cookie = `userId=${data.clientId}; expires=${date.toUTCString()};`;
      document.cookie = `token=${data.token}; expires=${date.toUTCString()};`;
      // store.dispatch( signIn() )
      // console.log("store: ",store.getState())
      window.location.href = "http://localhost:3001/index";

      // setToken(data.token);
      // setUserId(data.clientId);
    })
    .catch(err => console.error(err));
    }

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
                <Form className="register-form" onSubmit={ signIn }>
                  <label>Pseudo</label>
                  <Input placeholder="Pseudo" type="text" onChange={e => setClient( {...client ,Email: e.target.value} )} />
                  <label>Password</label>
                  <Input placeholder="Password" type="password" onChange={e => setClient( {...client ,motDePasse: e.target.value} )} />
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
