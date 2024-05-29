import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddFruitPage() {
  const [fruitData, setFruitData] = useState({
    name: "",
    category: "",
  });

  const storedToken = localStorage.getItem("authToken") || null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFruitData({ ...fruitData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${API_URL}/fruits`, fruitData, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Add Fruit</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={fruitData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridColor">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              name="category"
              value={fruitData.category}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Add Fruit
        </Button>
      </Form>
    </Container>
  );
}

export default AddFruitPage;
