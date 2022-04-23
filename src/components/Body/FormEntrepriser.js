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
export default function FormEntrepriser() {

    /*var onSubmitForm =  ()=>{
        const rep =  axios.get("http://localhost:3000/api/owner").then(res => {
            console.log(res);
        }).catch(error => console.log(error))
        console.log(rep);
        //enregistre le retour de l'API dans le State
        }*/
      const [ owner, setOwner ] = useState({});
      const [ wrongConfidentials, setWrongConfidentials ] = useState({isWrong: false, message: ''});

        async function onSubmitForm(e) {
            e.preventDefault();        
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(owner)
            };
            console.log(owner);
            fetch('http://localhost:3000/api/owner/signUp', requestOptions)
              .then(( response ) => response.json())
              .then( response => {
                console.log(response);

                if( response.err ){
                    setWrongConfidentials({ isWrong:true, message: "error: " + response.err + " existe déjà" })
                } else {
                    window.location.href = "/connexion";
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
        <Container style={{marginTop:'70px'}}>
              <Card  style={{backgroundColor:'rgba(100, 119, 126,0.6)',maxWidth:'900px',margin:'auto',padding:'40px'}}>
                <h3 className="title mx-auto">Demande d'ajouter une société</h3>
                <Form onSubmit={onSubmitForm} className="register-form"> 
                <Row><Col>
                            <InputGroup>
                                <Input placeholder="Prénom" type="text" onChange={(e) => setOwner( {...owner ,prenom: e.target.value} )} />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText><i aria-hidden={true} className="fa fa-group" /></InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            <br/>
                            <InputGroup>
                                <Input placeholder="Email" type="email" onChange={(e) => setOwner( {...owner ,Email: e.target.value} )} />
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i aria-hidden={true} className="fa fa-envelope-o" />
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup>
                                <Input placeholder="Nom" type="text" onChange={(e) => setOwner( {...owner ,nom: e.target.value} )} />
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i aria-hidden={true} className="fa fa-group" />
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                           <br/>
                            <InputGroup>
                                <Input placeholder="Téléphone" type="number" onChange={(e) => setOwner( {...owner ,telephone: e.target.value} )} />
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i aria-hidden={true} className="fa fa-phone" />
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            </Col>
                    </Row>
                            <br/>
                    <Row>
                        <Col>
                            <InputGroup>
                                <Input placeholder="N° CIN" type="text" onChange={(e) => setOwner( {...owner ,CIN: e.target.value} )} />
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i aria-hidden={true} className="fa fa-id-card-o" />
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            <br/> 
                            <InputGroup>
                                <Input placeholder="Pseudo" type="text" onChange={(e) => setOwner( {...owner ,pseudo: e.target.value} )} />
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i aria-hidden={true} className="fa fa-user-circle" />
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            </Col><Col>

                            <InputGroup>
                                <Input placeholder="Date de Naissance" type="text" onChange={(e) => setOwner( {...owner ,date_de_naissance: e.target.value} )} onFocus={(e)=>e.target.type = 'date'} onBlur={(e)=>e.target.type = 'text'}/>
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i aria-hidden={true} className="fa fa-calendar" />
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                                <br/>
                         
                                <InputGroup>
                                    <Input placeholder="Mot de Passe " type="password" onChange={(e) => setOwner( {...owner ,motDePasse: e.target.value} )} />
                                    <InputGroupAddon addonType="append">
                                    <InputGroupText>
                                        <i aria-hidden={true} className="fa fa-key" />
                                    </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                            
                     </Row>
                     <br/>
                     <Row>
                        <Col>
                            <InputGroup>
                                <Input placeholder="addresse" type="text" onChange={(e) => setOwner( {...owner , addresse: e.target.value} )} />
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                <i class="fa fa-flag" aria-hidden="true"></i>
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            
                            </Col><Col>
                           
                            <InputGroup>
                                <Input placeholder="Nom de Entreprise" type="text" onChange={(e) => setOwner( {...owner ,entrepriseName: e.target.value} )} />
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i class="fa fa-building" aria-hidden="true"></i>
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            </Col> 
                     </Row>
                     <br/>
                     <Row>
                     <Col className="ml-auto mr-auto" lg='4'><Button block className="btn-round" color="dark" type='submit' >Envoyer</Button></Col>
                     </Row>
                    </Form>
                    { wrongConfidentials.isWrong && <span style={ style }> { wrongConfidentials.message }</span>}

              </Card>
            
        </Container>
  </div>
  </>
  )
}

