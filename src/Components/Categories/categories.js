import React from "react";
import { Image, Tab, Tabs, TabList, Text } from "@chakra-ui/react";
import "./categories.css";
import { Link } from "react-router-dom";

function Categories() {
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
        <div className="dashboard1">
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
        <div className="categories_container">
          <div className="cat1">
            <Link to={{ pathname: "/choosetheme", search: "?category=electronics" }} className="cat">
                <Image className="cat_img" src="/images/electronics.svg" />
                <Text className="cat_txt">Electronics</Text>
            </Link>
            <Link to={{ pathname: "/choosetheme", search: "?category=clothing" }} className="cat">
                <Image className="cat_img" src="/images/clothing.svg" />
                <Text className="cat_txt">Clothing & Apparel</Text>
            </Link>
            <Link to={{ pathname: "/choosetheme", search: "?category=grocery" }} className="cat">
                <Image className="cat_img" src="/images/grocery.svg" />
                <Text className="cat_txt">Grocery</Text>
            </Link>
          </div>
          <div className="cat2">
          <Link to={{ pathname: "/choosetheme", search: "?category=food" }} className="cat">
                <Image className="cat_img" src="/images/food.svg" />
                <Text className="cat_txt">Food & Beverages</Text>
            </Link>
            <Link to={{ pathname: "/choosetheme", search: "?category=health" }} className="cat">
                <Image className="cat_img" src="/images/health.svg" />
                <Text className="cat_txt">Health & Beauty</Text>
            </Link>
            <Link to={{ pathname: "/choosetheme", search: "?category=others" }} className="cat">
                <Image className="others_img" src="/images/others.svg" />
                <Text className="others_txt">Others</Text>
            </Link>
          </div>

          <div className="cat1_md">
            <Link to={{ pathname: "/choosetheme", search: "?category=electronics" }} className="cat">
                <Image className="cat_img" src="/images/electronics.svg" />
                <Text className="cat_txt">Electronics</Text>
            </Link>
            <Link to={{ pathname: "/choosetheme", search: "?category=clothing" }} className="cat">
                <Image className="cat_img" src="/images/clothing.svg" />
                <Text className="cat_txt">Clothing & Apparel</Text>
            </Link>
          </div>
          <div className="cat2_md">
          <Link to={{ pathname: "/choosetheme", search: "?category=grocery" }} className="cat">
                <Image className="cat_img" src="/images/grocery.svg" />
                <Text className="cat_txt">Grocery</Text>
            </Link>
            <Link to={{ pathname: "/choosetheme", search: "?category=food" }} className="cat">
                <Image className="cat_img" src="/images/food.svg" />
                <Text className="cat_txt">Food & Beverages</Text>
            </Link>
          </div>
          <div className="cat3_md">
          <Link to={{ pathname: "/choosetheme", search: "?category=health" }} className="cat">
                <Image className="cat_img" src="/images/health.svg" />
                <Text className="cat_txt">Health & Beauty</Text>
            </Link>
            <Link to={{ pathname: "/choosetheme", search: "?category=others" }}  className="cat">
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
