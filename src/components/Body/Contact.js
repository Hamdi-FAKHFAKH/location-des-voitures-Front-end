import ContactHeader from 'components/Headers/ContactHeader'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import React,{ useState, useEffect } from 'react'
import '../../assets/css/filter.css'
import { Button, Col, Container, Input, Label, Row } from 'reactstrap';
import Footer from 'components/Footers/Footer';
export default function Contact() {
const [succes, setsucces] = useState(false);


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



/**************** is USER authentified **************/
const [ isUserAuth, setIsUserAuth ] = useState(true);
useEffect(() => {

  (!getCookie("userId") || !getCookie("token") ||
  getCookie("userId") === "null" || getCookie("token") === "null" ||
  getCookie("userId") === "undefined" || getCookie("token")=== "undefined")?
  setIsUserAuth(false): setIsUserAuth(true)  
},[])
/***************************************************/

async function sendForm(e){
  e.preventDefault();
  if( isUserAuth && Form !== {}) {
    const requestOptions = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + getCookie("token")
      },
      body: JSON.stringify(Form)
  };
  try{
    await fetch('http://localhost:3000/api/message/', requestOptions);
  } catch {
    console.log("error");
  }
  } else if( !isUserAuth && Form !== {}) {
    const requestOptions = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json',
      },
      body: JSON.stringify(Form)
  };
  try{
    let rep = await fetch('http://localhost:3000/api/message/postmessage', requestOptions);
    rep.status === 201 &&setsucces(true);
    console.log(rep.status);
    console.log(succes);
  } catch {
    console.log("error");
  }
}}

const [ Form, setForm ] = useState({})
function getInput(e){
  setForm({ ...Form, [e.target.name]: e.target.value })
}



  return (
    <>
    <div className='imageDeFond'></div>
    <div className='contenu' style={{backgroundColor:'rgba(255,255,255,0.6)'}}>
        <IndexNavbar/>
        <ContactHeader/>
        <Container>
        <p style={{marginTop:'100px' , width:'1000px'}}> 
        <h6>Quelle est votre occasion spéciale ? </h6>  
        <h2 style={{font:'50px librebaskerville serif',marginBottom:'100px'}}>Ne soyez pas timide, Nous sommes<br/> ici pour votre service,<br/>
             Allez partager avec nous vos messages </h2>
        </p>
        <Row>
            <Col lg={4}>
            <h4 style={{font:'30px librebaskerville',borderTop:'3px #b19540 solid', paddingTop:'20px',width:'300px',fontWeight:'bold'}}>Entrer en contact</h4><br/>
            <p style={{font:'15px cursive'}} >Envoyez-nous vos messages et nous <br/>vous répondrons dans les plus brefs délais</p><br/>
            <i className="fa fa-phone" aria-hidden="true" style={{color:'#b19540',fontSize:'20px'}}></i>&ensp;<span style={{font:'20px serif',fontWeight:'bold'}}>27-001-360 &ensp; 74-200-320 </span><br/><br/>
            <i className="fa fa-envelope-o" aria-hidden="true" style={{color:'#b19540',fontSize:'20px'}}></i>&ensp;<span style={{font:'20px serif',fontWeight:'bold'}}>Locationvoitures@info.com</span><br/><br/>
            <i className="fa fa-map-marker" aria-hidden="true" style={{color:'#b19540',fontSize:'20px'}}></i>&ensp;<span style={{font:'20px serif',fontWeight:'bold'}}>Rue ibn Khaldun, Cité Taffala,<br/>&ensp;&ensp; 4003 Sousse Tunisie, TN</span><br/><br/>
            </Col>
            <Col>
            <form>
            <h4 style={{font:'30px librebaskerville',borderTop:'3px #b19540 solid', paddingTop:'20px',width:'730px',fontWeight:'bold'}}>Contactez-nous</h4><br/>
           
            
            {
             isUserAuth? (
            <></>
             ) : (
            <>
             <Label for='nom' style={{fontSize:'15px',fontWeight:'bold'}}> Name<span style={{color:'red'}}>*</span></Label>
              <Row>
                <Col>
                <Input type='text' name='nom' id='nom' placeholder='Saisie votre Nom' onChange={ (e) => getInput(e) }></Input></Col>
                <Col><Input type='text' name='prenom' placeholder='Saisie votre Prénom' onChange={ (e) => getInput(e) }></Input></Col>
              </Row>
              <Label for='email' style={{fontSize:'15px',fontWeight:'bold' ,marginTop:'18px'}}> Email<span style={{color:'red'}}>*</span></Label>
              <Row>
                  <Col><Input type='email' name='email' id='email' placeholder='Saisie votre Email' onChange={ (e) => getInput(e) }></Input></Col>
              </Row> 
            </>
            )}
            
            <Label for='message' style={{fontSize:'15px',fontWeight:'bold' ,marginTop:'18px'}}> Message<span style={{color:'red'}}>*</span></Label>
           <Row>
               <Col>
               <Input type='textarea' rows='5' name='message' id='message' row='5' placeholder='Saisie votre Message' onChange={ (e) => getInput(e) }></Input>
               </Col>
           </Row>
           <Row><Col>
           <br/>
           <Button type='submit' onClick={ (e) => sendForm(e) }> Envoyer </Button></Col>
           {succes&&<span style={{color:'green',fontWeight:'bold'}}> message envoyer avec succés </span>}
           </Row>
           </form>
            </Col>
        </Row>
        <h4 style={{font:'20px serif ' , borderTop:'3px #b19540 solid', paddingTop:'20px', marginTop:'70px'}}>Louer une voiture tout de suite !</h4>
        <h1 style={{fontWeight:'bold',textAlign:'center' , marginBottom:'50px' , fontSize:"115px" }} > 74 - 200 - 320 </h1>
        
        </Container>
        <Footer/>
    </div>
    
    </>
  )
}