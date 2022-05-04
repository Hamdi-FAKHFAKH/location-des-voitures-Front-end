import React,{useContext} from 'react'
import {Card, Col } from 'reactstrap';

export default function CarvoitureRes({infoRes}) {
  return (
    <Col style={{width: "350px"}}>
    <Card style={{backgroundColor:'ButtonFace', width: "350px"}}>
        <img src={infoRes.image} alt='no found' width={350} height={'220px'}  style={{height:'220px'}} />
        <div style={{textAlign:'center',marginTop:'20px',fontWeight:'800',fontSize:'1.2em',color:'#9C8456'}}> {infoRes.marque}</div>
        <div style={{margin:'20px 0px 0px 20px',font:'17px librebaskerville'}}> <strong style={{color:'#b19540'}}>
            Du :</strong>&ensp;
            { (new Date(infoRes.dateDep).getDate()<10?'0'+new Date(infoRes.dateDep).getDate():new Date(infoRes.dateDep).getDate()) +'/'+
                (new Date(infoRes.dateDep).getMonth()+1<10?'0'+(new Date(infoRes.dateDep).getMonth()+1):(new Date(infoRes.dateDep).getMonth()+1)) +'/'+
                new Date(infoRes.dateDep).getFullYear()
            } à {infoRes.tempsDep} <br/>
            <strong ><span style={{color:'#b19540'}}> Prise: </span> {infoRes.depart}</strong>
        </div>
        <div style={{margin:'10px 0px 0px 20px',font:'17px librebaskerville'}}><strong style={{color:'#b19540'}}>Du :</strong>&ensp;
            { 
                (new Date(infoRes.dateRet).getDate()<10?'0'+new Date(infoRes.dateRet).getDate():new Date(infoRes.dateRet).getDate())+'/'+
                (new Date(infoRes.dateRet).getMonth()+1<10?'0'+(new Date(infoRes.dateRet).getMonth()+1):(new Date(infoRes.dateRet).getMonth()+1)) +'/'+
                new Date(infoRes.dateRet).getFullYear() 
            } à {infoRes.tempsRet}<br/>
            <strong><span style={{color:'#b19540'}}>Prise :</span> {infoRes.retour}</strong>
        </div>
        <div style={{margin:'10px 0px 0px 20px',font:'17px librebaskerville'}}>
            <strong ><span style={{color:'#b19540'}}> Nb Heure : </span> {infoRes.nbheure}</strong>
        </div>
        <div style={{margin:'2px 0px 0px 20px',font:'17px librebaskerville'}}>
            <strong ><span style={{color:'#b19540'}}>Option: </span> {infoRes.option}</strong>
        </div>
       
        <div style={{width:'350px',font:'30px librebaskerville', background:'gray',padding:'10px',textAlign:'center',marginTop:'25px'}}>Prix Total : 100 DT</div>
    </Card>
        </Col>
  )
}
