/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Container } from "reactstrap";

// reactstrap components

// core components

function ServicePageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/BMW.jpg").default + ")",
        }}
        className="page-header page-header-small"
        data-parallax={true}
        ref={pageHeader}
      >
     <div className="filter" />
        <Container>
          <br/>
        <h1  style={{fontSize:80,marginLeft:"-140px",fontWeight:"bold",color:'white', marginTop:'156px'}}>Service</h1>
        
          </Container>
      </div>
    </>
  );
}

export default ServicePageHeader;
