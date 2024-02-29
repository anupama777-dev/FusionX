import React from "react";
import { Image, Text, Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./profile.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:3001/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [token]);
  const handleLogout = () => {
    localStorage.removeItem("token");
  };

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
            <Link to={"/userhome"}>
              <Image className="dashboard_home" src="/images/home.svg" />
            </Link>
            <Link className="home_txt" to={"/userhome"}>
              Home
            </Link>
          </div>
          <div className="dash_items">
            <Link to={"/profile"}>
              <Image className="dashboard_profile" src="/images/profile.svg" />
            </Link>
            <Link className="profile_txt" to={"/profile"}>
              Profile
            </Link>
          </div>
          <div className="dash_items">
            <Link to={"/help"}>
              <Image className="dashboard_help" src="/images/help.svg" />
            </Link>
            <Link className="help_txt" to={"/help"}>
              How to Create?
            </Link>
          </div>
          <div className="dash_items">
            <Link to={"/"} onClick={handleLogout}>
              <Image className="back_dash" src="/images/logout.svg" />
            </Link>
            <Link className="dash_txt" to={"/"} onClick={handleLogout}>
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
