import React, { useState } from "react";
import { Image, Text, Input, Button } from "@chakra-ui/react";
import { Link,useNavigate } from "react-router-dom";
import "./signup.css";
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Error, setError] = useState('');

  const handleUsername = (e) => {
    setUsername(e.target.value)
  };

  const handleName = (e) => {
    setName(e.target.value)
  };

  const handleEmail = (e) => {
    setEmail(e.target.value)
  };

  const handlePassword = (e) => {
    setPassword(e.target.value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  const formData = {
    'username': username,
    'name': name,
    'email': email,
    'password': password,
  }
  try {
    const response = await axios.post('http://localhost:3001/signup', formData);
    const data = response.data;
    console.log(data);
    navigate("/login");
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      setError('Username Already Exists. Try again');
    } else {
      console.error("Error creating user:", error.message);
    }
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
      <div className="signup_body">
        <div className="left_eclipse">
          <Image className="eclipse_1" src="/images/eclipse1.svg" />
        </div>
        <form>
        <div className="signup_in_container">
          <Text className="signup_in_text">Create Your Account</Text>
          <div className="signup_in_fields">
            <Input
              className="name-input"
              placeholder="Name"
              name='name' 
              value={name} 
              onChange={handleName}
            />
            <Input
              className="username-input"
              placeholder="Username"
              name='username' 
              value={username} 
              onChange={handleUsername}
            />
            <Input
              className="email-input"
              type="email"
              placeholder="Email"
              name='email' 
              value={email} 
              onChange={handleEmail}
            />
            <Input
              className="password-input"
              type="password"
              placeholder="Password"
              name='password' 
              value={password} 
              onChange={handlePassword}
            />
            {Error && <Text className="error-message">{Error}</Text>}
            <Button className="login_in_btn" onClick={handleSubmit}>Sign Up</Button>
          </div>
          <div className="login_signup">
            <Text className="already">Already have an account?</Text>
            <Link to={"/login"} className="login_link">Log In</Link>
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
export default Signup;
