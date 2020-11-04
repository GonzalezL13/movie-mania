import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

import { userLogin } from "../utils/API";
import Auth from "../utils/auth";

const LoginForm = () => {
  //creating a const and setting its value state to empty strings
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    //... takes an existing array and adds an element to it
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormsubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await userLogin(userFormData);
      console.log(response.data);
      Auth.login(response.data.token);
 
    } catch (err) {
      console.error(err);
        setShowAlert(true);
    }

    setUserFormData({
    //   username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormsubmit}>
        <Alert
          dismissible
          OnClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your email"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Button style={{backgroundColor: '#1ACDC8', color: '#FEFEFE', fontWeight: 'bold'}}
          disabled={!(userFormData.email && userFormData.password)}
          type="submit"
          size= 'lg'
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
