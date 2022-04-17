import React ,{ useEffect, useState }from 'react'

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

      const [ ownerDetails, setOwnerDetails ] = useState([])

      function getInput(e){
        setOwnerDetails({ ...ownerDetails, [e.target.name]: e.target.value })
      }
    
    const getOwnerDetails = () => {
        const requestOptions = {
            method: 'Get',
            headers: { 
              'Content-Type': 'application/json', 
              'Accept': 'application/json',
              'Authorization': 'bearer '+getCookie("token")
            },
        };

        fetch('http://localhost:3000/api/owner/'+getCookie("userId"), requestOptions)
        .then(response => response.json())
        .then( owner => {
          setOwnerDetails(owner)
          console.log(owner.motDePasse);
        })
        .catch(err => console.error(err));
      }

      useEffect(()=>{
        getOwnerDetails()
      },[])

      async function sendUpdateOwner(event){
          event.preventDefault();
        const requestOptions = {
            method: 'PUT',
            headers: { 
              'Content-Type': 'application/json', 
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + getCookie("token")
            },
            body: JSON.stringify(ownerDetails)
        };
        try{
          await fetch('http://localhost:3000/api/owner/profile', requestOptions);
        } catch {
          console.log("error");
        }
      }

    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("index");
      return function cleanup() {
        document.body.classList.remove("index");
      };
    });

  return (
    <div>   
        <Container>
        <h2 style={{fontWeight:'bold',font:'50px serif'}}> Gérer compte </h2>
        <br/>
        <Form>
        <Row>
            <Col>
                <Label for='nom' style={{fontSize:'15px',fontWeight:'bold'}}>nom</Label>
                <InputGroup>
                <Input type='text' name='nom' id='nom' defaultValue={ ownerDetails.nom } onChange={ (e) => getInput(e)}  disabled={disable.a}></Input>
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
                <Input type='text' name='prenom' id='prenom' defaultValue={ ownerDetails.prenom } onChange={ (e) => getInput(e)} disabled={disable.b}></Input>
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
                <Input type='email' name='email' id='email' defaultValue={ ownerDetails.Email } onChange={ (e) => getInput(e)} disabled={disable.c}></Input>
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
                <Input type='text' name='telephone' id='telephone' defaultValue={ ownerDetails.telephone } onChange={ (e) => getInput(e)} disabled={disable.d}></Input> 
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
                <Label for='pseudo' style={{fontSize:'15px',fontWeight:'bold'}}>Pseudo</Label>
                <InputGroup>
                <Input type='text' name='pseudo' id='pseudo' defaultValue={ ownerDetails.pseudo } onChange={ (e) => getInput(e)} disabled={disable.e}></Input>
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
        <Row>
            <Col>
                <Label for='addresse' style={{fontSize:'15px',fontWeight:'bold'}}>addresse</Label>
                <InputGroup>
                <Input type='text' name='addresse' id='addresse' defaultValue={ ownerDetails.addresse } onChange={ (e) => getInput(e)} disabled={disable.g}></Input>
                <InputGroupAddon addonType="append">
                    <InputGroupText onClick={(e)=>setDisable({...disable,'g':false})} style={{cursor: 'pointer'}}>
                                    <i className="fa fa-wrench"  aria-hidden="true" ></i>
                    </InputGroupText>
                </InputGroupAddon>
                </InputGroup>
            </Col>
            <Col>
            <Label for='entrepriseName' style={{fontSize:'15px',fontWeight:'bold'}}>Nom de l'Entreprise </Label>
            <InputGroup>
                <Input type='text' name='entrepriseName' id='entrepriseName' defaultValue={ ownerDetails.entrepriseName } onChange={ (e) => getInput(e)} disabled={disable.h}></Input> 
                <InputGroupAddon addonType="append">
                    <InputGroupText onClick={(e)=>setDisable({...disable,'h':false})} style={{cursor: 'pointer'}} >
                                    <i className="fa fa-wrench"  aria-hidden="true" ></i>
                    </InputGroupText>
                </InputGroupAddon>
            </InputGroup>
            </Col>
        </Row>
        <br/>
        <Row><Col>
            <Button type='submit' disabled={disablebt} onClick={ (event) => sendUpdateOwner(event) }> Sauvgarder</Button></Col>
        </Row>
        </Form>
        </Container>
    </div>
  )
}
