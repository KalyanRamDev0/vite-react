
import React from 'react';
import { Container, Row, Col, Navbar, Nav, Card, Button, Carousel, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UdemyClone = () => {
  return (
    <>
     
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Udemy Clone</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ml-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Courses</Nav.Link>
              <Nav.Link href="#">Pricing</Nav.Link>
              <Nav.Link href="#">Sign Up</Nav.Link>
              <Nav.Link href="#">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      <header className="hero bg-primary text-white text-center py-5">
        <h1>Learn New Skills with Online Courses</h1>
        <p>Join millions of learners and educators today!</p>
      </header>

      
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1500x500?text=Course+1"
            alt="Course 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1500x500?text=Course+2"
            alt="Course 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1500x500?text=Course+3"
            alt="Course 3"
          />
        </Carousel.Item>
      </Carousel>

     {/* popular course write here */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Popular Courses</h2>
        <Row>
          
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/350x200?text=Course+1" />
              <Card.Body>
                <Card.Title>Web Development Bootcamp</Card.Title>
                <Card.Text>
                  Learn full-stack web development with hands-on projects and expert guidance.
                </Card.Text>
                <Button variant="primary" href="#">Enroll Now</Button>
              </Card.Body>
            </Card>
          </Col>
         
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/350x200?text=Course+2" />
              <Card.Body>
                <Card.Title>Data Science and Machine Learning</Card.Title>
                <Card.Text>
                  Master data analysis and machine learning algorithms with real-world datasets.
                </Card.Text>
                <Button variant="primary" href="#">Enroll Now</Button>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/350x200?text=Course+3" />
              <Card.Body>
                <Card.Title>UI/UX Design Fundamentals</Card.Title>
                <Card.Text>
                  Learn the essential principles of designing user-friendly interfaces.
                </Card.Text>
                <Button variant="primary" href="#">Enroll Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

     
      <footer className="bg-dark text-white text-center py-4">
        <p>&copy; 2024 Udemy Clone - All Rights Reserved</p>
      </footer>
    </>
  );
};

export default UdemyClone;


