import React from 'react'
import ReactDatetimeClass from 'react-datetime'
import { Button, Col, Container, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap'
import { PaginatedItems } from './PaginatedItems'

export default function HomeCar() {
  const [checked, setChecked] = React.useState(false);
  function getCurrentDate(separator='/',houre=0){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    var hours = newDate.getHours()+houre;
    var minutes = newDate.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    
    return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year} ${strTime}`
    }
  return ( 
    <>
    <br/>
    <Container>
     
    <Row style={{borderRadius:'15px',backgroundColor:'rgba(255,255,255,0.8)'}}>
    <div style={{margin:'20px' ,background:'rgba(0,0,0,0.1)',borderRadius:'15px', width:'1100px'}}>
    <div style={{margin:'10px'}}>
    <Row>
    <Col>
    <label htmlFor={'select'}> Agence de prise en charge </label>
    <Input type={'select'} id='select' defaultValue={'ATunis'} style={{width:'350px',marginBottom:'5px'}}>
    <optgroup label="Aéroport">
									
                  <option value="ADjerba">Aéroport Djerba</option>
                
                  <option value="AEnfidha">Aéroport Enfidha</option>
                
                  <option value="AMonastir">Aéroport Monastir</option>
                
                  <option value="ATunis" >Aéroport Tunis Carthage</option>

                  <option value="ASfax">Aéroport Sfax </option>
                
    </optgroup>
    <optgroup label="Centre ville">
									
										<option value="Djerba">Djerba</option>
									
										<option value="Hammamet">Hammamet</option>
									
										<option value="La marsa">La marsa</option>
									
										<option value="Monastir">Monastir</option>
									
										<option value="Nabeul">Nabeul</option>
									
										<option value="Sousse">Sousse</option>
									
										<option value="Tozeur">Tozeur</option>
									
										<option value="Tunis">Tunis</option>
                    <option value="Sfax">Sfax</option>
									
		</optgroup>
    </Input>
    {checked&&<><label for={'select'}> Agence de restitution </label>
    <Input type={'select'} id='select' style={{width:'350px',marginBottom:'5px'}}>
    <optgroup label="Aéroport">
									
                  <option value="5">Aéroport Djerba</option>
                
                  <option value="2">Aéroport Enfidha</option>
                
                  <option value="3">Aéroport Monastir</option>
                
                  <option value="1" selected="">Aéroport Tunis Carthage</option>
                
    </optgroup>
    <optgroup label="Centre ville">
									
										<option value="21">Djerba</option>
									
										<option value="19">Hammamet</option>
									
										<option value="25">La marsa</option>
									
										<option value="24">Monastir</option>
									
										<option value="18">Nabeul</option>
									
										<option value="20">Sousse</option>
									
										<option value="22">Tozeur</option>
									
										<option value="17">Tunis</option>
									
		</optgroup>
    </Input></>}
    <input type='checkbox'  defaultChecked={checked} onChange={() => setChecked(!checked)}/> Agence de restitution différente
    </Col>
    <Col>
   
    <label> Date de retrait </label>
    <FormGroup style={{width:'220px'}}>
                    <InputGroup className="date" id="datetimepicker">
                      <ReactDatetimeClass
                       initialValue={getCurrentDate('/',1)}
                        inputProps={{
                          placeholder: "Date de retrait",
                        }}
                        dateFormat={'DD/MM/YYYY'}
                        
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <span className="glyphicon glyphicon-calendar">
                            <i aria-hidden={true} className="fa fa-calendar" />
                          </span>
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
    </FormGroup>
    </Col>
    <Col>
    <label> Date de retour </label>
    <FormGroup style={{width:'220px'}}>
                    <InputGroup className="date" id="datetimepicker">
                      <ReactDatetimeClass
                        initialValue={getCurrentDate('/',2)}
                        inputProps={{
                          placeholder: "Date de retour",
                        }}
                        dateFormat={'DD/MM/YYYY'}
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <span className="glyphicon glyphicon-calendar">
                            <i aria-hidden={true} className="fa fa-calendar" />
                          </span>
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
    </FormGroup>
    </Col>
    <Col>
    <Button type='submit'  color="success"  style={{marginTop:'30px'}}> Recherche </Button>
    </Col>
    </Row>
    </div>
    </div>
    </Row>
    </Container>
    <PaginatedItems itemsPerPage={6}/><br/><br/>
    <Container>
    <h1 style={{paddingBottom:'15px' , marginBottom:'40px', font:'30px cursive'}}>Avis Clients</h1>
      <Row>
        <Col>
        <h5 style={{fontSize:'20px'}}><img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("assets/img/saber.jpg").default}
                    width="100"
                  />      Saber Rebai <br/></h5>
         un site magnifique et surtout la bonne organisation, et la bonne qualité de ses services Je suis un fan de ce site.
        </Col>
        <Col>
        <h5 style={{fontSize:'20px'}}><img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("assets/img/faces/kaci-baum-2.jpg").default}
                    width="100"
                  />      Amal Sassi <br/></h5>
                  
                  vraiment un site magique Je remercie toute l'équipe qui a participé à cette réussite.
        </Col>
        <Col>
        <h5 style={{fontSize:'20px'}}><img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("assets/img/balti.jpg").default}
                    width="100"
                  />      Mohamed Salih Balti <br/></h5>
         un site magnifique et surtout la bonne organisation, et la bonne qualité de ses services Je suis un fan de ce site.
        </Col>
      </Row>
      <br/><br/>
      <Row>
        <Col>
        <p style={{font:'30px cursive'}} >Contact</p><br/>
        <i className="fa fa-phone" aria-hidden="true" style={{color:'#b19540',fontSize:'20px'}}></i>&ensp;<span style={{font:'20px serif',fontWeight:'bold'}}>27-001-360 &ensp; 74-200-320 </span><br/><br/>
        <i className="fa fa-envelope-o" aria-hidden="true" style={{color:'#b19540',fontSize:'20px'}}></i>&ensp;<span style={{font:'20px serif',fontWeight:'bold'}}>Locationvoitures@info.com</span><br/><br/>
        <i className="fa fa-map-marker" aria-hidden="true" style={{color:'#b19540',fontSize:'20px'}}></i>&ensp;<span style={{font:'20px serif',fontWeight:'bold'}}>Rue ibn Khaldun, Cité Taffala,<br/>&ensp;&ensp; 4003 Sousse Tunisie, TN</span><br/><br/>
        </Col>
        <Col>
        <p style={{font:'30px cursive'}} >Services</p><br/>
        <ul>
          <li style={{font:'20px serif',fontWeight:'bold',marginBottom:'10px'}} > louer voiture pour Les Soirées</li>
          <li style={{font:'20px serif',fontWeight:'bold',marginBottom:'10px'}} > louer voiture pour Les Mariage</li>
          <li style={{font:'20px serif',fontWeight:'bold',marginBottom:'10px'}} > louer voiture pour Les anniversaire</li>
          <li style={{font:'20px serif',fontWeight:'bold',marginBottom:'10px'}} > louer voiture pour Les transfert aéroport</li>
        </ul>
        </Col>
      </Row>
      <h4 style={{font:'20px serif ' , borderTop:'3px #b19540 solid', paddingTop:'20px', marginTop:'70px'}}>Louer une voiture tout de suite !</h4>
          <h1 style={{fontWeight:'bold',textAlign:'center' , marginBottom:'50px' , fontSize:"115px" }} > 74 - 200 - 320 </h1>
      </Container>
      </>
  )
}
