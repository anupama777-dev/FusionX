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
              <Tab _isselected>Categories</Tab>
              {/* <Tab isDisabled className="disabled">
                Choose Theme
              </Tab> */}
              <Tab isDisabled className="disabled">
                Customize Theme
              </Tab>
              <Tab isDisabled className="disabled">
                Store Details
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
            <Link className="home_txt" to={"/"}>
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
            <Link className="dash_txt" to={"/userhome"}>
              Back to Home
            </Link>
          </div>
        </div>
        <div className="categories_container">
          <div className="cat1">
            <div className="cat">
                <Image className="cat_img" src="/images/electronics.svg" />
                <Text className="cat_txt">Electronics</Text>
            </div>
            <div className="cat">
                <Image className="cat_img" src="/images/clothing.svg" />
                <Text className="cat_txt">Clothing & Apparel</Text>
            </div>
            <div className="cat">
                <Image className="cat_img" src="/images/grocery.svg" />
                <Text className="cat_txt">Grocery</Text>
            </div>
          </div>
          <div className="cat2">
            <div className="cat">
                <Image className="cat_img" src="/images/food.svg" />
                <Text className="cat_txt">Food & Beverages</Text>
            </div>
            <div className="cat">
                <Image className="cat_img" src="/images/health.svg" />
                <Text className="cat_txt">Health & Beauty</Text>
            </div>
            <div className="cat">
                <Image className="others_img" src="/images/others.svg" />
                <Text className="others_txt">Others</Text>
            </div>
          </div>

          <div className="cat1_md">
            <div className="cat">
                <Image className="cat_img" src="/images/electronics.svg" />
                <Text className="cat_txt">Electronics</Text>
            </div>
            <div className="cat">
                <Image className="cat_img" src="/images/clothing.svg" />
                <Text className="cat_txt">Clothing & Apparel</Text>
            </div>
          </div>
          <div className="cat2_md">
            <div className="cat">
                <Image className="cat_img" src="/images/grocery.svg" />
                <Text className="cat_txt">Grocery</Text>
            </div>
            <div className="cat">
                <Image className="cat_img" src="/images/food.svg" />
                <Text className="cat_txt">Food & Beverages</Text>
            </div>
          </div>
          <div className="cat3_md">
            <div className="cat">
                <Image className="cat_img" src="/images/health.svg" />
                <Text className="cat_txt">Health & Beauty</Text>
            </div>
            <div className="cat">
                <Image className="others_img" src="/images/others.svg" />
                <Text className="others_txt">Others</Text>
            </div>
          </div>
          <div className="proceed_btn">
            <Link to={"/customizetheme"} className="proceed">
              Proceed <span className="arrow">&#10132;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Categories;
