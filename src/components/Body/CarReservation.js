import { Carcontext } from 'context/Carcontext';
import React,{ useContext ,useEffect,useState}  from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row } from 'reactstrap';
import { Icon } from '@iconify/react';
export default function CarReservation() {
  const [ auth, setAuth ] = useState("");
  const [ erreur, setErreur ] = useState({ isError: false, message:"" })

  async function reserver(){
    setvuehome();
      const requestOptions = {
          method: 'Post',
          headers: { 
            'Content-Type': 'application/json', 
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + getCookie("token")
          },
            body: JSON.stringify({ dateDep: infoRes.dateDep +' '+infoRes.tempsDep, dateRet: infoRes.dateRet + ' ' + infoRes.tempsRet, idVoiture: infocar.id, motDePasse: auth })

      };
      console.log("reserver "+infoRes.dateDep + ' '+ infoRes.tempsDep + " " + infoRes.dateRet + ' ' + infoRes.tempsRet );
      const response = await fetch('http://localhost:3000/api/reservation/', requestOptions).catch(() => {
        setErreur({ isError: true, message:"erreur inconnue 1" });
      })
      const data = await response.json().catch(() => {
        setErreur({ isError: true, message:"erreur inconnue 2" });
      })
      console.log("data ",data);
      if(data.error && data.code === 1){
        setErreur({ isError: true, message:"mot de passe incorrecte" });
        alert("mot de passe incorrecte ");
      } else {
        console.log(data);
        alert("reservation réussi le "+infoRes.dateDep + " " +infoRes.dateRet);
        setvuehome();

      }

          // setVoitures(data) 
  }
    const {setvuehome,infocar,infoRes,setinfoRes} = useContext(Carcontext);
    useEffect(()=>
    {
      setErreur(false);
      setinfoRes({...infoRes,prix:infocar.prix * infoRes.nbheure });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]
    )
    //****************************************************************************** */
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
    const [ ownerDetails, setOwnerDetails ] = useState([]); 
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
        owner&&console.log(owner.motDePasse);
      })
      .catch(err => console.error(err));
    }

    useEffect(()=>{
      getOwnerDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    
    <>
    <br/><br/>
    
    <Container>
    
      <Row>
        <Col style={{width:'900px'}}>
          <Card style={{backgroundColor:'rgba(255,255,255,0.2)',width:'670px'}}>
            <CardHeader style={{backgroundColor:'#333333',color:'#ffff',padding: '16px',fontWeight:'bold'}}>Information Client</CardHeader> 
            <CardBody>
              
              <br/>
                {(ownerDetails)?(
                    <Form className="register-form" > 
                        <Row>
                          <Col>
                            <Label> Prénom : </Label>
                            <InputGroup>
                                <Input placeholder="saisie votre Prénom" type="text" defaultValue={ ownerDetails.prenom }disabled/>
                                    <InputGroupText><i aria-hidden={true} className="fa fa-group" /></InputGroupText>
                            </InputGroup>
                          </Col>
                          <Col>
                            <Label> Nom :</Label>
                            <InputGroup>
                              <Input placeholder="saisie votre Nom" type="text"  defaultValue={ ownerDetails.nom }disabled/>
                              <InputGroupAddon addonType="append">
                              <InputGroupText>
                                  <i aria-hidden={true} className="fa fa-group" />
                              </InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </Col>
                        </Row>
                        <br/>
                        <Row>
                          <Col>
                            <Label> Email :</Label>
                            <InputGroup>
                                <Input placeholder="Email" type="email"  defaultValue={ ownerDetails.Email }disabled/>
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i aria-hidden={true} className="fa fa-envelope-o" />
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                          </Col>
                          <Col>
                            <Label> Telephone :</Label>
                            <InputGroup>
                                <Input placeholder="Téléphone" type="text" defaultValue={ ownerDetails.telephone }disabled />
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
                            <Label> CIN :</Label>
                            <InputGroup>
                                <Input placeholder="N° CIN" type="text" defaultValue={'11113118'} disabled/>
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i aria-hidden={true} className="fa fa-id-card-o" />
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                          </Col>
                          <Col>
                            <Label> Date de Naissance :</Label>
                            <InputGroup>
                                <Input placeholder="Date de Naissance " type="text" onFocus={(e)=>e.target.type = 'date'} onBlur={(e)=>e.target.type = 'text'} disabled />
                                <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i aria-hidden={true} className="fa fa-calendar" />
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                          </Col> 
                        </Row>
                        <br/>
                        <Row>
                          <Col>
                            <Label> Pseudo :</Label>        
                            <InputGroup>
                              <Input placeholder="Pseudo" type="text"   defaultValue={ ownerDetails.pseudo } disabled/>
                              <InputGroupAddon addonType="append">
                              <InputGroupText>
                                  <i aria-hidden={true} className="fa fa-user-circle" />
                              </InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </Col> 
                          <Col>
                            <Label> Mot de Passe :</Label>                        
                            <InputGroup>
                                <Input placeholder="Mot de Passe " type="password" />
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
                        <Label> Options supplémentaires(Optionnel):</Label>  
                        <Input type='textarea' rows='4' placeholder='saisie des option supplémentaire'/>
                        </Col>  
                        </Row>
                        <br/>
                        <Row>
                        <Label> Options supplémentaires(Optionnel):</Label>
                        <Col style={{font:'20px librebaskerville'}}>
                        <strong><Icon icon="icon-park-outline:gps" width="30" height="30"/> GPS </strong> <input type={'checkbox'}/>&ensp;&ensp;
                        <strong><Icon icon="mdi:car-child-seat" width="30" height="30" /> Siège enfant </strong> <input type={'checkbox'}/>&ensp;&ensp;
                        <strong><Icon icon="icon-park-outline:baby-car-seat" width="30" height="30" /> Siège bébé </strong> <input type={'checkbox'}/>&ensp;&ensp;
                        <strong><Icon icon="icon-park-outline:booster-car-seat" width="30" height="30" /> Rehausseur </strong> <input type={'checkbox'}/>
                        </Col>  
                        </Row>
                        <br/>
                        <Row>
                          <Col>            
                          <Button block className="btn-round" color="success" type='submit' onClick={ reserver }>RESERVER</Button>                      </Col>
                          <Col>            
                            <Button block className="btn-round" color="secondary" type='submit' onClick={e=>setvuehome()}>ANNULER</Button>
                          </Col>                
                        </Row> 
                    </Form>
              ):(
                    <Form className="register-form" > 
                    <Row>
                      <Col>
                        <Label> Prénom : </Label>
                        <InputGroup>
                            <Input placeholder="saisie votre Prénom" type="text" disabled/>
                                <InputGroupText><i aria-hidden={true} className="fa fa-group" /></InputGroupText>
                        </InputGroup>
                      </Col>
                      <Col>
                        <Label> Nom :</Label>
                        <InputGroup>
                          <Input placeholder="saisie votre Nom" type="text"  disabled/>
                          <InputGroupAddon addonType="append">
                          <InputGroupText>
                              <i aria-hidden={true} className="fa fa-group" />
                          </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                      </Col>
                    </Row>
                    <br/>
                    <Row>
                      <Col>
                        <Label> Email :</Label>
                        <InputGroup>
                            <Input placeholder="Email" type="email"  disabled/>
                            <InputGroupAddon addonType="append">
                            <InputGroupText>
                                <i aria-hidden={true} className="fa fa-envelope-o" />
                            </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                      </Col>
                      <Col>
                        <Label> Telephone :</Label>
                        <InputGroup>
                            <Input placeholder="Téléphone" type="text" disabled />
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
                        <Label> CIN :</Label>
                        <InputGroup>
                            <Input placeholder="N° CIN" type="text"  disabled/>
                            <InputGroupAddon addonType="append">
                            <InputGroupText>
                                <i aria-hidden={true} className="fa fa-id-card-o" />
                            </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                      </Col>
                      <Col>
                        <Label> Date de Naissance :</Label>
                        <InputGroup>
                            <Input placeholder="Date de Naissance " type="text" onFocus={(e)=>e.target.type = 'date'} onBlur={(e)=>e.target.type = 'text'} disabled />
                            <InputGroupAddon addonType="append">
                            <InputGroupText>
                                <i aria-hidden={true} className="fa fa-calendar" />
                            </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                      </Col> 
                    </Row>
                    <br/>
                    <Row>
                      <Col>
                        <Label> Pseudo :</Label>        
                        <InputGroup>
                          <Input placeholder="Pseudo" type="text"    disabled/>
                          <InputGroupAddon addonType="append">
                          <InputGroupText>
                              <i aria-hidden={true} className="fa fa-user-circle" />
                          </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                      </Col> 
                      <Col>
                        <Label> Mot de Passe :</Label>                        
                        <InputGroup>
                            <Input placeholder="Mot de Passe " type="password" onChange={ e => setAuth(e.target.value) } />
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
                    <Label> Options supplémentaires(Optionnel):</Label>  
                    <Input type='textarea' rows='4' placeholder='saisie des option supplémentaire'/>
                    {erreur? <span style={{ color: "red" }}> { erreur.message } </span> : null}
                    </Col>  
                    </Row>
                    <br/>
                    <Row>
                    <Label> Options supplémentaires(Optionnel):</Label>
                    <Col style={{font:'20px librebaskerville'}}>
                    <strong><Icon icon="icon-park-outline:gps" width="30" height="30"/> GPS </strong> <input type={'checkbox'}/>&ensp;&ensp;
                    <strong><Icon icon="mdi:car-child-seat" width="30" height="30" /> Siège enfant </strong> <input type={'checkbox'}/>&ensp;&ensp;
                    <strong><Icon icon="icon-park-outline:baby-car-seat" width="30" height="30" /> Siège bébé </strong> <input type={'checkbox'}/>&ensp;&ensp;
                    <strong><Icon icon="icon-park-outline:booster-car-seat" width="30" height="30" /> Rehausseur </strong> <input type={'checkbox'}/>
                    </Col>  
                    </Row>
                    <br/>
                    <Row>
                      <Col>            
                      <Button block className="btn-round" color="success" type='submit' onClick={ reserver }>RESERVER</Button>                      </Col>
                      <Col>            
                        <Button block className="btn-round" color="secondary" type='submit' onClick={e=>setvuehome()}>ANNULER</Button>
                      </Col>                
                    </Row> 
                </Form>
              )}

            </CardBody>
          </Card>
        
        </Col>
        <Col>

          <Card style={{backgroundColor:'rgba(255,255,255,0.2)',width:'400px'}}>
            <CardHeader style={{backgroundColor:'#333333',color:'#ffff',padding: '16px',fontWeight:'bold'}}>RÉCAPITULATIF</CardHeader> 
            <CardBody>
              <br/>
                <Row>
                <Col lg='auto'>
                <div style={{margin:'-17px 0px 0px 20px',font:'30px librebaskerville'}}> <strong>{infocar.marque}</strong></div>
                <div style={{margin:'15px 20px',font:'17px librebaskerville'}}> Du&ensp;
                    { (new Date(infoRes.dateDep).getDate()<10?'0'+new Date(infoRes.dateDep).getDate():new Date(infoRes.dateDep).getDate()) +'/'+
                      (new Date(infoRes.dateDep).getMonth()+1<10?'0'+(new Date(infoRes.dateDep).getMonth()+1):(new Date(infoRes.dateDep).getMonth()+1)) +'/'+
                      new Date(infoRes.dateDep).getFullYear()
                    } à {infoRes.tempsDep} <br/>
                <strong>Prise :{infoRes.depart}</strong></div>
                <div style={{margin:'0px 0px 10px 20px',font:'17px librebaskerville'}}> Du&ensp;
                    { 
                       (new Date(infoRes.dateRet).getDate()<10?'0'+new Date(infoRes.dateRet).getDate():new Date(infoRes.dateRet).getDate())+'/'+
                      (new Date(infoRes.dateRet).getMonth()+1<10?'0'+(new Date(infoRes.dateRet).getMonth()+1):(new Date(infoRes.dateRet).getMonth()+1)) +'/'+
                      new Date(infoRes.dateRet).getFullYear() 
                    } à {infoRes.tempsRet}<br/>
                <strong>Remise : {infoRes.retour}</strong></div>
                <img src={infocar.image} alt='not found'style={{ float:'left' ,borderRadius: '10px',margin:'6px 20px 30px 6px',height:'250px',width:'350px'}}/> 
                <br/><br/>
                <div style={{margin:'30px 20px'}}> 
                <div style={{marginBottom:'20px',font:'20px librebaskerville'}} title='matricule de voiture'> 
                          <i className="fa fa-registered" aria-hidden="true"></i> {infocar.matricule} 
                          &ensp;&ensp;&ensp;<i className="fa fa-suitcase" aria-hidden="true"></i>&ensp;2 Valises
                      </div>
                      <div style={{marginBottom:'20px',font:'20px librebaskerville'}} title='Prix par Heure'>
                        <i className="fa fa-money" aria-hidden="true"></i>&ensp;{infocar.prix} DT/Heure
                        &ensp;&ensp;<i className="fa fa-snowflake-o" aria-hidden="true"></i>&ensp;climatisé 
                      </div>
                      <div style={{marginBottom:'20px',font:'20px librebaskerville'}} title='nombre de place'>
                        <i className="fa fa-users" aria-hidden="true"></i>&ensp;4 personnes &ensp;&ensp;&ensp; 
                        <Icon icon="ion:speedometer" />&ensp;100 Km/Heure 
                        </div>
                      <div style={{marginBottom:'20px',font:'20px librebaskerville'}} title='nombre de place'>
                        <Icon icon="mdi:car-door" />&ensp;4 portes 
                        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<Icon icon="tabler:manual-gearbox" /> Manuelle
                        </div>
                  </div>
                <div style={{font:'30px librebaskerville',margin:'0px -15px -20px -20px', background:'gray',padding:'10px',width:'400px',textAlign:'center'}}> Prix Total : {infoRes.prix} DT </div>
                  </Col>
                  </Row>
              </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
   
    </>
  )
}
