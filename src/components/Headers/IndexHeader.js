import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/h.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title" style={{fontSize:70,width:800,marginLeft:-370,marginTop:-280}}>Taking you anywhere you can imagine.</h1>
            </div>
            <h2 className="presentation-subtitle text-left" style={{marginLeft:-360}}>
            Not only to parties, weddings, casionos and birthdays, but anywhere you want to go!
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage:
              "url(" + require("assets/img/clouds.png").default + ")",
          }}
        />
      
      </div>
    </>
  );
}

export default IndexHeader;
