import React, { useState, useEffect } from 'react'
import { Button, Container, Row } from 'reactstrap'
import Cartvoiture from './Cartvoiture';

export default function Listeofcar({vue,setvue}) {

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

  const [ mesVoitures, setMesVoitures ] = useState([])
    const getMesVoitures = () => {
      console.log("getmesvoitures");
      const requestOptions = {
          method: 'Get',
          headers: { 
            'Content-Type': 'application/json', 
            'Accept': 'application/json',
            
          },
      };
      console.log(getCookie("userId"));
      console.log("getmesvoitures");
      fetch('http://localhost:3000/api/owner/myVoitures/'+getCookie("userId"), requestOptions)
      .then(response => response.json())
      .then( voitures => {
        console.log(voitures);
        setMesVoitures(voitures);
      })
      .catch(err => console.error(err));
    }
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });

  useEffect(()=> {
    getMesVoitures();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[vue])


  return (
    <div>
    <Container style={{marginTop:'40px',margin:'auto',maxWidth:'900px' , marginLeft:'60px'}}>
         <h2 style={{fontWeight:'bold',font:'50px serif'}}> Gérer les voitures </h2><br/>
    <Row>
    {
      mesVoitures? mesVoitures.map((l,index) => (
        <Cartvoiture key={`${l.matricule} ${index}`} marque={l.marque} prix={l.prix_par_heure} score={3} desc = {l.description} img={l.imageUrl} matricule={l.matricule} titre={'voir plus'}/>
      )) : null
      }
  </Row>
  <br/>
        <Button onClick={()=>setvue('vuedeformV')} style={{height:'50px',width:'50px'}} color="success"><span style={{fontSize:'20px',fontWeight:'bold'}}>+</span></Button><br/><br/>
  </Container></div>
  )
}
