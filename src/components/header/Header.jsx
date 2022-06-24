import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import lancesoft_logo from "../../lancesoft_logo.png";
import "./header.css";
export default function Header() {
  const [token, setToken] = useState(sessionStorage.getItem("Access_Token"));
  // const username = sessionStorage.getItem("username");
  const handlefunction = () => {
    sessionStorage.clear();
    alert(`Logout Successful`);
    setToken((data) => (data = sessionStorage.getItem("Access_Token")));
  };
  return (
    <Navbar className="color-nav" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" id="navbar-brand">
            <img src={lancesoft_logo} className="icon" alt="lancesoft_logo2" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="m-2" to="/" id="nav-link">
              {/* <HomeIcon className="icon" /> Home */}
            </Link>
          </Nav>
          <Nav id="nav">
            {[null, undefined].includes(token) && (
              <Link className="m-2" to="/login" id="nav-link">
                Login
                {/* <LoginIcon className="icon" /> */}
              </Link>
            )}

            {![null, undefined].includes(token) && (
              <>
                <Link className="m-2" to="/addEmployee" id="nav-link">
                  Add Employee
                </Link>
                <Link
                  className="m-2"
                  to="/"
                  onClick={handlefunction}
                  id="nav-link"
                >
                  Logout
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
