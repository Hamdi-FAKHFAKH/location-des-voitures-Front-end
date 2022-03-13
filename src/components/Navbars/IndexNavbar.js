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
function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            title="Coded by Creative Tim"
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
              <NavLink to="">Contact</NavLink>
            </NavItem>
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
                <p className="d-lg-none" >Crée un compte</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink  data-placement="bottom"
                href='/entreprise'
                title="envoyer une demande de poster des services ">
                <i class="fa fa-users" aria-hidden="true"></i>
                <p className="d-lg-none" > Poster une Demande </p>
              </NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
