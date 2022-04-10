import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,  
  Nav,
  Container,
} from "reactstrap";
function ProfileNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("black");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

 

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function signOut(){
    setCookie('userId', '');
    setCookie('token', '');
    window.location.assign('http://localhost:3001/connection');
  }

  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            title=""
          >
            Renting Car 
            {/*<img src={img} alt="no found" width={100} height={60}/>*/}
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
              
                data-placement="bottom"
                to="#"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
               data-placement="bottom"
                href="https://www.facebook.com/hamdi.fakhfakh.98/"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/hamdi.fakhfakh98/"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://github.com/Hamdi-FAKHFAKH"
                target="_blank"
                title="Star on GitHub"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink href='/index'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="">About Us </NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/service">Services</NavLink>
            </NavItem>
            <NavItem>
                      <NavLink href="/contact">Contact</NavLink>
            </NavItem>
            {
              (!getCookie('userId') || getCookie('userId') == 'null' || getCookie('userId') == 'undefined')?  
               <>
                    <NavItem>
                      <NavLink
                        data-placement="bottom"
                        href="/connexion"
                        title="connecter a votre espace client"
                      >
                        <i className="fa fa-sign-in" aria-hidden="true"/>
                        <p className="d-lg-none">Connecter</p>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink  data-placement="bottom"
                        href='/inscrit'
                        title="crée un nouveau compte client ">
                        <i className="fa fa-user-plus" aria-hidden="true"/>
                        <p className="d-lg-none" >créer un compte</p>
                      </NavLink>
                    </NavItem>
                </> : <>
                  <NavItem onClick={ signOut }>
                      <NavLink  data-placement="bottom"
                        href='/inscription'
                        title="désinscription ">
                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                        <p className="d-lg-none" >se déconnecter de votre compte</p>
                      </NavLink>
                    </NavItem>
                </>
            
            }
            <NavItem>
              <NavLink  data-placement="bottom"
                href='/entreprise'
                title="envoyer une demande de poster des services ">
                <i className="fa fa-users" aria-hidden="true"></i>
                <p className="d-lg-none" > Poster une Demande </p>
              </NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ProfileNavbar;
