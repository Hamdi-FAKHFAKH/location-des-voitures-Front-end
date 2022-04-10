import IndexNavbar from 'components/Navbars/IndexNavbar';
// import axios from 'axios'
import React, { useState } from 'react'

import {
    Card,
    Button,
    // Alert,
    Form,
    Container,   
    // FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
  } from "reactstrap";
export default function FormCountClient() {
    const  [client , setClient] = useState({});
    const [ wrongConfidentials, setWrongConfidentials ] = useState({isWrong: false, message: ''});
        async function onSubmitForm(e) {
            e.preventDefault();        
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(client)
            };
            fetch('http://localhost:3000/api/client/signUp', requestOptions)
              .then(( response ) => {
                if(response.status === 201){
                    window.location.href = "/connexion";
                } else if( response.status === 400){
                    console.log("des données qui doinvent étre unique mais qui sont déjà crées");
                    setWrongConfidentials({ isWrong:true, message: "faux nom d'utilisateur ou faux mot de passe" })
                } else if( response.status === 422 ) {
                    console.log(response.statusText);
                    setWrongConfidentials({ isWrong:true, message: response.statusText })

                } else {
                    console.log("une erreure inconnue est survenue ");
                    setWrongConfidentials({ isWrong:true, message: "une erreure inconnue est survenue" })

                }
                }).catch( error => console.log("erreur signUp: ", error));
        }

        const style = {
            'color': 'red',
            'zIndex': '-1',
            'position':'absolute',
            'bottom':'70px',
            'left':'35px'
          }
        
  return (
     <>
     <IndexNavbar/>
    <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("assets/img/3.jpg").default + ")",
    }}>
        <div className="filter" />
        <Container>
        <Row>
            <Col className="ml-auto mr-auto" lg="4" style={{marginTop:100}}>
              <Card className=" card-register ml-auto mr-auto" style={{backgroundColor:'rgba(100, 119, 126,0.6)'}}>
                <h3 className="title mx-auto">Crée un Compte</h3>
                <Form className="register-form" onSubmit={onSubmitForm}> 
                            <InputGroup>
                                <Input placeholder="Prénom" type="text" onChange={(e) => setClient( {...client ,prenom: e.target.value} )} />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText><i aria-hidden={true} className="fa fa-group" /></InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            <br/>
                            <InputGroup>
                                <Input placeholder="Nom" type="text" onChange={(e) => setClient( {...client ,nom: e.target.value} )}/>
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i aria-hidden={true} className="fa fa-group" />
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            <br/>
                            <InputGroup>
                                <Input placeholder="Email" type="email" onChange={(e) => setClient( {...client ,Email: e.target.value} )}/>
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i aria-hidden={true} className="fa fa-envelope-o" />
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            <br/>
                            <InputGroup>
                                <Input placeholder="Téléphone" type="text" onChange={(e) => setClient( {...client ,telephone: e.target.value} )} />
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i aria-hidden={true} className="fa fa-phone" />
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            <br/>
                            <InputGroup>
                                <Input placeholder="N° CIN" type="text" onChange={e => setClient( {...client ,CIN: parseInt(e.target.value)} )} />
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i aria-hidden={true} className="fa fa-id-card-o" />
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            <br/> 
                            <InputGroup>
                                <Input placeholder="Date de Naissance " type="text" onFocus={(e)=>e.target.type = 'date'} onBlur={(e)=>e.target.type = 'text'} onChange={(e) => setClient( {...client ,date_de_naissance: e.target.value} )} />
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i aria-hidden={true} className="fa fa-calendar" />
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            <br/>
                            <InputGroup>
                                <Input placeholder="Pseudo" type="text" onChange={(e) => setClient( {...client ,pseudo: e.target.value} )} />
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i aria-hidden={true} className="fa fa-user-circle" />
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                                <br/>
                         
                                <InputGroup>
                                    <Input placeholder="Mot de Passe " type="password" onChange={(e) => setClient( {...client ,motDePasse: e.target.value} )} />
                                    <InputGroupAddon addonType="append">
                                    <InputGroupText>
                                        <i aria-hidden={true} className="fa fa-key" />
                                    </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            
                        <Button block className="btn-round" color="dark" type='submit' >S'inscrire</Button>
                    </Form>
                    { wrongConfidentials.isWrong && <span style={ style }> { wrongConfidentials.message }</span>}

              </Card>
              </Col>
          </Row>
        </Container>
  </div>
  </>
  )
}
