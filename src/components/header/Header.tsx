import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../../logo.svg";
import { Nav } from "react-bootstrap";
import * as Constants from "../../helpers/constants";

const Header = () => {
    return (
    <header>
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="logo"
                />
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home">{Constants.HOME}</Nav.Link>
                        <Nav.Link eventKey={2} href="#about">
                            {Constants.ABOUT_ME}
                        </Nav.Link>
                        <Nav.Link href="#projects">{Constants.PROJECTS}</Nav.Link>
                        <Nav.Link href="#blogs">{Constants.BLOG}</Nav.Link>
                        <Nav.Link href="#contact">{Constants.CONTACT_ME}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>)
}

export default Header;