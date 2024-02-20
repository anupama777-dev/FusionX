import React from "react";
import { Image, Text, Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./profile.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const Profile = () => {
  const [cookies] = useCookies(["login"]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response1 = await axios.post(
          "http://localhost:3001/signup/" + cookies.username
        );
        setUser(response1.data[0]);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [cookies.username]);

  return (
    <div className="profile_page">
      <div className="header1">
        <Image className="header_logo" src="/images/logo.svg" />
      </div>
      <div className="line_div1">
        <Image className="line" src="/images/line_1.svg" />
      </div>
      <div className="profile_body">
        <div className="dashboard1">
          <div className="dash_items1">
            <Avatar className="user" image="/images/user-solid.svg" />
            <div className="avatar_txt">
              <Text className="name_txt">{user.name}</Text>
              <Text className="email_txt">{user.email}</Text>
            </div>
          </div>
          <div className="dash_items">
            <Image className="dashboard_home" src="/images/home.svg" />
            <Link className="home_txt" to={"/userhome"}>
              Home
            </Link>
          </div>
          <div className="dash_items">
            <Image className="dashboard_profile" src="/images/profile.svg" />
            <Link className="profile_txt" to={"/profile"}>
              Profile
            </Link>
          </div>
          <div className="dash_items">
            <Image className="dashboard_help" src="/images/help.svg" />
            <Link className="help_txt" to={"/help"}>
              How to Create?
            </Link>
          </div>
          <div className="dash_items">
            <Image className="back_dash" src="/images/logout.svg" />
            <Link className="dash_txt" to={"/"}>
              Log Out
            </Link>
          </div>
        </div>

        <div className="profile_container">
          <div className="prof1">
            <Text className="prof_title">Personal Information</Text>
            <div className="rect">
              <div className="rect1">
                <div className="left">
                  <Text>Name</Text>
                </div>
                <div className="col1">
                  <Text>:</Text>
                </div>
                <div className="right">
                  <Text>{user.name}</Text>
                </div>
              </div>
              <div className="rect1">
                <div className="left">
                  <Text>Username</Text>
                </div>
                <div className="col2">
                  <Text>:</Text>
                </div>
                <div className="right">
                  <Text>{user.username}</Text>
                </div>
              </div>
              <div className="rect1">
                <div className="left">
                  <Text>Password</Text>
                </div>
                <div className="col3">
                  <Text>:</Text>
                </div>
                <div className="right">
                  <Text>{user.password}</Text>
                </div>
              </div>
              <div className="rect1">
                <div className="left">
                  <Text>Email</Text>
                </div>
                <div className="col4">
                  <Text>:</Text>
                </div>
                <div className="right">
                  <Text>{user.email}</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
