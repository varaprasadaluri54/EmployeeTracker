import React, { useState } from "react";
import { Container, Dropdown, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import lancesoft_logo from "../../lancesoft_logo.png";
import "./header.css";
export default function Header({ type }) {
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
            <Link className="m-2" to="/" id="nav-link"></Link>
          </Nav>
          <Nav id="nav">
            {[null, undefined].includes(token) && (
              <Link className="m-2" to="/" id="nav-link">
                Login
              </Link>
            )}

            {![null, undefined].includes(token) &&
              (["finance"].includes(type) ? (
                <>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="toggle"
                      variant=""
                      id="dropdown-basic dropdownMenu dropdown-autoclose-true "
                    >
                      <p id="nav-link" className="username">
                        Domestic
                      </p>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Row>
                        <Link
                          className="m-2"
                          to="/clientDomestic"
                          id="nav-link"
                        >
                          Client Domestic
                        </Link>
                        <Link
                          className="m-2"
                          to="/internalDomestic"
                          id="nav-link"
                        >
                          Internal Domestic
                        </Link>
                      </Row>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="toggle"
                      variant=""
                      id="dropdown-basic dropdownMenu dropdown-autoclose-true "
                    >
                      <p id="nav-link" className="username">
                        International
                      </p>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Row>
                        <Link
                          className="m-2"
                          to="/clientInternational"
                          id="nav-link"
                        >
                          Client International
                        </Link>
                        <Link
                          className="m-2"
                          to="/internalInternational"
                          id="nav-link"
                        >
                          Internal International
                        </Link>
                      </Row>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : ["employee"].includes(type) ? (
                <>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="toggle"
                      variant=""
                      id="dropdown-basic dropdownMenu dropdown-autoclose-true "
                    >
                      {/* <img src={profilepic} alt="profile" className="img" /> */}
                      <p id="nav-link" className="username">
                        Employee
                      </p>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Row>
                        <Link className="m-2" to="/addEmployee" id="nav-link">
                          Add Employee
                        </Link>
                        <Link
                          className="m-2"
                          to="/promoteEmployee"
                          id="nav-link"
                        >
                          Promote Employee
                        </Link>
                        <Link className="m-2" to="/exitEmployee" id="nav-link">
                          Exit Employee
                        </Link>
                        <Link className="m-2" to="/profile" id="nav-link">
                          Profile
                        </Link>
                      </Row>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Link
                    className="m-2"
                    to="/"
                    onClick={handlefunction}
                    id="nav-link"
                  >
                    Logout
                  </Link>
                </>
              ) : ["md"].includes(type) ? (
                <>
                  <Link className="m-2" to="/" id="nav-link">
                    Approve
                  </Link>
                  <Link className="m-2" to="/" id="nav-link">
                    Profile
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
              ) : ["manager"].includes(type) ? (
                <>
                  <Link className="m-2" to="/addClientDetails" id="nav-link">
                    Add Client details
                  </Link>
                  <Link className="m-2" to="/" id="nav-link">
                    Profile
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
              ) : ["lead"].includes(type) ? (
                <>
                  <Link className="m-2" to="/" id="nav-link">
                    Profile
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
              ) : (
                ""
              ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
