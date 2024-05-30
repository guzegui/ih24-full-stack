import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AuthContext } from "../context/auth.context";

function ProfilePage() {
  const API_URL = "http://localhost:5005";
  const { getToken, user, setUser } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    name: user.name || "",
    email: user.email || "",
  });

  console.log(getToken());
  console.log(user);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a copy of userData without empty fields
    const updatedData = {};
    if (userData.name.trim() !== "") updatedData.name = userData.name;
    if (userData.email.trim() !== "") updatedData.email = userData.email;

    axios
      .patch(`${API_URL}/user/${user._id}`, updatedData, {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        alert("Success");
        console.log(user);
        setUser({ ...user, ...updatedData });
        setUserData({ name: "", email: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {user && (
        <Container className="mt-5">
          <h1 className="mb-4">Hello {user.name} </h1>
          <h1 className="mb-4">Your email is {user.email} </h1>
          <h2 className="mb-4">
            If you want to edit, fill out the form and smash that button{" "}
          </h2>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridColor">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
              Edit user info
            </Button>
          </Form>
        </Container>
      )}
    </div>
  );
}

export default ProfilePage;
