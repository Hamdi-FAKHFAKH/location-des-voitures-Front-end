import ContactHeader from 'components/Headers/ContactHeader'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import React from 'react'
import '../../assets/css/filter.css'
import { Button, Col, Container, Input, Label, Row } from 'reactstrap';
import Footer from 'components/Footers/Footer';
export default function Contact() {
    const ref = React.useRef(null);
const [map, setMap] = React.useState();

React.useEffect(() => {
  if (ref.current && !map) {
    setMap(new window.google.maps.Map(ref.current, {}));
  }
}, [ref, map]);

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
            <i class="fa fa-phone" aria-hidden="true" style={{color:'#b19540',fontSize:'20px'}}></i>&ensp;<span style={{font:'20px serif',fontWeight:'bold'}}>27-001-360 &ensp; 74-200-320 </span><br/><br/>
            <i class="fa fa-envelope-o" aria-hidden="true" style={{color:'#b19540',fontSize:'20px'}}></i>&ensp;<span style={{font:'20px serif',fontWeight:'bold'}}>Locationvoitures@info.com</span><br/><br/>
            <i class="fa fa-map-marker" aria-hidden="true" style={{color:'#b19540',fontSize:'20px'}}></i>&ensp;<span style={{font:'20px serif',fontWeight:'bold'}}>Rue ibn Khaldun, Cité Taffala,<br/>&ensp;&ensp; 4003 Sousse Tunisie, TN</span><br/><br/>
            </Col>
            <Col>
            <form>
            <h4 style={{font:'30px librebaskerville',borderTop:'3px #b19540 solid', paddingTop:'20px',width:'730px',fontWeight:'bold'}}>Contactez-nous</h4><br/>
            <Label for='nom' style={{fontSize:'15px',fontWeight:'bold'}}> Name<span style={{color:'red'}}>*</span></Label>
            <Row>
                <Col>
                <Input type='text' name='nom' id='nom' placeholder='Saisie votre Nom'></Input></Col>
                <Col><Input type='text' name='prenom' placeholder='Saisie votre Prénom'></Input></Col>
            </Row>
            <Label for='email' style={{fontSize:'15px',fontWeight:'bold' ,marginTop:'18px'}}> Email<span style={{color:'red'}}>*</span></Label>
            <Row>
                <Col><Input type='email' name='email' id='email' placeholder='Saisie votre Email'></Input></Col>
            </Row>
            <Label for='email' style={{fontSize:'15px',fontWeight:'bold' ,marginTop:'18px'}}> Message<span style={{color:'red'}}>*</span></Label>
           <Row>
               <Col>
               <Input type='textarea' name='email' id='email' rows='5' placeholder='Saisie votre Message'></Input>
               </Col>
           </Row>
           <Row><Col>
           <br/>
           <Button type='submit'> Envoyer </Button></Col>
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
