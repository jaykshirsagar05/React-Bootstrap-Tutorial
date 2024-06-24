import React from 'react';
import { Container, Navbar, Nav, Card, Button, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Body>
                <Card.Title>React Bootstrap Card</Card.Title>
                <Card.Text>
                  This is a simple card component using React Bootstrap.
                </Card.Text>
                <Button variant="primary" onClick={() => alert('Button clicked!')}>Click Me</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div className="bg-dark text-white text-center py-3 mt-5">
        <Container>
          <span>© 2024 React Bootstrap Tutorial</span>
        </Container>
      </div>
    </div>
  );
}

export default App;
