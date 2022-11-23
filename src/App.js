import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';

function App() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <img
          src="https://deepcontrol.net/assets/img/deepcontrol_black_logo.png"
          width="15%"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Kurumsal</Nav.Link>
            <Nav.Link href="#action2">IOT Çözümleri</Nav.Link>

            <Nav.Link href="#" disabled>
              Deep Control Lab
            </Nav.Link>
          </Nav>
          <div >
            <Button variant="outline-primary" >Login</Button>
            <Button variant="primary" className=" mx-3 ">Sign Up</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
