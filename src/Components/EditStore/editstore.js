import React from "react";
import "./editstore.css";
import { Image, Text, Input, Textarea } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function EditStore() {
  return (
    <div className="store-details-page">
      <div className="header1">
        <Image className="header_logo" src="\images\logo.svg" />
        <div className="header_categories">
          <Text className="edit_store_txt">Edit Store Details</Text>
        </div>
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
              <div className="store-details-box">
                <Text className="storetxt">Store Details</Text>
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

                <Text className="sub-txt">Change Logo</Text>
                <div className="upload-box">
                  <label className="upload-button">
                    Upload
                    <input
                      type="file"
                      name="logo"
                      style={{ display: "none" }}
                      accept=".jpg, .jpeg, .png, .pdf,.svg"
                    />
                  </label>
                  <Text className="upload-txt">
                    .jpg , .jpeg , .pdf , .svg files
                  </Text>
                </div>
              </div>
              <div className="store-contact-details-box">
                <Text className="storetxt">Store Contact Details</Text>
                <Text className="sub-txt">Email-ID</Text>
                <Input
                  className="input-box"
                  placeholder="Enter Email ID"
                  name="storeEmail"
                />

                <Text className="sub-txt">Contact Number</Text>
                <Input
                  className="input-box"
                  placeholder="Enter Contact Number"
                  name="storeContact"
                />

                <Text className="sub-txt">Address</Text>
                <Input
                  className="input-box"
                  placeholder="Enter Address"
                  name="storeAddress"
                />
              </div>
              <div className="billing-details-box">
                <Text className="storetxt">Billing Details</Text>
                <Text className="sub-txt">Country</Text>
                <Input
                  className="input-box"
                  placeholder="Enter Country"
                  name="storeCountry"
                />

                <Text className="sub-txt">State</Text>
                <Input
                  className="input-box"
                  placeholder="Enter State"
                  name="storeState"
                />

                <Text className="sub-txt">City</Text>
                <Input
                  className="input-box"
                  placeholder="Enter City"
                  name="storeCity"
                />
              </div>
            </div>
            <div className="proceed_btn">
              <button className="proceed" type="submit">
                Proceed <span className="arrow">&#10132;</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default EditStore;
