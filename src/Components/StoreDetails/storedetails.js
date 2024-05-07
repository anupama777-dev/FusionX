import "./storedetails.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Iframe from "react-iframe";
import {
  Image,
  Tabs,
  Tab,
  TabList,
  Text,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const StoreDetails = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [user, setUser] = useState({});
  const [form, setForm] = useState({
    storeName: "",
    storeLogo: null,
    storeDescription: "",
    storeEmail: "",
    storeContact: "",
    storeAddress: "",
    storeCountry: "",
    storeState: "",
    storeCity: "",
    razorpayKey: "",
    secretKey: "",
  });
  const [proceedClicked, setProceedClicked] = useState(false);

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
    if (token) {
      fetchUserData();
    }
  }, [token]);

  function updateForm(value) {
    setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!form.storeLogo) {
      alert("Please upload a logo before proceeding");
      return;
    }
    const formData = new FormData();
    formData.append("username", user.username);
    formData.append("storeLogo", form.storeLogo);
    formData.append("storeName", form.storeName);
    formData.append("storeDescription", form.storeDescription);
    formData.append("storeEmail", form.storeEmail);
    formData.append("storeContact", form.storeContact);
    formData.append("storeAddress", form.storeAddress);
    formData.append("storeCountry", form.storeCountry);
    formData.append("storeState", form.storeState);
    formData.append("storeCity", form.storeCity);
    formData.append("razorpayKey", form.razorpayKey);
    formData.append("secretKey", form.secretKey);
    try {
      const response = await axios.post(
        "http://localhost:3001/storedetails",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const newStoreId = response.data.store_id;
      console.log("Store id: ", newStoreId);
      setForm({
        storeName: "",
        storeLogo: null,
        storeDescription: "",
        storeEmail: "",
        storeContact: "",
        storeAddress: "",
        storeCountry: "",
        storeState: "",
        storeCity: "",
        razorpayKey: "",
        secretKey: "",
      });
      navigate(`/categories?store=${newStoreId}`);
    } catch (error) {
      console.error("Error creating store:", error.message);
    }
  }
  function handleLogoChange(e) {
    updateForm({ storeLogo: e.target.files[0] });
  }
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  const [chatboxOpen, setChatboxOpen] = useState(false);
  const toggleChatbox = () => {
    setChatboxOpen(!chatboxOpen);
  };
  return (
    <div className="store-details-page">
      <div className="header1">
        <Image className="header_logo" src="\images\logo.svg" />
        <div className="header_categories">
          <Tabs className="tabs" variant="unstyled">
            <TabList>
              <Tab _isselected="true">Store Details</Tab>
              <Tab isDisabled className="disabled">
                Categories
              </Tab>
              <Tab isDisabled className="disabled">
                Choose Theme
              </Tab>
              <Tab isDisabled className="disabled">
                Customize theme
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
            <Link className="dash_txt" to={"/"} onClick={handleLogout}>
              Log Out
            </Link>
          </div>
        </div>

        <div className="categories_container">
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
          <form onSubmit={onSubmit}>
            <div className="store-details">
              <div className="store-details-box">
                <Text className="storetxt">Store Details</Text>
                <div className="text">
                  <Text className="sub-txt">Store Name</Text>
                  <Text className="asterisk">*</Text>
                </div>
                <Input
                  className="input-box"
                  placeholder="Enter Store Name"
                  name="storeName"
                  value={form.storeName}
                  onChange={(e) => updateForm({ storeName: e.target.value })}
                  required
                />

                <div className="text">
                  <Text className="sub-txt">Upload Logo</Text>
                  <Text className="asterisk">*</Text>
                </div>
                <div className="upload-box">
                  <label className="upload-button">
                    Upload
                    <input
                      type="file"
                      name="logo"
                      style={{ display: "none" }}
                      accept=".jpg, .jpeg, .png, .pdf,.svg"
                      onChange={handleLogoChange}
                      required
                    />
                  </label>
                  {form.storeLogo && <Text>{form.storeLogo.name}</Text>}
                  {proceedClicked && !form.storeLogo && (
                    <div className="alert-txt">Please upload a logo.</div>
                  )}
                  <Text className="upload-txt">
                    .jpg , .jpeg , .pdf , .svg files
                  </Text>
                </div>

                <div className="text">
                  <Text className="sub-txt">Store Description</Text>
                  <Text className="asterisk">*</Text>
                </div>
                <Textarea
                  className="input-box"
                  name="storeDescription"
                  placeholder="Enter Store Description"
                  value={form.storeDescription}
                  onChange={(e) =>
                    updateForm({ storeDescription: e.target.value })
                  }
                  required
                ></Textarea>
              </div>

              <div className="store-contact-details-box">
                <Text className="storetxt">Store Contact Details</Text>
                <div className="text">
                  <Text className="sub-txt">Email ID</Text>
                  <Text className="asterisk">*</Text>
                </div>
                <Input
                  className="input-box"
                  placeholder="Enter Email ID"
                  name="storeEmail"
                  value={form.storeEmail}
                  onChange={(e) => updateForm({ storeEmail: e.target.value })}
                  required
                />

                <div className="text">
                  <Text className="sub-txt">Contact Number</Text>
                  <Text className="asterisk">*</Text>
                </div>
                <Input
                  className="input-box"
                  placeholder="Enter Contact Number"
                  name="storeContact"
                  value={form.storeContact}
                  onChange={(e) => updateForm({ storeContact: e.target.value })}
                  required
                />

                <div className="text">
                  <Text className="sub-txt">Address</Text>
                  <Text className="asterisk">*</Text>
                </div>
                <Input
                  className="input-box"
                  placeholder="Enter Address"
                  name="storeAddress"
                  value={form.storeAddress}
                  onChange={(e) => updateForm({ storeAddress: e.target.value })}
                  required
                />
              </div>

              <div className="billing-details-box">
                <Text className="storetxt">Billing Details</Text>
                <div className="text">
                  <Text className="sub-txt">Country</Text>
                  <Text className="asterisk">*</Text>
                </div>
                <Input
                  className="input-box"
                  placeholder="Enter Country"
                  name="storeCountry"
                  value={form.storeCountry}
                  onChange={(e) => updateForm({ storeCountry: e.target.value })}
                  required
                />

                <div className="text">
                  <Text className="sub-txt">State</Text>
                  <Text className="asterisk">*</Text>
                </div>
                <Input
                  className="input-box"
                  placeholder="Enter State"
                  name="storeState"
                  value={form.storeState}
                  onChange={(e) => updateForm({ storeState: e.target.value })}
                  required
                />

                <div className="text">
                  <Text className="sub-txt">City</Text>
                  <Text className="asterisk">*</Text>
                </div>
                <Input
                  className="input-box"
                  placeholder="Enter City"
                  name="storeCity"
                  value={form.storeCity}
                  onChange={(e) => updateForm({ storeCity: e.target.value })}
                  required
                />

                <div className="text">
                  <Text className="sub-txt">Razorpay Key</Text>
                  <Text className="asterisk">*</Text>
                </div>
                <Input
                  className="input-box"
                  placeholder="Enter Razorpay Key"
                  name="razorpayKey"
                  value={form.razorpayKey}
                  onChange={(e) => updateForm({ razorpayKey: e.target.value })}
                  required
                />

                <div className="text">
                  <Text className="sub-txt">Secret Key</Text>
                  <Text className="asterisk">*</Text>
                </div>
                <Input
                  className="input-box"
                  placeholder="Enter Secret Key"
                  name="secretKey"
                  value={form.secretKey}
                  onChange={(e) => updateForm({ secretKey: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="proceed_btn">
              <button
                className="proceed"
                type="submit"
                onClick={() => setProceedClicked(true)}
              >
                Proceed <span className="arrow">&#10132;</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StoreDetails;
