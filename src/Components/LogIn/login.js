import React from "react";
import { Text, Button, Image, Input } from "@chakra-ui/react";
import { useState } from "react";
import "./login.css";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';
import { useCookies } from 'react-cookie';
function Login() {
  
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['login']);
  const [Error, setError] = useState('');

  const handleUsername = (e) => {
    setUsername(e.target.value)
  };
  const handlePassword = (e) => {
    setPassword(e.target.value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:3001/signup/' + username);
    const data = response.data
    console.log(data)
    if (data.length > 0) {
      if (password === data[0].password) {
          setCookie('username', data[0].username);
          setCookie('name', data[0].name);
          { navigate("/userhome"); }
      }
      else { setError('Incorrect Password') }
    }
    else { setError('Incorrect Username') }
   };


  return (
    <div className="signup_in_page">
      <div className="header">
        <Image className="header_logo" src="\images\logo.svg" />
      </div>
      <div className="line_div">
        <Image className="line" src="/images/line_1.svg" />
      </div>      <div className="login_body">
        <div className="left_eclipse">
          <Image className="eclipse_1" src="/images/eclipse1.svg" />
        </div>
        <form>
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
            <Button className="signup_in_btn" onClick={handleSubmit}>Log In</Button>
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
