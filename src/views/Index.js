import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import Cartvoiture from "components/Body/Cartvoiture";
import { Container, Row } from "reactstrap";
//import {liste} from '../assets/data/listcar'
import Footer from "components/Footers/Footer";
import { PaginatedItems } from "components/Body/PaginatedItems";
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
  <div className='imageDeFond'></div>
  <div className='contenu' style={{backgroundColor:'rgba(255,255,255,0.78)'}}>
  <IndexNavbar />
   <IndexHeader/>
  <div className="main" >
  <PaginatedItems itemsPerPage={3}/>
     </div>
     <br/><br/>
     <Footer/>
  </div>
    </>
  );
}

export default Index;
