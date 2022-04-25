
import IndexNavbar from "components/Navbars/IndexNavbar";
import React, { useState} from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";
// core components
function Connexion() {

  localStorage.setItem("auth", false);
  const  [client , setClient] = useState({});
  const  [isWrongConfidentials , setIsWrongConfidentials] = useState(false);

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
/************* pour le sign out: début  ****************/
  // function setCookie(cname, cvalue, exdays) {
  //   const d = new Date();
  //   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  //   let expires = "expires=" + d.toUTCString();
  //   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  // }

  // function signOut() {
  //   setCookie("userId", "");
  //   setCookie("token", "");
  //   setCookie("type", "");
  // }
/************* pour le sign out: fin  ****************/

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
      if( !data.token ) {
        fetch('http://localhost:3000/api/owner/signIn', requestOptions)
        .then(response => response.json())
        .then(data => {
          if ( !data.token ) {
            setIsWrongConfidentials(true) // useSate qui va indiquer si le mail et le mot de passe sont correctes ou non
          } else {
            var date = new Date();
            date.setTime(date.getTime() + (30*24*60*60*1000));
            document.cookie = `userId=${data.ownerId}; expires=${date.toUTCString()};`;
            document.cookie = `token=${data.token}; expires=${date.toUTCString()};`;
            document.cookie = `type=owner; expires=${date.toUTCString()};`;
            window.location.href = "/index"; 
          }
        });
      } else{
        var date = new Date();
        date.setTime(date.getTime() + (30*24*60*60*1000));
        document.cookie = `userId=${data.clientId}; expires=${date.toUTCString()};`;
        document.cookie = `token=${data.token}; expires=${date.toUTCString()};`;
        document.cookie = `type=client; expires=${date.toUTCString()};`;
        window.location.href = "/index";
      }
    })
    .catch(err => console.error("erreur hetha: ",err));
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
                  <Input placeholder="Pseudo" type="text" onChange={e => setClient( {...client ,pseudo: e.target.value} )} />
                  <label>mot de passe</label>
                  <Input placeholder="Password" type="password" onChange={e => setClient( {...client ,motDePasse: e.target.value} )} />
                  <Button block className="btn-round"  color="dark"> 
                  S'inscrire
                  </Button>
                </Form>
                { isWrongConfidentials && <span style={{ marginLeft:'50px',marginTop:'15px',color:'red'}}>faux pseudo ou mot de passe</span>}
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