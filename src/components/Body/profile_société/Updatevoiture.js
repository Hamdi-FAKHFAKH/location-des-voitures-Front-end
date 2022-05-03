import { Carcontext } from 'context/Carcontext';
import React,{useContext,useEffect} from 'react'
import { Button, Col, Container, Form, FormGroup, FormText, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row } from 'reactstrap';

export default function Updatevoiture() {
    const {infocar,setvueprofileSociété} = useContext (Carcontext);
    const [disable, setDisable] = React.useState({'a':true,'b':true,'c':true,'d':true,'e':true,'f':true,'g':true,'h':true});
    const [disablebt, setDisablebt] = React.useState(true);
    useEffect(()=>
    {
        for(let i in disable){
            !disable[i]&&setDisablebt(false);
         }
    },[disable]
)
    function getInput(e){}

  return (
    <div>
        <br/>
        <Container style={{width:'800px'}}>
        <h2 style={{fontWeight:'bold',font:'40px serif'}} > Mise a jour les informations du voiture </h2>
        <br/>
        <img src={infocar.image} alt ='' width={400} height={250}  style={{borderRadius:'30px' , border:'2px solid rgba(120, 120, 120, 0.8)'}}/>
        <Form> 
            <Row>
              <Col>
                <Label style={{fontSize:'15px',fontWeight:'bold' ,marginTop:'18px'}}> Matricule <span style={{color:'red'}}>*</span></Label>
                  <InputGroup>
                      <Input placeholder="Matricule" type="text" name="matricule" onChange={ (e) => getInput(e) } defaultValue={infocar.matricule} disabled={disable.a}/>
                      <InputGroupAddon addonType="append">
                    <InputGroupText onClick={(e)=>setDisable({...disable,'a':false})} style={{cursor: 'pointer'}}>
                                    <i className="fa fa-wrench"  aria-hidden="true" ></i>
                    </InputGroupText>
                </InputGroupAddon>
                  </InputGroup>

                <Label style={{fontSize:'15px',fontWeight:'bold' ,marginTop:'18px'}}> Marque de voiture <span style={{color:'red'}}>*</span></Label>
                  <InputGroup>
                      <Input placeholder="Marque" type="text" name="marque" onChange={ (e) => getInput(e) } defaultValue={infocar.marque}  disabled={disable.b}/>
                      <InputGroupAddon addonType="append">
                    <InputGroupText onClick={(e)=>setDisable({...disable,'b':false})} style={{cursor: 'pointer'}}>
                                    <i className="fa fa-wrench"  aria-hidden="true" ></i>
                    </InputGroupText>
                </InputGroupAddon>
                  </InputGroup>

                  <Label style={{fontSize:'15px',fontWeight:'bold' ,marginTop:'18px'}}> Prix par Heure  <span style={{color:'red'}}>*</span></Label>
                  <InputGroup>
                      <Input placeholder="Prix" type="text" name="prix_par_heure" onChange={ (e) => getInput(e) } defaultValue={infocar.prix}  disabled={disable.c}/>
                      <InputGroupAddon addonType="append">
                    <InputGroupText onClick={(e)=>setDisable({...disable,'c':false})} style={{cursor: 'pointer'}}>
                                    <i className="fa fa-wrench"  aria-hidden="true" ></i>
                    </InputGroupText>
                </InputGroupAddon>
                  </InputGroup>
              </Col>
          </Row>
          <Row>
              <Col>
              <Label style={{fontSize:'15px',fontWeight:'bold' ,marginTop:'18px'}}> Description <span style={{color:'red'}}>*</span></Label>
                    <InputGroup>
                        <Input placeholder="Description de la voiture" type="textarea"  rows='5' minLength={80} maxLength={85} name="description" onChange={ (e) => getInput(e) } defaultValue={infocar.desc} disabled={disable.d}/>
                        <InputGroupAddon addonType="append">
                            <InputGroupText onClick={(e)=>setDisable({...disable,'d':false})} style={{cursor: 'pointer'}}>
                                            <i className="fa fa-wrench"  aria-hidden="true" ></i>
                            </InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                    <Label style={{fontSize:'15px',fontWeight:'bold' ,marginTop:'18px'}}> Choisit l'image de la voiture <span style={{color:'red'}}>*</span></Label>
                    <FormGroup>
                        <InputGroup>
                            <Input
                            id="exampleFile"
                            type="text"
                            name="imageUrl" onChange={ (e) => getInput(e) }
                            defaultValue={infocar.image}
                            disabled={disable.e}
                            />
                            <InputGroupAddon addonType="append">
                                <InputGroupText onClick={(e)=>setDisable({...disable,'e':false})} style={{cursor: 'pointer'}}>
                                                <i className="fa fa-wrench"  aria-hidden="true" ></i>
                                </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                        <FormText>
                        Choisit une photo claire avec taille 500*320 pour étre attirant aux clients 
                        </FormText>
                </FormGroup>
              </Col> 
              
                     </Row>
                     <br/>
                     <Row>
                     <Col className="ml-auto mr-auto" lg='4'>
                    <Button block className="btn-round" color="success" onClick={e=>setvueprofileSociété('vuelisteV')} disabled={disablebt}>Sauvgarder</Button></Col>
                    <Col className="ml-auto mr-auto" lg='4'><Button block className="btn-round" color="dark" onClick={e=>setvueprofileSociété('vuelisteV')}>Annuler</Button></Col>
                    <Col className="ml-auto mr-auto" lg='4'>
                    <Button block className="btn-round" color="danger" onClick={e=>setvueprofileSociété('vuelisteV')}>Supprimer</Button></Col>
                     </Row>
                    </Form>

        </Container>
        <br/><br/>
    </div>
  )
}
