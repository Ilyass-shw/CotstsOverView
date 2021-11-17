import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">
          Shw
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navigation;
