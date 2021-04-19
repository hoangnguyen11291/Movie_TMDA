import React from "react";
import logo from "./logo/logo.png";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const PublicNavbar = () => {
  return (
    <div>
      <Navbar className="navColor">
        <Navbar.Brand className="navColor" href="#home">
          MOVIE.
        </Navbar.Brand>
        <Nav className="mr-auto navColor">
          <Nav.Link className="navColor" href="#home">
            Popular
          </Nav.Link>
          <Nav.Link className="navColor" href="#features">
            Top 20
          </Nav.Link>
          <Nav.Link className="navColor" href="#pricing">
            Favorites
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default PublicNavbar;
