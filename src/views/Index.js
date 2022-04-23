import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import Footer from "components/Footers/Footer";
import CarcontextProvider from "context/Carcontext";
import Home from "components/Body/Home";


function Index() {
 
  //const [idcar,setidcar] = React.useState();
  //const [Cmatricule,setCmatricule]= React.useState('0000');
  return (
    <>
  <div className='imageDeFond'></div>
  <div className='contenu' style={{backgroundColor:'rgba(255,255,255,0.78)'}}>
  <IndexNavbar />
   <IndexHeader/>
  <div className="main" >
  <CarcontextProvider>
    <Home/>
  </CarcontextProvider>
     </div>
     <br/><br/>
     <Footer/>
  </div>
    </>
  );
}

export default Index;
