/* eslint-disable eqeqeq */
import ProfileNavbar from 'components/Navbars/ProfileNavbar'
import CarcontextProvider from 'context/Carcontext'
import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import photo1 from '../../../assets/img/1.jpg'
import GestionVoitures from './GestionVoitures'
import InfoSociété from './InfoSociété'
import { axios } from 'axios';

export default function ProfileSociété() {
    const [vue,setvue] = React.useState('vue1');
    const [imgUpload,setimgUpload]= React.useState(photo1);
    const hiddenFileInput = React.useRef(null);
    const vue1 = React.useRef(null);
    const vue2 = React.useRef(null);
    const handleClick = () => { 
      hiddenFileInput.current.click(); 
    } ;

    /********************************** ********************************/
          
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
/*************************************************************************************/
  async function uploadFile(e) {
    console.log('d5alna hounikeya');
    var file = e.target.files[0]
    var formData = new FormData();
    console.log(formData);
    formData.append("image", file);
    console.log(formData);

  //   const requestOptions = {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Authorization': 'Bearer ' + getCookie("token")
  //     },
  //     body: JSON.stringify({"file": formData}),
  //     file: formData
  // };
  const x = await axios.put('http://localhost:3000/api/owner/'+getCookie("userId"), formData)


    // ({
    //    url: "upload.php",
    //    type: "POST",
    //    data: formData,
    //    processData: false,
    //    contentType: false,
    //    success: function(response) {

}
/***********************************************************************************************************/
  async function sendUpdateOwner(event, data){
    console.log("updating");
    event.preventDefault();
    console.log("data ",data);
    console.log("data parsed ",JSON.stringify({data}));

    var formData = new FormData();
    formData.append("image", data);

  const requestOptions = {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + getCookie("token")
      },
      body: JSON.stringify({"file": data}),
      file: data
  };
  try{
    console.log("updating");
    const x = await fetch('http://localhost:3000/api/owner/'+getCookie("userId"), requestOptions);
    // setimgUpload('http://localhost:3000/images/'+x.data.filename)

  } catch {
    console.log("error");
  }

}
    /***************************************************************** */
    const getBase64 = (e) => {
      var file = e.target.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {  
        console.log("file: ",file);
        console.log("reader: ",reader);
          setimgUpload(reader.result);
          /** ******* console ********** */
          console.log("reader.result1 ",reader.result); 
          console.log("imgUpload2 ",imgUpload); 
          // sendUpdateOwner(e, file);
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
            <img src={imgUpload} alt='not found' width={200} height={200} style={{borderRadius:'50%',margin:'50px 80px',cursor: 'pointer'}} title='modifier le photo' onClick={handleClick} multiple accept="image/*"  />
            <input type="file" ref={hiddenFileInput} onChange ={(e)=>{
              getBase64(e)
              uploadFile(e)
              }} style={{display: 'none'}} />
            <Button style={{width:'370px'}} onClick={e=>{setvue('vue1')}} ref={vue1}> Consulter Profile </Button>
            <Button style={{marginTop:'20px',width:'370px'}} onClick={e=>{setvue('vue2')}} ref={vue2}>Consulter Voitures</Button>
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
