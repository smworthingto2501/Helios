import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  let history = useHistory();

  return (
    <footer>
      <Navbar.Brand href="#top" className="footer-brand" onClick={() => history.push("../#top")}>
        <img
          src={require("../../src/static/images/HeliosFull.png")}
          height="30"
          alt="" />
      </Navbar.Brand>
      <Navbar className="footer-nav" bg="themed" expand="lg">
        <Nav className="m-auto">
          <Nav.Link href="/project#top" onClick={() => history.push("../project#top")}>Projects</Nav.Link>
          <Nav.Link href="/Member#top" onClick={() => history.push("../Member#top")}>Member</Nav.Link>
          <Nav.Link href="/Research#top" onClick={() => history.push("../Research#top")}>Research</Nav.Link>
        </Nav>
      </Navbar>
    </footer>
  );
}
