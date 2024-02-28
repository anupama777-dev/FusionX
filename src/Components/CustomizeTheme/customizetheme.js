import { React, useState } from "react";
import { Image, Tab, Tabs, TabList, Text, Select } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import "./customizetheme.css";
import axios from "axios";

function CustomizeTheme() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const storeID = searchParams.get("store");
  console.log("Store id: ", storeID);
  const category = searchParams.get("category");
  const theme = searchParams.get("theme");
  const [selectedColor, setSelectedColor] = useState(theme);
  console.log(selectedColor);
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };
  const handleProceed = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3001/customizetheme?store=${storeID}&category=${category}&theme=${selectedColor}`
      );
      console.log("Response: ", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  let themeImageSrc = `/images/${selectedColor}_theme_ss.png`;
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  return (
    <div className="customize_page">
      <div className="header1">
        <Image className="header_logo" src="\images\logo.svg" />
        <div className="header_categories">
          <Tabs className="tabs" variant="unstyled">
            <TabList>
              <Link to={"/storedetails"}>
                <Tab className="disabled">Store Details</Tab>
              </Link>
              <Link
                to={{
                  pathname: "/categories",
                  search: `?store=${storeID}`,
                }}
              >
                <Tab className="disabled">Categories</Tab>
              </Link>
              <Link
                to={{
                  pathname: "/choosetheme",
                  search: `?store=${storeID}&category=${category}`,
                }}
              >
                <Tab className="disabled">Choose Theme</Tab>
              </Link>
              <Tab _isselected="true">Customize Theme</Tab>
              <Tab isDisabled className="disabled">
                Add Products
              </Tab>
            </TabList>
          </Tabs>
        </div>
      </div>
      <div className="line_div1">
        <Image className="line" src="/images/line_1.svg" />
      </div>
      <div className="customize_body">
        <div className="dashboard2">
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
            <Link className="dash_txt" to={"/"} onClick={handleLogout}>
              Log Out
            </Link>
          </div>
        </div>
        <div className="customize_container">
          <div className="customize_theme_div">
            <div className="customize_theme">
              <Image
                src={themeImageSrc}
                alt={`Theme ${theme}`}
                className="customize_image"
              />
            </div>
          </div>
          <div className="customize_options">
            <div className="choose_font">
              <Text className="font">Font</Text>
              <Select
                placeholder="Choose font"
                className="select_font"
                minWidth="120px"
                width="180px"
              >
                <option value="arial" className="options">
                  Arial
                </option>
                <option value="helvetica" className="options">
                  Helvetica
                </option>
                <option value="times" className="options">
                  Times New Roman
                </option>
                <option value="courier" className="options">
                  Courier New
                </option>
                <option value="verdana" className="options">
                  Verdana
                </option>
              </Select>
            </div>
            <div className="choose_color">
              <Text className="color">Color</Text>
              <Select
                placeholder="Choose color"
                className="select_color"
                onChange={handleColorChange}
                minWidth="120px"
                width="180px"
              >
                <option value="red" className="options">
                  Red
                </option>
                <option value="yellow" className="options">
                  Yellow
                </option>
                <option value="gray" className="options">
                  Gray
                </option>
                <option value="green" className="options">
                  Green
                </option>
                <option value="teal" className="options">
                  Teal
                </option>
                <option value="blue" className="options">
                  Blue
                </option>
                <option value="cyan" className="options">
                  Cyan
                </option>
                <option value="purple" className="options">
                  Purple
                </option>
                <option value="pink" className="options">
                  Pink
                </option>
              </Select>
            </div>
            <div className="proceed_btn1">
              <Link
                to={{
                  pathname: `/${category}addproducts`,
                  search: `?store=${storeID}&category=${category}&theme=${selectedColor}`,
                }}
                onClick={handleProceed}
                className="proceed"
              >
                Proceed <span className="arrow">&#10132;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CustomizeTheme;
