import React, { useState } from 'react'
import { Button, Col, Container, Form, FormGroup, FormText, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row } from 'reactstrap'

export default function NewCar({vue,setvue}) {

  const [newVoiture, setNewVoiture] = useState({});

  function getInput(e){
    setNewVoiture({ ...newVoiture, [e.target.name]: e.target.value })
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  async function ajoutervoiture(voiture){

    const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + getCookie("token")
        },
        body: JSON.stringify(voiture)
    };
    try{
      await fetch('http://localhost:3000/api/voiture/', requestOptions);
    } catch {
      console.log("error");
    }
  }
  return (
    <div>
        
        <br/>
        <Container style={{width:'800px'}}>
        <h2 style={{fontWeight:'bold',font:'40px serif'}} > Ajouter une Nouvelle Voiture </h2>
        <br/>
        <Form> 
            <Row>
              <Col>
                <Label style={{fontSize:'15px',fontWeight:'bold' ,marginTop:'18px'}}> Matricule <span style={{color:'red'}}>*</span></Label>
                  <InputGroup>
                      <Input placeholder="Matricule" type="text" name="matricule" onChange={ (e) => getInput(e) }/>
                      <InputGroupAddon addonType="append">
                          <InputGroupText><i aria-hidden={true} className="fa fa-car" /></InputGroupText>

                      </InputGroupAddon>
                  </InputGroup>

                <Label style={{fontSize:'15px',fontWeight:'bold' ,marginTop:'18px'}}> Marque de voiture <span style={{color:'red'}}>*</span></Label>
                  <InputGroup>
                      <Input placeholder="Marque" type="text" name="marque" onChange={ (e) => getInput(e) }/>
                      <InputGroupAddon addonType="append">
                          <InputGroupText><i aria-hidden={true} className="fa fa-car" /></InputGroupText>

                      </InputGroupAddon>
                  </InputGroup>

                  <Label style={{fontSize:'15px',fontWeight:'bold' ,marginTop:'18px'}}> Prix par Heure  <span style={{color:'red'}}>*</span></Label>
                  <InputGroup>
                      <Input placeholder="Prix" type="text" name="prix_par_heure" onChange={ (e) => getInput(e) }/>
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
                        <Input placeholder="Description de la voiture" type="textarea"  rows='5' minLength={80} maxLength={120} name="description" onChange={ (e) => getInput(e) }/>
                    </InputGroup>
                    <Label style={{fontSize:'15px',fontWeight:'bold' ,marginTop:'18px'}}> Choisit l'image de la voiture <span style={{color:'red'}}>*</span></Label>
                    <FormGroup>
                <Input
                  id="exampleFile"
                  type="text"
                  name="imageUrl" onChange={ (e) => getInput(e) }
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
                    <Button block className="btn-round" color="dark" type='submit' onClick={(e)=>{
                                                                                e.preventDefault();
                                                                                ajoutervoiture(newVoiture);
                                                                                setvue('vuelisteV')}
                                                                                }>Envoyer</Button></Col>
                    <Col className="ml-auto mr-auto" lg='4'><Button block className="btn-round" color="dark" type='submit' onClick={(e)=>setvue('vuelisteV')}>Annuler</Button></Col>
                     </Row>
                    </Form>

        </Container>
    </div>
  )
}
