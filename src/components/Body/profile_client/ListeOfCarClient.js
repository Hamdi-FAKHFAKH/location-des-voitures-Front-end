import { Carcontext } from 'context/Carcontext';
import React, { useState, useEffect ,useContext} from 'react'
import { Container, Row } from 'reactstrap'
import CarvoitureRes from './CarvoitureRes';

export default function ListeOfCarClient() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
   // const [ mesVoitures, setMesVoitures ] = useState([]);
  const {infocar,infoRes} = useContext (Carcontext);
  const infoReservation = {...infoRes,...infocar,image:'https://www.largus.fr/images/images/x6-restylage-illustration-avg.jpg?width=612&quality=80',marque:'CITREON C4 2ND GENERATION',option:' SB,R'}
  console.log('info de Res',infoReservation);
    /************************************************************************************** */
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
  /*********************************************************************************************************** */
    const getMesVoitures = () => {
       
      }
  /************************************************************************************************************* */
  return (
    <div>
    <Container style={{marginTop:'40px',margin:'auto',maxWidth:'900px' , marginLeft:'60px'}}>
         <h2 style={{fontWeight:'bold',font:'50px serif'}}>Mes voitures Réservée </h2><br/>
    <Row>
    { //key={`${infoRes.matricule}${index}`}
      //mesVoitures? mesVoitures.map((l,index) => (
        <CarvoitureRes infoRes={infoReservation}/>
      //)) : null
      }
  </Row>
  <br/>
  </Container></div>
  )
}
