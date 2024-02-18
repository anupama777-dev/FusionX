import React from "react";
import { Image, Tab, Tabs, TabList, Text, Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./customizetheme.css";
function CustomizeTheme() {
  return (
    <div className="customize_page">
      <div className="header1">
        <Image className="header_logo" src="\images\logo.svg" />
        <div className="header_categories">
          <Tabs className="tabs" variant="unstyled">
            <TabList>
              <Link to={"/categories"}>
                <Tab className="disabled">Categories</Tab>
              </Link>
              {/* <Link to={"/choosetheme"}>
                <Tab className="disabled">Choose Theme</Tab>
              </Link> */}
              <Tab _isselected>Customize Theme</Tab>
              <Tab isDisabled className="disabled">Store Details</Tab>
              <Tab isDisabled className="disabled">Add Products</Tab>
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
            <Link className="home_txt" to={"/userhome"}>Home</Link>
          </div>
          <div className="dash_items">
            <Image className="dashboard_profile" src="/images/profile.svg" />
            <Link className="profile_txt" to={"/profile"}>Profile</Link>
          </div>
          <div className="dash_items">
            <Image className="dashboard_help" src="/images/help.svg" />
            <Link className="help_txt" to={"/help"}>How to Create?</Link>
          </div>
          <div className="dash_items">
            <Image className="back_dash" src="/images/logout.svg" />
            <Link className="dash_txt" to={"/"}>Log Out</Link>
          </div>
        </div>
        <div className="customize_container">
          <div className="customize_theme_div">
            <div className="customize_theme">Theme</div>
          </div>
          <div className="customize_options">
            <div className="choose_font">
              <Text className="font">Font</Text>
              <Select
                placeholder="Choose font"
                className="select_font"
                minWidth="120px"
                width="180px">
                <option value="arial" className="options">Arial</option>
                <option value="helvetica" className="options">Helvetica</option>
                <option value="times" className="options">Times New Roman</option>
                <option value="courier" className="options">Courier New</option>
                <option value="verdana" className="options">Verdana</option>
              </Select>
            </div>
            <div className="choose_color">
              <Text className="color">Color</Text>
              <Select
                placeholder="Choose color"
                className="select_color"
                minWidth="120px"
                width="180px">
                <option value="red" className="options">Red</option>
                <option value="green" className="options">Green</option>
                <option value="blue" className="options">Blue</option>
                <option value="orange" className="options">Orange</option>
                <option value="black" className="options">Black</option>
              </Select>
            </div>
            <div className="proceed_btn1">
              <Link to={"/storedetails"} className="proceed">
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
