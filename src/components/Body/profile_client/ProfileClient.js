/* eslint-disable eqeqeq */
import ProfileNavbar from 'components/Navbars/ProfileNavbar'
import CarcontextProvider from 'context/Carcontext'
import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import photo1 from '../../../assets/img/1.jpg'
import ListeOfCarClient from './ListeOfCarClient'
import Infoclient from './Infoclient'

export default function ProfileClient() {
    const [vue,setvue] = React.useState('vue1');
    const [imgUpload,setimgUpload]= React.useState(photo1);
    const hiddenFileInput = React.useRef(null);
    const vue3 = React.useRef(null);
    const vue4 = React.useRef(null);
    const handleClick1 = () => { 
      hiddenFileInput.current.click(); 
    } ;
    /***************************************************************** */
    const getBase641 = (e) => {
      var file = e.target.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {  
          setimgUpload(reader.result);
          /** ******* console ********** */
          console.log(reader.result);     
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      }
    }
    // const onclickf = ()=>{
    //   vue == 'vue1' ? (vue1.current.style.background = "red"):(vue1.current.style.background= "black");

    // }
  return (
 <>
    <div className='imageDeFond'></div>

    <div className='contenu' style={{backgroundColor:'rgba(255,255,255,0.8)'}}>
        <ProfileNavbar/>
        <br/><br/><br/>
        <Row>
            <Col lg={3} style={{backgroundColor:'rgbA(120,120,120,0.8)', minHeight:'900px'}}>
            <img src={imgUpload} alt='not found' width={200} height={200} style={{borderRadius:'50%',margin:'50px 80px',cursor: 'pointer'}} title='modifier le photo' onClick={handleClick1} multiple accept="image/*"  />
            <input type="file" ref={hiddenFileInput} onChange ={(e)=>getBase641(e)} style={{display: 'none'}}/>
            <Button style={{width:'370px'}} onClick={e=>{setvue('vue1')}} ref={vue3}> Consulter Profile </Button>
            <Button style={{marginTop:'20px',width:'370px'}} onClick={e=>{setvue('vue2')}} ref={vue4}>Consulter Voitures</Button>
            </Col>
            
            <Col>
            <h1 style={{textAlign:'center',fontWeight:'bold'}}>Bienvenue dans votre profil</h1>
            <CarcontextProvider>
            {vue==='vue2'?<ListeOfCarClient/>:<Infoclient/>}
            </CarcontextProvider>
          
            </Col>
        </Row>
        
    </div>
    </>
  );
}
