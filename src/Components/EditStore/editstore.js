import { React, useState, useEffect } from "react";
import "./editstore.css";
import { Image, Text, Input, Textarea } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";

function EditStore() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const storeID = searchParams.get("store");
  const [storeData, setStoreData] = useState({});
  const [logo, setLogo] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/editstore/${storeID}`
        );
        setStoreData(response.data[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stores:", error);
        setStoreData({});
        setLoading(false);
      }
    };
    fetchStoreData();
  }, [storeID]);

  if (loading) {
    return <div>Loading...</div>;
  }
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setLogo(file);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStoreData({ ...storeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (logo) {
        formData.append("storeLogo", logo);
      }
      for (const key in storeData) {
        formData.append(key, storeData[key]);
      }
      await axios.post(`http://localhost:3001/editstore/?${storeID}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate(`/mystore/?store=${storeID}`);
    } catch (error) {
      console.error("Error editing store:", error.message);
    }
  };
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
          <form onSubmit={handleSubmit}>
            <div className="store-details">
              <div className="store-details-box">
                <Text className="storetxt">Store Details</Text>
                <Text className="sub-txt">Store Name</Text>
                <Input
                  className="input-box"
                  placeholder="Enter Store Name"
                  name="storeName"
                  value={storeData.storeName || ""}
                  onChange={handleInputChange}
                />

                <Text className="sub-txt">Store Description</Text>
                <Textarea
                  className="input-box"
                  name="storeDescription"
                  placeholder="Enter Store Description"
                  value={storeData.storeDescription || ""}
                  onChange={handleInputChange}
                ></Textarea>

                <Text className="sub-txt">Change Logo</Text>
                <div className="upload-box">
                  <label className="upload-button">
                    Upload
                    <input
                      type="file"
                      name="storeLogo"
                      style={{ display: "none" }}
                      accept=".jpg, .jpeg, .png, .pdf,.svg"
                      onChange={handleLogoChange}
                    />
                  </label>
                  {logo === null
                    ? storeData.storeLogo && (
                        <Text>
                          {storeData.storeLogo.image.split(/[0-9]{13}/).pop()}
                        </Text>
                      )
                    : (
                        <Text>{logo.name}</Text>
                      )}
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
                  value={storeData.storeEmail || ""}
                  onChange={handleInputChange}
                />

                <Text className="sub-txt">Contact Number</Text>
                <Input
                  className="input-box"
                  placeholder="Enter Contact Number"
                  name="storeContact"
                  value={storeData.storeContact || ""}
                  onChange={handleInputChange}
                />

                <Text className="sub-txt">Address</Text>
                <Input
                  className="input-box"
                  placeholder="Enter Address"
                  name="storeAddress"
                  value={storeData.storeAddress || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="billing-details-box">
                <Text className="storetxt">Billing Details</Text>
                <Text className="sub-txt">Country</Text>
                <Input
                  className="input-box"
                  placeholder="Enter Country"
                  name="storeCountry"
                  value={storeData.storeCountry || ""}
                  onChange={handleInputChange}
                />

                <Text className="sub-txt">State</Text>
                <Input
                  className="input-box"
                  placeholder="Enter State"
                  name="storeState"
                  value={storeData.storeState || ""}
                  onChange={handleInputChange}
                />

                <Text className="sub-txt">City</Text>
                <Input
                  className="input-box"
                  placeholder="Enter City"
                  name="storeCity"
                  value={storeData.storeCity || ""}
                  onChange={handleInputChange}
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
