import React,{useEffect} from 'react'
import { Button, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row } from 'reactstrap'

export default function Infoclient() {
    const [disable, setDisable] = React.useState({'a':true,'b':true,'c':true,'d':true,'e':true,'f':true,'g':true,'h':true});
    const [disablebt, setDisablebt] = React.useState(true);
    useEffect(()=>
        {
            for(let i in disable){
                !disable[i]&&setDisablebt(false);
             }
        },[disable]
    )
    function getInput(e){
       
      }
    return (
    <div>
        <Container>
    <h2 style={{fontWeight:'bold',font:'50px serif'}}> Gérer Compte </h2>
    <br/>
    <Form>
    <Row>
        <Col>
            <Label for='nom' style={{fontSize:'15px',fontWeight:'bold'}}>nom</Label>
            <InputGroup>
            <Input type='text' name='nom' id='nom'  onChange={ (e) => getInput(e)}  disabled={disable.a}></Input>
            <InputGroupAddon addonType="append">
                <InputGroupText onClick={(e)=>setDisable({...disable,'a':false})} style={{cursor: 'pointer'}}>
                                <i className="fa fa-wrench"  aria-hidden="true" ></i>
                </InputGroupText>
            </InputGroupAddon>
            </InputGroup>
        </Col>
        <Col>
            <Label for='prenom' style={{fontSize:'15px',fontWeight:'bold'}}>Prénom </Label>
            <InputGroup>
            <Input type='text' name='prenom' id='prenom'  onChange={ (e) => getInput(e)} disabled={disable.b}></Input>
            <InputGroupAddon addonType="append">
                <InputGroupText onClick={(e)=>setDisable({...disable,'b':false})} style={{cursor: 'pointer'}}>
                                <i className="fa fa-wrench"  aria-hidden="true" ></i>
                </InputGroupText>
            </InputGroupAddon>
            </InputGroup>
        </Col>
    </Row>
    <br/>
    <Row>
        <Col>
            <Label for='email' style={{fontSize:'15px',fontWeight:'bold'}}>Email</Label>
            <InputGroup>
            <Input type='email' name='email' id='email' onChange={ (e) => getInput(e)} disabled={disable.c}></Input>
            <InputGroupAddon addonType="append">
                <InputGroupText  onClick={(e)=>setDisable({...disable,'c':false})} style={{cursor: 'pointer'}}>
                                <i className="fa fa-wrench"  aria-hidden="true"></i>
                </InputGroupText>
            </InputGroupAddon>
            </InputGroup>
        </Col>
        <Col>
        <Label for='telephone' style={{fontSize:'15px',fontWeight:'bold'}}>Téléphone </Label>
        <InputGroup>
            <Input type='text' name='telephone' id='telephone'  onChange={ (e) => getInput(e)} disabled={disable.d}></Input> 
            <InputGroupAddon addonType="append">
                <InputGroupText onClick={(e)=>setDisable({...disable,'d':false})} style={{cursor: 'pointer'}}>
                                <i className="fa fa-wrench"  aria-hidden="true"></i>
                </InputGroupText>
            </InputGroupAddon>
        </InputGroup>
        </Col>
    </Row>
    <br/>
    <Row>
        <Col>
            <Label for='dateN' style={{fontSize:'15px',fontWeight:'bold'}}>Date de Naissance</Label>
            <InputGroup>
            <Input type='date' name='dateN' id='dateN'  onChange={ (e) => getInput(e)} disabled={disable.g}></Input>
            <InputGroupAddon addonType="append">
                <InputGroupText onClick={(e)=>setDisable({...disable,'g':false})} style={{cursor: 'pointer'}}>
                                <i className="fa fa-wrench"  aria-hidden="true" ></i>
                </InputGroupText>
            </InputGroupAddon>
            </InputGroup>
        </Col>
        <Col>
        <Label for='cin' style={{fontSize:'15px',fontWeight:'bold'}}>CIN </Label>
        <InputGroup>
            <Input type='text' name='cin' id='cin'  onChange={ (e) => getInput(e)} disabled={disable.h}></Input> 
            <InputGroupAddon addonType="append">
                <InputGroupText onClick={(e)=>setDisable({...disable,'h':false})} style={{cursor: 'pointer'}} >
                                <i className="fa fa-wrench"  aria-hidden="true" ></i>
                </InputGroupText>
            </InputGroupAddon>
        </InputGroup>
        </Col>
    </Row>
    <br/>
    <Row>
        <Col>
            <Label for='pseudo' style={{fontSize:'15px',fontWeight:'bold'}}>Pseudo</Label>
            <InputGroup>
            <Input type='text' name='pseudo' id='pseudo'  onChange={ (e) => getInput(e)} disabled={disable.e}></Input>
            <InputGroupAddon addonType="append">
                <InputGroupText onClick={(e)=>setDisable({...disable,'e':false})} style={{cursor: 'pointer'}}>
                                <i className="fa fa-wrench"  aria-hidden="true" ></i>
                </InputGroupText>
            </InputGroupAddon>
            </InputGroup>
        </Col>
        <Col>
        <Label for='motDePasse' style={{fontSize:'15px',fontWeight:'bold'}}>Mot de Passe </Label>
        <InputGroup>
            <Input type='password' name='motDePasse' id='mp' placeholder='change your password' disabled={disable.f} onChange={ (e) => getInput(e)}></Input> 
            <InputGroupAddon addonType="append">
                <InputGroupText onClick={(e)=>setDisable({...disable,'f':false})} style={{cursor: 'pointer'}}>
                                <i className="fa fa-wrench"  aria-hidden="true" ></i>
                </InputGroupText>
            </InputGroupAddon>
        </InputGroup>
        </Col>
    </Row>
    <br/>
    
    <br/>
    <Row><Col>
        <Button type='submit' disabled={disablebt}> Sauvgarder</Button></Col>
    </Row>
    </Form>
    </Container></div>
  )
}
