import React from "react";
import "./mystore.css";
import { Image, Text, Input, Textarea,Button } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function MyStore() {
  return (
    <div className="store-details-page">
      <div className="header1">
        <Image className="header_logo" src="\images\logo.svg" />
        <div className="header_categories"></div>
      </div>
      <div className="line_div1">
        <Image className="line" src="/images/line_1.svg" />
      </div>
      <div className="categories_body">
        <div className="dashboard1">
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
            <Link to={"/"}>
              <Image className="back_dash" src="/images/logout.svg" />
            </Link>
            <Link className="dash_txt" to={"/"}>
              Log Out
            </Link>
          </div>
        </div>
        <div className="categories_container">
          <form>
            <div className="store-details">
              <div className="edit-store-details-box">
                <div className="edit_option">
                  <Text className="storetxt">Store Details</Text>
                  <Link to={"/editstore"}>
                    {/* <Text className="edit_txt" >Edit</Text> */}
                    <Image
                      className="edit_icon"
                      src="/images/edit_button.svg"
                    />
                  </Link>
                </div>
                <Text className="sub-txt">Store Name</Text>
                <Input
                  className="input-box"
                  placeholder="Enter Store Name"
                  name="storeName"
                />

                <Text className="sub-txt">Store Description</Text>
                <Textarea
                  className="input-box"
                  name="storeDescription"
                  placeholder="Enter Store Description"
                ></Textarea>
              </div>
            </div>
          </form>
          <div className="edit-products-container">
            <div className="product-card">
              <Card bg="#1A202C">
                <CardBody>
                  <Image className="edit-product-image" src="/images/home-prev.svg" />
                  <div className="edit-prdct-icon-txt">
                  <Text className="edit-product-txt">Product 1</Text>
                  {/* <Image className="edit-product-icon" src="/images/edit_button.svg"/> */}
                  </div>
                </CardBody>
                <CardFooter>
                  <Link to={'/clothingaddproducts'} className="edit-product-link">Edit</Link>
                </CardFooter>
              </Card>
            </div>
            <div className="product-card">
              <Card bg="#1A202C">
                <CardBody>
                  <Image className="edit-product-image" src="/images/home-prev.svg" />
                  <Text className="edit-product-txt">Product 2</Text>
                </CardBody>
                <CardFooter>
                <Link to={'/clothingaddproducts'} className="edit-product-link">Edit</Link>
                </CardFooter>
              </Card>
            </div>
            <div className="product-card">
              <Card bg="#1A202C">
                <CardBody>
                  <Image className="edit-product-image" src="/images/home-prev.svg" />
                  <Text className="edit-product-txt">Product 3</Text>
                </CardBody>
                <CardFooter>
                <Link to={'/clothingaddproducts'} className="edit-product-link">Edit</Link>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="edit-products-container">
            <div className="product-card">
              <Card bg="#1A202C">
                <CardBody>
                  <Image className="edit-product-image" src="/images/home-prev.svg" />
                  <Text className="edit-product-txt">Product 1</Text>
                </CardBody>
                <CardFooter>
                <Link to={'/clothingaddproducts'} className="edit-product-link">Edit</Link>
                </CardFooter>
              </Card>
            </div>
            <div className="product-card">
              <Card bg="#1A202C">
                <CardBody>
                  <Image className="edit-product-image" src="/images/home-prev.svg" />
                  <Text className="edit-product-txt">Product 2</Text>
                </CardBody>
                <CardFooter>
                <Link to={'/clothingaddproducts'} className="edit-product-link">Edit</Link>
                </CardFooter>
              </Card>
            </div>
            <div className="product-card">
              <Card bg="#1A202C">
                <CardBody>
                  <Image className="edit-product-image" src="/images/home-prev.svg" />
                  <Text className="edit-product-txt">Product 3</Text>
                </CardBody>
                <CardFooter>
                <Link to={'/clothingaddproducts'} className="edit-product-link">Edit</Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyStore;
