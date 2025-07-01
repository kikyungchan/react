import {
  Button,
  Carousel,
  Container,
  FloatingLabel,
  Form,
  Modal,
  Nav,
  Navbar,
  Pagination,
  Spinner,
} from "react-bootstrap";
import { useState } from "react";

function App18() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/public/bull.jpg" alt="" />
          <Carousel.Caption>
            <h3>황소</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/public/bear.jpg" alt="" />
          <Carousel.Caption>
            <h3>곰</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/public/eagle.jpg" alt="" />
          <Carousel.Caption>
            <h3>독수리</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <hr />
      <FloatingLabel
        label={"아이디를 입력해주세요."}
        controlId={"idFloatingInput"}
      >
        <Form.Control placeholder={"아이디를 입력해주세요."} />
      </FloatingLabel>
      <FloatingLabel
        label={"패스워드를 입력해주세요."}
        controlId={"passwordFloatingInput"}
      >
        <Form.Control
          type={"password"}
          placeholder={"패스워드를 입력해주세요."}
        />
      </FloatingLabel>
      <hr />
      <Form.Group controlId={"idInput"}>
        <Form.Label>아이디</Form.Label>
        <Form.Control />
      </Form.Group>
      <Form.Group controlId={"passwordInput"}>
        <Form.Label>패스워드</Form.Label>
        <Form.Control type={"password"} />
      </Form.Group>
      <Form.Group controlId={"contentTextarea"}>
        <Form.Label>본문</Form.Label>
        <Form.Control as={"textarea"} />
      </Form.Group>
      <hr />
      <Button onClick={() => setShow(true)}>모달 예제</Button>
      <Modal show={show} onHide={() => setShow(!show)}>
        <Modal.Header closeButton={true}>
          <Modal.Title>Lorem ipsum dolor.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at
          esse in minus, mollitia officia perspiciatis sequi sint sunt totam!
          Atque aut autem dicta in, ipsam maxime officia sunt tempora.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(!show)}>
            Close
          </Button>
          <Button onClick={() => setShow(!show)}>Save</Button>
        </Modal.Footer>
      </Modal>
      <hr />
      <Navbar>
        <Container>
          <Navbar.Brand>PROJECT</Navbar.Brand>
          <Navbar.Toggle area-controls={"basic-navbar-nac"}></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nac">
            <Nav className="ml-auto">
              <Nav.Link href="/">HOME</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Pagination>
        <Pagination.Prev>이전</Pagination.Prev>
        <Pagination.Item>1</Pagination.Item>
        <Pagination.Item>2</Pagination.Item>
        <Pagination.Item active={"true"}>3</Pagination.Item>
        <Pagination.Item>4</Pagination.Item>
        <Pagination.Next>다음</Pagination.Next>
      </Pagination>
      <hr />
      <Spinner size={"small"} />
      <Spinner size={"small"} />
      <Spinner size={"small"} />
      <Spinner size={"small"} />
    </div>
  );
}

export default App18;
