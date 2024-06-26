import React, { useState } from "react";
import { Image, Tab, Tabs, TabList, Text } from "@chakra-ui/react";
import "./categories.css";
import { Link, useLocation } from "react-router-dom";
import Iframe from "react-iframe";

function Categories() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const storeID = searchParams.get("store");
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  const [chatboxOpen, setChatboxOpen] = useState(false);
  const toggleChatbox = () => {
    setChatboxOpen(!chatboxOpen);
  };
  return (
    <div className="categories_page">
      <div className="header1">
        <Image className="header_logo" src="/images/logo.svg" />
        <div className="header_categories">
          <Tabs className="tabs" variant="unstyled">
            <TabList>
              <Link to="/storedetails">
              <Tab className="disabled">Store Details</Tab>
              </Link>
              <Tab _isselected="true">
                Categories
              </Tab>
              <Tab isDisabled className="disabled">
                Choose Theme
              </Tab>
              <Tab isDisabled className="disabled">
                Customize Theme
              </Tab>
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
      <div className="categories_body">
      <div className="chatbox">
          {chatboxOpen && (
            <div>
              <Iframe
                url="http://127.0.0.1:5500/standalone-frontend/base.html"
                width="400px"
                height="600px"
              />
            </div>
          )}
        </div>
        <button onClick={toggleChatbox} className="chatbox__button">
          <Image src="/images/chatbox-icon.svg" />
        </button>
        <div className="dashboard1">
          <div className="dash_items">
            <Link  to={"/userhome"}>
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
            <Link to={"/"}>
              <Image className="back_dash" src="/images/logout.svg" />
            </Link>
            <Link className="dash_txt" to={"/"} onClick={handleLogout}>
              Log Out
            </Link>
          </div>
        </div>
        <div className="categories_container">
          <div className="cat1">
            <Link to={{ pathname: "/choosetheme", search: `?store=${storeID}&category=electronics` }} className="cat">
                <Image className="cat_img" src="/images/electronics.svg" />
                <Text className="cat_txt">Electronics</Text>
            </Link>
            <Link to={{ pathname: "/choosetheme", search: `?store=${storeID}&category=clothing` }} className="cat">
                <Image className="cat_img" src="/images/clothing.svg" />
                <Text className="cat_txt">Clothing & Apparel</Text>
            </Link>
            <Link to={{ pathname: "/choosetheme", search: `?store=${storeID}&category=grocery` }} className="cat">
                <Image className="cat_img" src="/images/grocery.svg" />
                <Text className="cat_txt">Grocery</Text>
            </Link>
          </div>
          <div className="cat2">
          <Link to={{ pathname: "/choosetheme", search: `?store=${storeID}&category=food` }} className="cat">
                <Image className="cat_img" src="/images/food.svg" />
                <Text className="cat_txt">Food & Beverages</Text>
            </Link>
            <Link to={{ pathname: "/choosetheme", search: `?store=${storeID}&category=health` }} className="cat">
                <Image className="cat_img" src="/images/health.svg" />
                <Text className="cat_txt">Health & Beauty</Text>
            </Link>
            <Link to={{ pathname: "/choosetheme", search: `?store=${storeID}&category=others` }} className="cat">
                <Image className="others_img" src="/images/others.svg" />
                <Text className="others_txt">Others</Text>
            </Link>
          </div>

          <div className="cat1_md">
            <Link to={{ pathname: "/choosetheme", search: `?store=${storeID}&category=electronics` }} className="cat">
                <Image className="cat_img" src="/images/electronics.svg" />
                <Text className="cat_txt">Electronics</Text>
            </Link>
            <Link to={{ pathname: "/choosetheme", search: `?store=${storeID}&category=clothing` }} className="cat">
                <Image className="cat_img" src="/images/clothing.svg" />
                <Text className="cat_txt">Clothing & Apparel</Text>
            </Link>
          </div>
          <div className="cat2_md">
          <Link to={{ pathname: "/choosetheme", search: `?store=${storeID}&category=grocery` }} className="cat">
                <Image className="cat_img" src="/images/grocery.svg" />
                <Text className="cat_txt">Grocery</Text>
            </Link>
            <Link to={{ pathname: "/choosetheme", search: `?store=${storeID}&category=food` }} className="cat">
                <Image className="cat_img" src="/images/food.svg" />
                <Text className="cat_txt">Food & Beverages</Text>
            </Link>
          </div>
          <div className="cat3_md">
          <Link to={{ pathname: "/choosetheme", search: `?store=${storeID}&category=health` }} className="cat">
                <Image className="cat_img" src="/images/health.svg" />
                <Text className="cat_txt">Health & Beauty</Text>
            </Link>
            <Link to={{ pathname: "/choosetheme", search: `?store=${storeID}&category=others` }}  className="cat">
                <Image className="others_img" src="/images/others.svg" />
                <Text className="others_txt">Others</Text>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Categories;
