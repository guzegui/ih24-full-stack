import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function ProfilePage() {
  const API_URL = "http://localhost:5005";
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const storedToken = localStorage.getItem("authToken") || null;

  const getIdFromToken = (storedToken) => {
    if (storedToken == null) return null;
    // Extract the payload part of the JWT
    const base64Url = storedToken.split(".")[1]; // Split the JWT into its parts and take the payload
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/"); // Convert base64url to base64

    // Decode the base64 string to get the JSON payload
    const payload = JSON.parse(window.atob(base64));

    // Access the _id from the payload
    const userId = payload._id;

    console.log("User ID:", userId);
    console.log("User toke:", storedToken);
    console.log(`${API_URL}/user/${userId}`);

    axios
      .get(`${API_URL}/user/${userId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (storedToken) {
      getIdFromToken(storedToken);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${API_URL}/user/${userId}`, userData, {
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
