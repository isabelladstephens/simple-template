import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";
import "../styling/Header.css";

const Header = () => {
  const location = useLocation(); // Get the current location

  return (
    <div>
      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        className="navbar-container"
      >
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              alt=""
              src="/react-logo.png"
              width="70"
              height="auto"
              className="logo"
            />{" "}
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/path1">
              <Nav.Link active={location.pathname === "/path1"}>
                Link1
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/path2">
              <Nav.Link active={location.pathname === "/path2"}>
                Link2
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/path3">
              <Nav.Link active={location.pathname === "/path3"}>
                Link3
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/path4">
              <Nav.Link active={location.pathname === "/path4"}>
                Link4
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
