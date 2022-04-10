import React from 'react'
import '../../assets/css/icons.css'
import { Button, Card, Col } from 'reactstrap'
// eslint-disable-next-line import/no-anonymous-default-export
export default function ({marque,prix,score,desc,img}) {
  return (   
                <Col style={{textAlign:'center', width: "350px"}}>
                <Card style={{backgroundColor:'ButtonFace', width: "350px"}}>
                    <img src={img} alt='no found' width={350} height={300}/>
                    <h5 style={{marginTop:'15px'}}><span style={{fontWeight:'bold',color:'#b19540' ,fontSize:'1.8em',}}>{prix}</span>/heure</h5>
                    <h6 style={{ paddingBottom:'20px' ,fontSize:'1em'}}>{marque} &emsp;
                    {[1,2,3,4,5].map((i)=>
                    i<=score?<span key={i} className="icon star hidden"></span>:<span key={i} className="icon star2 hidden"></span>)}
                    </h6><hr style={{borderTop: '3px solid #b19540',borderRadius:'5px',width:'300px',margin:'auto' ,marginBottom:'10px'}}></hr>
                    <p style={{borderTop:'1px solid marron',padding:'5px'}}>{desc}</p>
                <Button> Louer </Button>
                </Card>
                    </Col>
  )
}
