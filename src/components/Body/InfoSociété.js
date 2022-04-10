import React ,{ useEffect }from 'react'

import { Button, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row } from 'reactstrap'

export default function InfoSociété() {
    const [disable, setDisable] = React.useState({'a':true,'b':true,'c':true,'d':true,'e':true,'f':true,'g':true,'h':true});
    const [disablebt, setDisablebt] = React.useState(true);
    useEffect(()=>
        {
            for(let i in disable){
                !disable[i]&&setDisablebt(false);
             }
        }
    )
  return (
    <div>
        
        
        
        <Container>
        <h2 style={{fontWeight:'bold',font:'50px serif'}}> Gérer compte </h2>
        <br/>
        <Form>
        <Row>
            <Col>
                <Label for='nom' style={{fontSize:'15px',fontWeight:'bold'}}>Nom</Label>
                <InputGroup>
                <Input type='text' name='nom' id='nom' defaultValue='gomri' disabled={disable.a}></Input>
                <InputGroupAddon addonType="append">
                    <InputGroupText onClick={(e)=>setDisable({...disable,'a':false})}>
                                    <i className="fa fa-wrench"  aria-hidden="true" ></i>
                    </InputGroupText>
                </InputGroupAddon>
                </InputGroup>
            </Col>
            <Col>
                <Label for='pre' style={{fontSize:'15px',fontWeight:'bold'}}>Prénom </Label>
                <InputGroup>
                <Input type='text' name='pre' id='pre' defaultValue='akrem' disabled={disable.b}></Input>
                <InputGroupAddon addonType="append">
                    <InputGroupText onClick={(e)=>setDisable({...disable,'b':false})}>
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
                <Input type='email' name='email' id='email' defaultValue='gomri@gmail.com'  disabled={disable.c}></Input>
                <InputGroupAddon addonType="append">
                    <InputGroupText  onClick={(e)=>setDisable({...disable,'c':false})}>
                                    <i className="fa fa-wrench"  aria-hidden="true"></i>
                    </InputGroupText>
                </InputGroupAddon>
                </InputGroup>
            </Col>
            <Col>
            <Label for='nom' style={{fontSize:'15px',fontWeight:'bold'}}>Téléphone </Label>
            <InputGroup>
                <Input type='text' name='nomE' id='nomE' defaultValue='20666888'  disabled={disable.d}></Input> 
                <InputGroupAddon addonType="append">
                    <InputGroupText onClick={(e)=>setDisable({...disable,'d':false})}>
                                    <i className="fa fa-wrench"  aria-hidden="true"></i>
                    </InputGroupText>
                </InputGroupAddon>
            </InputGroup>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col>
                <Label for='ps' style={{fontSize:'15px',fontWeight:'bold'}}>Pseudo</Label>
                <InputGroup>
                <Input type='text' name='ps' id='ps' defaultValue='gg'  disabled={disable.e}></Input>
                <InputGroupAddon addonType="append">
                    <InputGroupText onClick={(e)=>setDisable({...disable,'e':false})}>
                                    <i className="fa fa-wrench"  aria-hidden="true" ></i>
                    </InputGroupText>
                </InputGroupAddon>
                </InputGroup>
            </Col>
            <Col>
            <Label for='mp' style={{fontSize:'15px',fontWeight:'bold'}}>Mot de Passe </Label>
            <InputGroup>
                <Input type='password' name='mp' id='mp' defaultValue='1234'  disabled={disable.f}></Input> 
                <InputGroupAddon addonType="append">
                    <InputGroupText onClick={(e)=>setDisable({...disable,'f':false})}>
                                    <i className="fa fa-wrench"  aria-hidden="true" ></i>
                    </InputGroupText>
                </InputGroupAddon>
            </InputGroup>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col>
                <Label for='ville' style={{fontSize:'15px',fontWeight:'bold'}}>Pseudo</Label>
                <InputGroup>
                <Input type='text' name='ville' id='ville' defaultValue='sousse'  disabled={disable.g}></Input>
                <InputGroupAddon addonType="append">
                    <InputGroupText onClick={(e)=>setDisable({...disable,'g':false})}>
                                    <i className="fa fa-wrench"  aria-hidden="true" ></i>
                    </InputGroupText>
                </InputGroupAddon>
                </InputGroup>
            </Col>
            <Col>
            <Label for='nome' style={{fontSize:'15px',fontWeight:'bold'}}>Nom de l'Entreprise </Label>
            <InputGroup>
                <Input type='text' name='nome' id='nome' defaultValue='société de hamdi'  disabled={disable.h}></Input> 
                <InputGroupAddon addonType="append">
                    <InputGroupText onClick={(e)=>setDisable({...disable,'h':false})}>
                                    <i className="fa fa-wrench"  aria-hidden="true" ></i>
                    </InputGroupText>
                </InputGroupAddon>
            </InputGroup>
            </Col>
        </Row>
        <br/>
        <Row><Col>
            <Button type='submit' disabled={disablebt}> Sauvgarder</Button></Col>
        </Row>
        </Form>
        </Container>
    </div>
  )
}
