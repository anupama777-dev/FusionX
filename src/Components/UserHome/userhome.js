import "./userhome.css";
import { Image, Avatar, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Iframe from "react-iframe";

const UserHome = () => {
  const [user, setUser] = useState({});
  const [stores, setStores] = useState([{}]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserData = async () => {
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

    const fetchStores = async () => {
      try {
        const response = await axios.get("http://localhost:3001/stores", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setStores(response.data.stores);
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };

    if (token) {
      fetchUserData();
      fetchStores();
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  const [chatboxOpen, setChatboxOpen] = useState(false);

  const toggleChatbox = () => {
    setChatboxOpen(!chatboxOpen);
  };
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
          <div className="container_1">
            <Text className="My_store_txt">My Stores</Text>
            <div className="prev_work_container">
              {stores.map((store, index) => {
                let imagePath = store.storeLogo ? store.storeLogo.image : "";
                if (typeof imagePath === "string") {
                  imagePath = imagePath.replace(/\\/g, "/");
                  imagePath = `http://localhost:3001/${imagePath}`;
                }
                return (
                  <Link
                    to={{ pathname: "/mystore", search: `?store=${store._id}` }}
                    key={store._id}
                  >
                    <div className="box">
                      <Image
                        className="previmg"
                        src={imagePath}
                        alt={`Store ${index + 1} Logo`}
                        style={{
                          width: "150px",
                          height: "120px",
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="prev_work_container1">
              {stores.map((store, index) => {
                let imagePath = store.storeLogo ? store.storeLogo.image : "";
                if (typeof imagePath === "string") {
                  imagePath = imagePath.replace(/\\/g, "/");
                  imagePath = `http://localhost:3001/${imagePath}`;
                }
                return (
                  <Link
                    to={{ pathname: "/mystore", search: `?store=${store._id}` }}
                    key={store._id}
                  >
                    <div className="box">
                      <Image
                        className="previmg"
                        src={imagePath}
                        alt={`Store ${index + 1} Logo`}
                        style={{ width: "150px", height: "120px" }}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="chatbox">
          {chatboxOpen && (
            <div>
              <Iframe
                url="http://127.0.0.1:5501/standalone-frontend/base.html"
                width="400px"
                height="600px"
              />
            </div>
          )}
        </div>
        <button onClick={toggleChatbox} className="chatbox__button">
          <Image src="/images/chatbox-icon.svg" />
        </button>
      </div>
    </div>
  );
};
export default UserHome;
