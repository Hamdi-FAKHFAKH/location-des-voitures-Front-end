/* eslint-disable eqeqeq */
import React,{ useContext } from 'react'
import '../../assets/css/icons.css'
import { Button, Card, Col } from 'reactstrap'
import { Carcontext } from 'context/Carcontext';
// eslint-disable-next-line import/no-anonymous-default-export
export default function ({marque,prix,score,desc,img,matricule,titre,id}) {
  const{setinfocar,setvuehome,setvueprofileSociété} = useContext(Carcontext);
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
  return (   
   <Col style={{textAlign:'center', width: "350px"}}>
                <Card style={{backgroundColor:'ButtonFace', width: "350px" , height:'430px'}}>
                    <img src={img} alt='no found' width={350} height={'220px'}  style={{height:'220px'}} />
                    <h5 style={{marginTop:'15px'}}><span style={{fontWeight:'bold',color:'#b19540' ,fontSize:'1.8em',}}>{prix}</span>/heure</h5>
                    <h6 style={{ paddingBottom:'20px' ,fontSize:'1em'}}>{marque} &emsp;
                    {[1,2,3,4,5].map((i)=>
                    i<=score?<span key={i} className="icon star hidden"></span>:<span key={i} className="icon star2 hidden"></span>)}
                    </h6><hr style={{borderTop: '3px solid #b19540',borderRadius:'5px',width:'300px',margin:'auto' ,marginBottom:'10px'}}></hr>
                    <p style={{borderTop:'1px solid marron',padding:'5px'}}>{desc}</p>
                    
                    <input type='hidden' name='nom' value={marque}/>
                    <input type='hidden' name='prix' value={prix}/>
                    <input type='hidden' name='score' value={score}/>
                    <input type='hidden' name='desc' value={desc}/>
                    <input type='hidden' name='img' value={img}/>
                    <Button style={{width:'350px'}} onClick={e =>{setinfocar({matricule:matricule,prix:prix,image:img,marque:marque,id:id,desc:desc});setvuehome();getCookie('token') ==''&& (window.location.href = "/connexion") ;titre == 'voir plus' &&setvueprofileSociété('vueupdateV')}} > {titre} </Button>
                </Card>
                    </Col>
  )
}
