import React from "react";
import { Container } from "reactstrap";

// reactstrap components

// core components

function ContactHeader() {
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
            "url(" + require("assets/img/bmw3.jpg").default + ")",
        }}
        className="page-header page-header-small"
        data-parallax={true}
        ref={pageHeader}
      >
     <div className="filter" />
        <Container>
          <br/>
        <h1  style={{fontSize:80,marginLeft:"-160px",fontWeight:"bold",color:'white', marginTop:'156px',marginBottom:'200px'}}>Contact</h1>
        <br/>
          </Container>
      </div>
    </>
  );
}

export default ContactHeader;
