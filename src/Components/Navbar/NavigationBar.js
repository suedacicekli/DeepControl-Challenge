import React from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css';


function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <a href="/" >
                    <img
                        src="https://deepcontrol.net/assets/img/deepcontrol_black_logo.png"
                        width="45%"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    ></img>
                </a>

                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 "
                        style={{ maxHeight: '100px', marginLeft: "-250px" }}
                        navbarScroll
                    >
                        <Link className="NavLink ms-4 " to="/map">Deep MAP</Link>
                        <Link className="NavLink ms-4 text-black-50 disabled" to="/login"  >Kurumsal</Link>
                        <Link className="NavLink ms-4 text-black-50 disabled" to="/login">IOT Çözümleri</Link>


                    </Nav>
                    <div >
                        <Link to="/login">
                            <Button variant="outline-primary">Login</Button>
                        </Link>
                        <Link to="/register" >
                            <Button variant="primary" className=" mx-3 ">Sign Up</Button>
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
