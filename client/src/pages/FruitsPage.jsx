import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  ListGroup,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

function FruitsPage() {
  const getAllFruits = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/fruits`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setFruits(response.data))
      .catch((error) => console.log(error));
  };

  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    getAllFruits();
  }, []);

  /*
    <ListGroup>
        {fruit.map((fruit) => (
          <ListGroup.Item key={fruit._id} className="mb-3">
            <Link
              to={`/fruit/${fruit._id}`}
              className="text-dark text-decoration-none"
            >
              <Row>
                <Col md={2}>
                  <span style={{ fontSize: "50px" }}>{fruit.image_url}</span>
                </Col>
                <Col md={10}>
                  <h3>{fruit.name}</h3>
                  <p className="text-muted">{fruit.description}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  {fruit.uses.map((use, index) => (
                    <Badge key={index} bg="primary" className="me-2 mb-2">
                      {use}
                    </Badge>
                  ))}
                </Col>
              </Row>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    
    */

  return (
    <div>
      FruitsPage
      <ListGroup>
        {fruits &&
          fruits.map((fruit) => (
            <ListGroup.Item key={fruit._id} className="mb-3">
              <Link
                to={`/fruit/${fruit._id}`}
                className="text-dark text-decoration-none"
              >
                <Row>
                  <Col md={10}>
                    <h3>{fruit.name}</h3>
                    <p className="text-muted">{fruit.description}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>{fruit.category}</h4>
                  </Col>
                </Row>
              </Link>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}

export default FruitsPage;
