import React, { useState } from "react";
import { Image, Text, Input, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./signup.css";
function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="signup_in_page">
      <div className="header">
        <Image className="header_logo" src="\images\logo.svg" />
      </div>
      <div className="line_div">
        <Image className="line" src="/images/line_1.svg" />
      </div>      <div className="signup_body">
        <div className="left_eclipse">
          <Image className="eclipse_1" src="/images/eclipse1.svg" />
        </div>
        <div className="signup_in_container">
          <Text className="signup_in_text">Create Your Account</Text>
          <div className="signup_in_fields">
            <Input
              className="name-input"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              className="username-input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              className="email-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              className="password-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="signup_in_btn">Sign Up</Button>
          </div>
          <div className="login_signup">
            <Text className="already">Already have an account?</Text>
            <Link to={"/login"} className="login_link">
              Sign In
            </Link>
          </div>
        </div>
        <div className="right_eclipse">
          <Image className="eclipse_2" src="/images/eclipse2.svg" />
        </div>
      </div>
    </div>
  );
}
export default Signup;
