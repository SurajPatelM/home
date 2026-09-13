import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { about } from "../editable-stuff/config";
const Navigation = () => {
  const [expanded, setExpanded] = React.useState(false);
  return (
  <Navbar expanded={expanded} onToggle={setExpanded} collapseOnSelect expand="lg" className="portfolio-nav" sticky="top">
    <div className="container">
      <Navbar.Brand href="#home">Suraj Patel<span className="brand-dot">.</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="portfolio-navigation" aria-expanded={expanded} />
      <Navbar.Collapse id="portfolio-navigation">
        <Nav className="ms-auto">
          {[['aboutme','About'],['experiences','Experience'],['projects','Projects'],['publications','Publications'],['skills','Skills'],['contact','Contact']].map(([id,label]) => <Nav.Link key={id} href={`#${id}`}>{label}</Nav.Link>)}
          <Nav.Link href={about.resume} target="_blank" rel="noopener noreferrer">Resume ↗</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
);
};
export default Navigation;
