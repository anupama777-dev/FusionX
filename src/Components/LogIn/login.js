import React, { useState } from "react";
import './login.css'
import { Text, Button, Image, Input } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', {
        username,
        password
      });
      const { token } = response.data;
      if (token) {
        localStorage.setItem('token', token);
        navigate("/userhome");
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('Error logging in. Please try again.');
    }
  };

  return (
    <div className="signup_in_page">
      <div className="header">
        <Image className="header_logo" src="\images\logo.svg" />
      </div>
      <div className="line_div">
        <Image className="line" src="/images/line_1.svg" />
      </div>
      <div className="login_body">
        <div className="left_eclipse">
          <Image className="eclipse_1" src="/images/eclipse1.svg" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="signup_in_container">
            <Text className="signup_in_text">Log in to FusionX</Text>
            <div className="signup_in_fields">
              <Input
                className="username-input"
                placeholder="Username"
                name='username' 
                value={username} 
                onChange={handleUsername}
              />
              <Input
                className="password-input"
                type="password"
                placeholder="Password"
                name='password' 
                value={password} 
                onChange={handlePassword}
              />
              {error && <Text className="error-message">{error}</Text>}
              <Button type="submit" className="login_in_btn">Log In</Button>
            </div>
            <div className="login_signup">
              <Link to={"/signup"}  className="already">New to FusionX?</Link>
              <Link to={"/signup"} className="login_link">
                Create an account
              </Link>
            </div>
          </div>
        </form>
        <div className="right_eclipse">
          <Image className="eclipse_2" src="/images/eclipse2.svg" />
        </div>
      </div>
    </div>
  );
}

export default Login;
