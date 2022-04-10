import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import Cartvoiture from "components/Body/Cartvoiture";
import { Container, Row } from "reactstrap";
// import {liste} from '../assets/data/listcar';
import { useEffect, useState } from "react";


function Index() {
  const [ voitures, setVoitures ] = useState(null);

  const getVoitures = () => {
    const requestOptions = {
        method: 'Get',
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json'
        },
    };

    fetch('http://localhost:3000/api/voiture/', requestOptions)
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
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });

  useEffect(() => {
    getVoitures();
  }, [voitures]);

  return (
    <>
      <IndexNavbar />
   <IndexHeader/>
  <div className="main">
    <Container style={{marginTop:'40px'}}>
   <Row>
     {
       voitures ?
     voitures.map((l, index)=>
     <Cartvoiture key={`${voitures.matricule} ${index}`} marque={l.marque} prix={l.prix_par_heure} score={l.color} desc = {l.desc} img={l.imageUrl} />
     ) : null
    }
  </Row>
  </Container>
     </div>
   
    </>
  );
}

export default Index;
