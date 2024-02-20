import "./userhome.css";
import { Image, Avatar, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useState, useEffect } from "react";

const UserHome = () => {
  const [cookies] = useCookies(["login"]);
  const [user, setUser] = useState([]);
  const [stores, setStores] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response1 = await axios.post(
          "http://localhost:3001/signup/" + cookies.username
        );
        setUser(response1.data[0]);
      } catch (error) {
        console.error("Error fetching user", error);
      }
    };
    fetchUser();
  }, [cookies.username]);
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get("http://localhost:3001/userhome");
        setStores(response.data);
      } catch (error) {
        console.error("Error fetching stores:", error);
        setStores([]);
      }
    };
    fetchStores();
  }, []);

  return (
    <div className="userhome_page">
      <div className="header1">
        <Image className="header_logo" src="/images/logo.svg" />
      </div>
      <div className="line_div1">
        <Image className="line" src="/images/line_1.svg" />
      </div>
      <div className="userhomebody">
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

        <div className="userhome_container">
          <div className="begin">
            <Text className="line1">
              Build And Launch Your <br />
              E-commerce Platform Now
            </Text>
            <Link to={"/storedetails"} className="beginbtn">
              Begin Now <span className="arrow">&#10132;</span>
            </Link>
          </div>

          <div className="prev_work_container">
            {stores.map((store, index) => {
              let imagePath = store.storeLogo.image;
              if (typeof imagePath === "string") {
                imagePath = imagePath.replace(/\\/g, "/");
                imagePath = `http://localhost:3001/${imagePath}`;
              }
              return (
                <div className={`b${index + 1}`} key={store._id}>
                  <img
                    className="previmg"
                    src={imagePath}
                    alt={`Store ${index + 1} Logo`}
                  />
                </div>
              );
            })}
          </div>
          <div className="prev_work_container1">
            {stores.map((store, index) => {
              let imagePath = store.storeLogo.image;
              if (typeof imagePath === "string") {
                imagePath = imagePath.replace(/\\/g, "/");
                imagePath = `http://localhost:3001/${imagePath}`;
              }
              return (
                <div className={`b${index + 1}`} key={store._id}>
                  <img
                    className="previmg"
                    src={imagePath}
                    alt={`Store ${index + 1} Logo`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserHome;
