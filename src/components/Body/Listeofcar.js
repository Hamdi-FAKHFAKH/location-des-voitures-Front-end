
import React from 'react'
import { Container, Row } from 'reactstrap'
import {liste} from '../../assets/data/listcar'
import CartVoitureUp from './CartVoitureUp'

export default function Listeofcar() {
  return (
    <div>
         <Container style={{marginTop:'40px',margin:'auto',maxWidth:'900px' , marginLeft:'60px'}}>
         <h2 style={{fontWeight:'bold',font:'50px serif'}}> Gérer les voitures </h2><br/>
    <Row>
    {
      liste.map((l,index) => (
          <CartVoitureUp key={l.nom+index} nom={l.nom} prix={l.prix} score={l.score} desc = {l.desc} img={l.img} />
      ))}
  </Row>
  </Container></div>
  )
}
