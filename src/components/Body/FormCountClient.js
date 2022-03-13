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
export default function FormCountClient() {

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
        <Container>
        <Row>
            <Col className="ml-auto mr-auto" lg="4" style={{marginTop:100}}>
              <Card className=" card-register ml-auto mr-auto" style={{backgroundColor:'rgba(100, 119, 126,0.6)'}}>
                <h3 className="title mx-auto">Crée un Compte</h3>
                <Form className="register-form" onSubmit={onSubmitForm}> 
                            <InputGroup>
                                <Input placeholder="Prénom" type="text" />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText><i aria-hidden={true} className="fa fa-group" /></InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            <br/>
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
                                <Input placeholder="Email" type="text" />
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i aria-hidden={true} className="fa fa-envelope-o" />
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            <br/>
                            <InputGroup>
                                <Input placeholder="Téléphone" type="text" />
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i aria-hidden={true} className="fa fa-phone" />
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            <br/>
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
                                <Input placeholder="Date de Naissance " type="date" onFocus={(e)=>e.target.type = 'date'} onBlur={(e)=>e.target.type = 'text'} />
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i aria-hidden={true} className="fa fa-calendar" />
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
                                <br/>
                         
                                <InputGroup>
                                    <Input placeholder="Mot de Passe " type="text" />
                                    <InputGroupAddon addonType="append">
                                    <InputGroupText>
                                        <i aria-hidden={true} className="fa fa-key" />
                                    </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            
                        <Button block className="btn-round" color="dark" type='submit' >S'inscrire</Button>
                    </Form>
              </Card>
              </Col>
          </Row>
        </Container>
  </div>
  </>
  )
}
