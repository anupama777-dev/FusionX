import React from "react";
import { Text, Button, Image, Input } from "@chakra-ui/react";
import { useState } from "react";
import "./login.css";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="signup_in_page">
      <div className="header">
        <Image className="header_logo" src="\images\logo.svg" />
      </div>
      <Image className="line" src="/images/line_1.svg" />
      <div className="login_body">
        <div className="left_eclipse">
          <Image className="eclipse_1" src="/images/eclipse1.svg" />
        </div>
        <div className="signup_in_container">
          <Text className="signup_in_text">Login To Your Account</Text>
          <div className="signup_in_fields">
            <Input
              className="username-input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              className="password-input"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="signup_in_btn">Login</Button>
          </div>
        </div>
        <div className="right_eclipse">
          <Image className="eclipse_2" src="/images/eclipse2.svg" />
        </div>
      </div>
    </div>
  );
}
export default Login;
