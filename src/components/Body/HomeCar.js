import { Carcontext } from 'context/Carcontext';
import React,{useContext} from 'react'
import ReactDatetimeClass from 'react-datetime'

import { Button, Col, Container, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap'
import SectionCarousel from 'views/index-sections/SectionCarousel';
import { PaginatedItems } from './PaginatedItems'

export default function HomeCar() {
  const [checked, setChecked] = React.useState(false);
    const {setinfoRes,infoRes,setVoitures,vuehome} = useContext(Carcontext);

  const getVoitures = () => {
    console.log("lenaaaa");
    const requestOptions = {
        method: 'Get',
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json'
        },
    };
    console.log("recherche:  ",infoRes.dateDep +' ' +infoRes.tempsDep +'/'+infoRes.dateRet + ' ' + infoRes.tempsRet);
    fetch('http://localhost:3000/api/voiture/'+infoRes.dateDep +" " + infoRes.tempsDep +'/'+infoRes.dateRet+" " + infoRes.tempsRet , requestOptions)
    .then(response => response.json())
    .then(data => {
        console.log('http://localhost:3000/api/voiture/'+infoRes.dateDep +" " + infoRes.tempsDep +'/'+infoRes.dateRet+" " + infoRes.tempsRet);
        setVoitures(data) 
    })
    .catch(err => {console.error(err)})
    }
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  //***************************************************use effect ********************************************** */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(()=>{getVoitures()},[infoRes,vuehome])
  const SetNbHeure = e =>{
    var hstot = parseInt(infoRes.hdep) + parseInt(e.target.value); 
    var date = infoRes.dateDep;
    if (hstot > 23 ){ 
      hstot = hstot - 24 ;
      const day = parseInt(infoRes.dateDep.substr(0,2)) + 1 ;
      date = date.substr(3,8);
      date = `${day}/${date}`
      console.log(day);
      console.log(infoRes.dateRet)
    }
    setinfoRes({...infoRes,nbheure:e.target.value,tempsRet:`${hstot}:${infoRes.mindep}`,dateRet:date})
 
  }
    
  const setDateDep = (e,h) =>{
    var day = e.format('DD');
    var houre = e.format('HH');
    const min = e.format('mm');
    houre = parseInt(houre) + parseInt(h)
    if(houre>23){
      day = parseInt(day) + 1;
      houre = houre - 24 ;
    }
    let month = parseInt(e.format('MM'));
    let year = e.format('YYYY');
    setinfoRes({...infoRes,dateDep:e.format("MM-DD-YYYY"),tempsDep:e.format("HH:mm"),hdep:e.format("HH"),mindep:e.format("mm"),dateRet:`${month<10?`0${month}`:`${month}`}-${day}-${year}`,tempsRet:`${houre}:${min}`});
    
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
    <Input type={'select'} id='select' defaultValue={'Aéroport Tunis Carthage'} style={{width:'350px',marginBottom:'5px'}} onChange={e=>{setinfoRes({...infoRes,depart:e.target.value,retour:e.target.value})}}>
    <optgroup label="Aéroport">
									
                  <option value="Aéroport Djerba">Aéroport Djerba</option>
                
                  <option value="Aéroport Enfidha">Aéroport Enfidha</option>
                
                  <option value="Aéroport Monastir">Aéroport Monastir</option>
                
                  <option value="Aéroport Tunis Carthage" >Aéroport Tunis Carthage</option>

                  <option value="Aéroport Sfax">Aéroport Sfax </option>
                
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
    {checked&&<><label > Agence de restitution </label>
    <Input type={'select'} id='select' style={{width:'350px',marginBottom:'5px'}} defaultValue={'ATunis'} onChange={e=>{setinfoRes({...infoRes,retour:e.target.value});console.log(infoRes)}}>
    <optgroup label="Aéroport">
									
                  <option value="Aéroport Djerba">Aéroport Djerba</option>
                
                  <option value="Aéroport Enfidha">Aéroport Enfidha</option>
                
                  <option value="Aéroport Monastir">Aéroport Monastir</option>
                
                  <option value="Aéroport Tunis Carthage">Aéroport Tunis Carthage</option>

                  <option value="Aéroport Sfax">Aéroport Sfax </option>
                
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
    </Input></>}
    <input type='checkbox'  defaultChecked={checked} onChange={() => setChecked(!checked)}/> Agence de restitution différente
    </Col>
    <Col>
   
    <label> Date de retrait </label>
    <FormGroup style={{width:'220px'}}>
                    <InputGroup className="date" id="datetimepicker">
                      <ReactDatetimeClass
                       initialValue={ `${new Date(infoRes.dateDep).getDate()<10?'0'+new Date(infoRes.dateDep).getDate():new Date(infoRes.dateDep).getDate()}-${(new Date(infoRes.dateDep).getMonth()+1<10?'0'+(new Date(infoRes.dateDep).getMonth()+1):(new Date(infoRes.dateDep).getMonth()+1))}-${new Date(infoRes.dateDep).getFullYear()} ${infoRes.tempsDep}`}
                        inputProps={{
                          placeholder: "Date de retrait",
                        }}

                        dateFormat={'DD-MM-YYYY'}
                        timeFormat={'HH:mm'}
                        onChange={e=>{setDateDep(e,infoRes.nbheure)}}
                       
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
    <label> Nombre de Heure </label>
    <FormGroup style={{width:'220px'}}>
    <InputGroup className="date" id="datetimepicker">
      <Input type='number' placeholder='Nombre de heure' min={1} defaultValue={infoRes.nbheure} onChange={e=>SetNbHeure(e)} />
      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <span className="glyphicon glyphicon-calendar">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>
                          </span>
                        </InputGroupText>
                      </InputGroupAddon>
      </InputGroup>
    </FormGroup>
    </Col>
    <Col>
    <Button type='submit'  color="success"  style={{marginTop:'30px'}} onClick={getVoitures}> Recherche </Button>
    </Col>
    </Row>
    </div>
    </div>
    </Row>
    </Container>
    
    <PaginatedItems itemsPerPage={6}/><br/><br/><br/><br/>
    <p style={{textAlign:'center', fontSize:'1.4rem',fontWeight:'700', color:'black'}}>PROMOTION</p>
    <p style={{textAlign:'center', fontSize:'1.3em',fontWeight:'600', color:'rgb(177, 149, 64)' , marginBottom:'10px'}}>Promotion location de voiture en Tunisie</p>
    <div style={{borderTop:'2px solid ', width:'150px' , margin:'auto' , marginBottom:'-20px'}}> </div>
    <h2 style={{textAlign:'center',  font:'15px cursive'}}> Avec TUNISIA RENT CAR, effectuez une location voiture tunisie pas cher.Les meilleures promos de location auto tunisie.<br/>
      Réservez votre voiture à l'aéroport en 3 clics.</h2><br/>
    <SectionCarousel/>
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
