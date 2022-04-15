import React from 'react'
import { Button, Col, Container, Form, FormGroup, FormText, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row } from 'reactstrap'

export default function NewCar({vue,setvue}) {
  return (
    <div>
        
        <br/>
        <Container style={{width:'800px'}}>
        <h2 style={{fontWeight:'bold',font:'40px serif'}}> Ajouter une Nouvelle Voiture </h2>
        <br/>
        <Form> 
                <Row><Col>
                <Label style={{fontSize:'15px',fontWeight:'bold' ,marginTop:'18px'}}> Marque de voiture <span style={{color:'red'}}>*</span></Label>
                            <InputGroup>
                                <Input placeholder="Marque" type="text" />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText><i aria-hidden={true} className="fa fa-car" /></InputGroupText>
        
                                </InputGroupAddon>
                            </InputGroup>
                            <Label style={{fontSize:'15px',fontWeight:'bold' ,marginTop:'18px'}}> Prix par Heure  <span style={{color:'red'}}>*</span></Label>
                            <InputGroup>
                                <Input placeholder="Prix" type="text"/>
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i aria-hidden={true} className="fa fa-money" />
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Label style={{fontSize:'15px',fontWeight:'bold' ,marginTop:'18px'}}> Description <span style={{color:'red'}}>*</span></Label>
                            <InputGroup>
                                <Input placeholder="Description de la voiture" type="textarea"  rows='5'/>
                            </InputGroup>
                            <Label style={{fontSize:'15px',fontWeight:'bold' ,marginTop:'18px'}}> Choisit l'image de la voiture <span style={{color:'red'}}>*</span></Label>
                           <FormGroup>
    <Input
      id="exampleFile"
      name="file"
      type="file"
    />
    <FormText>
      Choisit une photo claire avec taille 500*320 pour étre attirant aux clients 
    </FormText>
  </FormGroup>
                            </Col> 
                     </Row>
                     <br/>
                     <Row>
                     <Col className="ml-auto mr-auto" lg='4'>
                    <Button block className="btn-round" color="dark" type='submit' onClick={(e)=>setvue('vuelisteV')}>Envoyer</Button></Col>
                    <Col className="ml-auto mr-auto" lg='4'><Button block className="btn-round" color="dark" type='submit' onClick={(e)=>setvue('vuelisteV')}>Annuler</Button></Col>
                     </Row>
                    </Form>

        </Container>
    </div>
  )
}
