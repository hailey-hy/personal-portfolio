import { Container, Row, Col } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <br></br>
            <a href="https://github.com/hailey-hy"><BsGithub className="github"/></a>
            </div>
            <p>Copyright 2022. Haeyon Jeon. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
