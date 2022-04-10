import ContactHeader from 'components/Headers/ContactHeader'
// import ServicePageHeader from 'components/Headers/ServicePageHeader'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function Contact() {
  return (
    <div>
        <IndexNavbar/>
        <ContactHeader/>
        <Container>
        <p style={{marginTop:'100px' , width:'1000px'}}> 
        <h6>Quelle est votre occasion spéciale ? </h6>  
        <h2 style={{font:'50px librebaskerville serif',marginBottom:'100px'}}>Ne soyez pas timide, Nous sommes<br/> ici pour votre service,<br/>
             Allez partager avec nous vos messages </h2>
        </p>
        <Row>
            <Col>
            <h4 style={{font:'30px librebaskerville'}}>Entrer en contact</h4><br/>
            <p style={{font:'15px cursive'}} >Envoyez-nous vos messages et nous <br/>vous répondrons dans les plus brefs délais</p><br/>
            <i class="fa fa-phone" aria-hidden="true" style={{color:'#b19540',fontSize:'20px'}}></i>&ensp;<span style={{font:'20px serif',fontWeight:'bold'}}>27-001-360</span><br/><br/>
            <i class="fa fa-envelope-o" aria-hidden="true" style={{color:'#b19540',fontSize:'20px'}}></i>&ensp;<span style={{font:'20px serif',fontWeight:'bold'}}>Locationvoitures@info.com</span><br/><br/>
            <i class="fa fa-map-marker" aria-hidden="true" style={{color:'#b19540',fontSize:'20px'}}></i>&ensp;<span style={{font:'20px serif',fontWeight:'bold'}}>Rue ibn Khaldun, Cité Taffala,<br/>&ensp;&ensp; 4003 Sousse Tunisie, TN</span><br/><br/>
            </Col>
        </Row>

        </Container>


    </div>
  )
}
