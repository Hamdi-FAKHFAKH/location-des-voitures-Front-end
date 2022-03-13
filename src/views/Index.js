import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import Cartvoiture from "components/Body/Cartvoiture";
import { Container, Row } from "reactstrap";
import {liste} from '../assets/data/listcar'
function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  
  return (
    <>
      <IndexNavbar />
   <IndexHeader/>
  <div className="main">
    <Container style={{marginTop:'40px'}}>
   <Row>
     {liste.map((l)=>
     <Cartvoiture nom={l.nom} prix={l.prix} score={l.score} desc = {l.desc} img={l.img} />
     )}
  </Row>
  </Container>
     </div>
   
    </>
  );
}

export default Index;
