import React from 'react'
import { Container, Row, Col,Card } from 'react-bootstrap';
function Cards() {
  return (
    <div>
        <Container>
  <Row>
    <Col md={4}>
      <Card>
        <Card.Img variant="top" src="path-to-your-image-1.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card>
        <Card.Img variant="top" src="path-to-your-image-2.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card>
        <Card.Img variant="top" src="path-to-your-image-3.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>
      
    </div>
  )
}

export default Cards
