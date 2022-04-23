/*eslint-disable*/
import React from "react";
// reactstrap components
import { Row, Container } from "reactstrap";
function Footer() {
  return (
    <footer className="footer footer-black footer-white" style={{backgroundColor:'#C9D6DF'}}>
      <Container>
        <Row>
          <nav className="footer-nav" style={{width:'300px'}}>
            <ul>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  H&A_dev
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto" style={{width:'300px'}}>
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by H&A Tim
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
