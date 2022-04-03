import Footer from 'components/Footers/Footer'
import ServicePageHeader from 'components/Headers/ServicePageHeader'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function Service() {
  return (
      
    <div style={{backgroundColor:'#C9D6DF'}}>
      <IndexNavbar/>
      <ServicePageHeader/>
    <Container >
    <h1 className='Header 1' style={{marginTop:'100px'}}>
     Notre service
    <div className='small' style={{color:'#b19540',fontWeight:'bold'}}>Nous apprécions le temps et la qualité du voyage pour votre confort</div></h1>
    <br/>

    <Row style={{marginTop:'100px',padding:'50px 0 '}}>
        <Col lg='4'>
         <h6 style={{fontSize:'20px',borderTop:'3px solid #b19540'}}><br/>Les Soirées</h6>
        </Col>
        <Col>
        <p style={{fontSize:'20px',borderTop:'3px solid #b19540',fontWeight:'bold'}}><br/>Les meilleures voitures si vous voudriez à éblouir vos amis</p>
        <p style={{fontSize:'20px' ,fontStyle:'oblique'}}>nous offrons la meilleure qualité de voitures pour votre confort et de vous porté à votre soirée à l'heure.</p>
        </Col>
    </Row>
    <Row style={{padding:'50px 0 '}}>
        <Col lg='4'>
         <h6 style={{fontSize:'20px',borderTop:'3px solid #b19540'}}><br/>Les Mariage</h6>
        </Col>
        <Col>
        <p style={{fontSize:'20px',borderTop:'3px solid #b19540',fontWeight:'bold'}}><br/>Si vous planifiez un mariage, tu a dans le bon endroit </p>
        <p style={{fontSize:'20px' ,fontStyle:'oblique'}}>Si vous planifiez un mariage et vous vouloir réserver une émerveillant voiture en moindre cout ,c'est l'endroit la plus mieux </p>
        </Col>
    </Row>
    <Row style={{padding:'50px 0 '}}>
        <Col lg='4'>
         <h6 style={{fontSize:'20px',borderTop:'3px solid #b19540'}}><br/>l' anniversaire</h6>
        </Col>
        <Col>
        <p style={{fontSize:'20px',borderTop:'3px solid #b19540',fontWeight:'bold'}}><br/>Pour les jours particuliers, surprenez quelqu'un qui vous est cher. </p>
        <p style={{fontSize:'20px' ,fontStyle:'oblique'}}>Pour les jours spéciaux où vous voulez surprendre quelqu'un qui vous est cher, vous pouvez choisir l'une de nos merveilleuses voitures pour l'emmener à sa fête </p>
        </Col>
    </Row>
    <Row style={{padding:'50px 0 '}}>
        <Col lg='4'>
         <h6 style={{fontSize:'20px',borderTop:'3px solid #b19540'}}><br/>Transferts aéroport</h6>
        </Col>
        <Col>
        <p style={{fontSize:'20px',borderTop:'3px solid #b19540',fontWeight:'bold'}}><br/>Nous vous assure un transfert a l'aéroport rapidement dans une voiture confort </p>
        <p style={{fontSize:'20px' ,fontStyle:'oblique'}}>Si vous avez besoin d'un transfert vers  l'aéroport et vous avez plusieurs bagage et vous avez besoin d'un voiture confort nous vous offre multiple choix de voiture qui satisfaire votre besoin</p>
        </Col>
    </Row>
    <Row style={{padding:'50px 0 '}}>
        <Col lg='4'>
         <h6 style={{fontSize:'20px',borderTop:'3px solid #b19540'}}><br/>Transferts des Colis </h6>
        </Col>
        <Col>
        <p style={{fontSize:'20px',borderTop:'3px solid #b19540',fontWeight:'bold'}}><br/>Nous vous assure un transfert des colis de façon sécuriser tous en respectant le temps d'arrive </p>
        <p style={{fontSize:'20px' ,fontStyle:'oblique'}}>si vous avez besoin de transférer vos colis vers une autre ville ou même dans votre ville tout en respectant les termes de sécurité et rapidité vous est dans le meilleur endroit</p>
        </Col>
    </Row>
    <h1 style={{borderBottom:'2px solid rgba(0,0,0,0.3)', paddingBottom:'15px' , marginBottom:'30px'}}>Avis Clients</h1>
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
    </Container>
    <br/><br/><br/>
    <Footer/>
    </div>
  )
}
