
import React, { useState } from 'react'
import { Container, Row } from 'reactstrap'
import {liste} from '../../assets/data/listcar'
import CartVoitureUp from './CartVoitureUp'

export default function Listeofcar() {

  const [ voiture, setVoitures ] = useState({});

  const getVoitures = () => {
    const requestOptions = {
        method: 'Get',
        headers: { 
          // 'Authorization': Json.string
          'Content-Type': 'application/json', 
          'Accept': 'application/json'
        }
    };

    fetch('http://localhost:3000/api/voiture/mesVoitures', requestOptions)
    .then(response => response.json())
    .then(data => {
        setVoitures(data)
        // store.dispatch( signIn() )
        // console.log("store: ",store.getState())
        // setToken(data.token);
        // setUserId(data.clientId);
    })
    .catch(err => console.error(err));
    }

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
