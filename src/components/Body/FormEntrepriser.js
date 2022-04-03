import IndexNavbar from 'components/Navbars/IndexNavbar';
import axios from 'axios'
import React from 'react'
import {
    Card,
    Button,
    Alert,
    Form,
    Container,   
    FormGroup,
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
      
        function onSubmitForm(e) {
            e.preventDefault();
            fetch("http://localhost:3000/api/owner")
                .then(res => console.log(res))
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
                                <Input placeholder="Prénom" type="text" />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText><i aria-hidden={true} className="fa fa-group" /></InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            <br/>
                            <InputGroup>
                                <Input placeholder="Email" type="email" />
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i aria-hidden={true} className="fa fa-envelope-o" />
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup>
                                <Input placeholder="Nom" type="text" />
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i aria-hidden={true} className="fa fa-group" />
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                           <br/>
                            <InputGroup>
                                <Input placeholder="Téléphone" type="number" />
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
                                <Input placeholder="N° CIN" type="text" />
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i aria-hidden={true} className="fa fa-id-card-o" />
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            <br/> 
                            <InputGroup>
                                <Input placeholder="Pseudo" type="text" />
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i aria-hidden={true} className="fa fa-user-circle" />
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            </Col><Col>

                            <InputGroup>
                                <Input placeholder="Date de Naissance" type="text" onFocus={(e)=>e.target.type = 'date'} onBlur={(e)=>e.target.type = 'text'}/>
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i aria-hidden={true} className="fa fa-calendar" />
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                                <br/>
                         
                                <InputGroup>
                                    <Input placeholder="Mot de Passe " type="text" />
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
                                <Input placeholder="Ville" type="text" />
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                <i class="fa fa-flag" aria-hidden="true"></i>
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            
                            </Col><Col>
                           
                            <InputGroup>
                                <Input placeholder="Nom de Entreprise" type="text" />
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
              </Card>
            
        </Container>
  </div>
  </>
  )
}

