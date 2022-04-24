import ContactHeader from 'components/Headers/ContactHeader'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import ProfileNavbar from 'components/Navbars/ProfileNavbar'
import CarcontextProvider from 'context/Carcontext'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Row } from 'reactstrap'
import photo1 from '../../assets/img/1.jpg'
import GestionVoitures from './GestionVoitures'
import InfoSociété from './InfoSociété'

export default function ProfileSociété() {
    const [vue,setvue] = React.useState('vue1');
    const [img,setimg] = React.useState(photo1);
    const hiddenFileInput = React.useRef(null);
    const handleClick = event => { 
      hiddenFileInput.current.click(); 
    } ;
    const handleChange = event => { 
      const fileUploaded = event.target.files[0];
      //console.log(URL.createObjectURL(this.fileUploaded));
      console.log(fileUploaded.webkitRelativePath)
      setimg(fileUploaded);
    } 
  return (
    <>
    <div className='imageDeFond'></div>

    <div className='contenu' style={{backgroundColor:'rgba(255,255,255,0.8)'}}>
        <ProfileNavbar/>
        <br/><br/><br/>
        <Row>
            <Col lg={3} style={{backgroundColor:'rgbA(120,120,120,0.8)', minHeight:'900px'}}>
            <img src={img} alt='not found' width={200} height={200} style={{borderRadius:'50%',margin:'50px 80px',cursor: 'pointer'}} title='modifier le photo' onClick={handleClick} multiple accept="image/*"  />
            <input type="file" ref={hiddenFileInput} onChange ={handleChange} style={{display: 'none'}}/>
            <Button style={{width:'370px'}} onClick={e=>setvue('vue1')}> Consulter Profile </Button>
            <Button style={{marginTop:'20px',width:'370px'}} onClick={e=>setvue('vue2')}>Consulter Voitures</Button>
            </Col>
            
            <Col>
            <h1 style={{textAlign:'center',fontWeight:'bold'}}>Bienvenue dans votre profil</h1>

            <CarcontextProvider>
            {vue==='vue1'?<InfoSociété/>:<GestionVoitures/>}
            </CarcontextProvider>
            </Col>
        </Row>
        
    </div>
    </>
  )
}
