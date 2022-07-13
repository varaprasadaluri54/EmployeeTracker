import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import jwt from "jwt-decode";
import "./login.css";
import lancesoft_logo from "../../lancesoft_logo.png";
import ApiService from "../../services/ApiService";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [status, setStatus] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = { username: username, password: password };
    setStatus(true);
    ApiService.login(loginData)
      .then((res) => {
        console.log(res);
        sessionStorage.setItem("Access_Token", res.data.token);
        const username = jwt(res.data.token).sub;
        // console.log(username);
        sessionStorage.setItem("username", username);
        setStatus(false);
        setErrors(false);
        // alert(`Login Successful `);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        setStatus(false);
        setErrors(true);
      });
  };
  return (
    <div id="login" className="container-sm ">
      <h1 className="title text-center">
        {/* Welcome */}
        <img src={lancesoft_logo} className="icon" alt="lancesoft_logo2" />
      </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="text"
            value={username}
            isInvalid={errors}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="name@gmail.com"
          />
        </Form.Group>
        {errors && (
          <p className="text-danger mb-1">
            The provided credentials do not match our records.
          </p>
        )}
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter your password"
          />
        </Form.Group>
        <Button type="submit" variant="success" className="login-button">
          Login
        </Button>
        {status && (
          <p className="text-success mb-1">
            Please wait while we are processing your request.
          </p>
        )}
      </Form>
    </div>
  );
};

export default Login;
