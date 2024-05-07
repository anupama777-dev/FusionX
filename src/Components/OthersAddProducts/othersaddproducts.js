import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { FaCopy, FaTimes } from "react-icons/fa";
import axios from "axios";
import Iframe from "react-iframe";
import {
  Image,
  Tab,
  Text,
  TabList,
  Tabs,
  Input,
  Textarea,
  Checkbox,
  Select,
  HStack,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const OthersAddProducts = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const storeID = searchParams.get("store");
  const category = searchParams.get("category");
  const theme = searchParams.get("theme");
  const add = searchParams.get("add");
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({
    productType: "",
    productName: "",
    productImage: null,
    productDescription: "",
    productFeatures: "Vegetarian",
    productPrice: "",
    productPAT: "",
    productTax: false,
    productWeight: "",
    productWeightUnit: "",
    productSizeList: [],
    productSizeChart: null,
    productColorList: [],
    productMaterial: "",
  });
  function updateForm(value) {
    setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  function handleImageChange(e) {
    updateForm({ productImage: e.target.files[0] });
  }
  const handleTaxChange = (e) => {
    const isChecked = e.target.checked;
    const updatedPAT = isChecked ? form.productPAT : "";
    setForm((prevForm) => ({
      ...prevForm,
      productTax: isChecked,
      productPAT: updatedPAT,
    }));
  };
  function handleSizeChart(e) {
    updateForm({ productSizeChart: e.target.files[0] });
  }
  const handleSizeChange = (size) => {
    setForm((prevForm) => ({
      ...prevForm,
      productSizeList: prevForm.productSizeList.includes(size)
        ? prevForm.productSizeList.filter((s) => s !== size)
        : [...prevForm.productSizeList, size],
    }));
  };
  const handleAddMore = async (e) => {
    e.preventDefault();
    const requiredFields = [
      "productType",
      "productName",
      "productDescription",
      "productPrice",
      "productWeight",
      "productColorList",
      "productMaterial",
      "productImage",
      "productFeatures",
      "productSizeList",
      "productMaterial",
    ];
    const isFormValid = requiredFields.every((field) => !!form[field]);
    if (!isFormValid) {
      alert("Please fill in all required fields.");
      return;
    }
    try {
      await onSubmit(e);
      navigate(
        `/othersaddproducts?store=${storeID}&category=${category}&theme=${theme}`
      );
    } catch (error) {
      console.error("Error adding more products:", error.message);
    }
  };
  async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    const productColorCount = form.productColorList.length;
    const productMaterialCount = form.productMaterialList.length;
    formData.append("productType", form.productType);
    formData.append("productName", form.productName);
    formData.append("productImage", form.productImage);
    formData.append("productDescription", form.productDescription);
    formData.append("productFeatures", form.productFeatures);
    formData.append("productPrice", form.productPrice);
    formData.append("productPAT", form.productPAT);
    formData.append("productTax", form.productTax);
    formData.append("productWeight", form.productWeight);
    formData.append("productWeightUnit", form.productWeightUnit);
    formData.append("productSizeList", form.productSizeList);
    formData.append("productSizeChart", form.productSizeChart);
    formData.append("productColorCount", productColorCount);
    formData.append("productColorList", form.productColorList);
    formData.append("productMaterialCount", productMaterialCount);
    formData.append("productMaterial", form.productMaterial);
    try {
      await axios.post(
        `http://localhost:3001/othersaddproducts?store=${storeID}&category=others&theme=${theme}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setForm({
        productType: "",
        productName: "",
        productImage: null,
        productDescription: "",
        productFeatures: "Vegetarian",
        productPrice: "",
        productPAT: "",
        productTax: false,
        productWeight: "",
        productWeightUnit: "",
        productSizeList: [],
        productSizeChart: null,
        productColorList: [],
        productMaterial: "",
      });
      add === "1" && navigate(`/mystore?store=${storeID}`);
    } catch (error) {
      console.error("Error adding product:", error.message);
    }
  }
  async function addStoreLink(storeID, storeLink) {
    try {
      const encodedStoreLink = encodeURIComponent(storeLink);
      await axios.post(
        `http://localhost:3001/addStoreLink?store=${storeID}&link=${encodedStoreLink}`
      );
    } catch (error) {
      console.error("Error adding/updating store link:", error.message);
      throw error;
    }
  }
  const handleProceed = async (e) => {
    e.preventDefault();
    const requiredFields = [
      "productType",
      "productName",
      "productDescription",
      "productPrice",
      "productWeight",
      "productColorList",
      "productMaterial",
      "productImage",
      "productFeatures",
      "productSizeList",
      "productMaterial",
    ];
    const isFormValid = requiredFields.every((field) => !!form[field]);
    if (!isFormValid) {
      alert("Please fill in all required fields.");
      return;
    }
    const storeLink = `http://localhost:3002/store?store=${storeID}`;
    try {
      await onSubmit(e);
      await navigator.clipboard.writeText(storeLink);
      setShowPopup(true);
      await addStoreLink(storeID, storeLink);
    } catch (error) {
      console.error("Error submitting form or copying link:", error.message);
    }
  };
  const closePopup = () => {
    setShowPopup(false);
    navigate('/userhome')
  };
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
        {!add && (
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
                <Link
                  to={{
                    pathname: "/customizetheme",
                    search: `?store=${storeID}&category=${category}&theme=${theme}`,
                  }}
                >
                  <Tab className="disabled">Customize Theme</Tab>
                </Link>
                <Tab _isselected="true">Add Products</Tab>
              </TabList>
            </Tabs>
          </div>
        )}
        {add === "1" && (
          <div className="header_categories">
            <Tabs className="tabs" variant="unstyled">
              <TabList>
                <Tab
                  _isselected="true"
                  style={{
                    color: "#edf2f7",
                    fontSize: "22px",
                    fontWeight: "500",
                    opacity: "0.7",
                  }}
                >
                  Add Products
                </Tab>
              </TabList>
            </Tabs>
          </div>
        )}
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
          <form onSubmit={onSubmit}>
            <div className="store-details">
              <div className="product-details-box">
                <Text className="storetxt">Product Details</Text>
                <div className="text">
                  <Text className="sub-txt">Product Type</Text>
                  <Text className="asterisk">*</Text>
                </div>
                <Input
                  className="input-box"
                  placeholder="Enter Product Type"
                  name="productType"
                  value={form.productType}
                  onChange={(e) => updateForm({ productType: e.target.value })}
                  required
                />
                <div className="text">
                  <Text className="sub-txt">Product Name</Text>
                  <Text className="asterisk">*</Text>
                </div>
                <Input
                  className="input-box"
                  placeholder="Enter Product Name"
                  name="productName"
                  value={form.productName}
                  onChange={(e) => updateForm({ productName: e.target.value })}
                  required
                />
                <div className="text">
                  <Text className="sub-txt">Product Image</Text>
                  <Text className="asterisk">*</Text>
                </div>
                <div className="upload-box">
                  <label className="upload-button">
                    Upload
                    <input
                      type="file"
                      name="productImage"
                      style={{ display: "none" }}
                      accept=".jpg, .jpeg, .png, .pdf,.svg"
                      onChange={handleImageChange}
                      required
                    />
                  </label>
                  {form.productImage && <Text>{form.productImage.name}</Text>}
                  <Text className="upload-txt">
                    .jpg , .jpeg , .pdf , .svg files
                  </Text>
                </div>
                <div className="text">
                  <Text className="sub-txt">Product Description</Text>
                  <Text className="asterisk">*</Text>
                </div>
                <Textarea
                  className="input-box"
                  placeholder="Enter Product Description"
                  name="productDescription"
                  value={form.productDescription}
                  onChange={(e) =>
                    updateForm({ productDescription: e.target.value })
                  }
                  required
                ></Textarea>
                <div className="text">
                  <Text className="sub-txt">Product Features</Text>
                  <Text className="asterisk">*</Text>
                </div>
                <RadioGroup
                  value={form.productFeatures}
                  onChange={(value) => updateForm({ productFeatures: value })}
                  required
                >
                  <Stack direction="row" className="checkbox">
                    <Radio value="Vegetarian" name="diet">
                      Vegetarian
                    </Radio>
                    <Radio value="Non-Vegetarian" name="diet">
                      Recyclable
                    </Radio>
                    <Radio value="Cruelty-Free" name="diet">
                      Cruelty-Free
                    </Radio>
                    <Radio value="Vegan" name="diet">
                      Vegan
                    </Radio>
                  </Stack>
                </RadioGroup>
              </div>
              <div className="pricing-details-box">
                <Text className="storetxt">Pricing Details</Text>
                <div className="text">
                  <Text className="sub-txt">Price</Text>
                  <Text className="asterisk">*</Text>
                </div>
                <Input
                  className="input-box"
                  placeholder="Enter Price"
                  name="productPrice"
                  value={form.productPrice}
                  onChange={(e) => updateForm({ productPrice: e.target.value })}
                  required
                />
                <Text className="sub-txt">Price After Tax</Text>
                <Input
                  className="input-box"
                  placeholder="Enter Price After Tax"
                  name="productPAT"
                  value={form.productPAT}
                  onChange={(e) => updateForm({ productPAT: e.target.value })}
                  disabled={!form.productTax}
                />
                <Checkbox
                  className="sub-txt"
                  isChecked={form.productTax}
                  onChange={handleTaxChange}
                >
                  Charge Tax on this product
                </Checkbox>
              </div>
              <div className="color-details-box">
                <Text className="storetxt">Weight Details</Text>
                <div className="text">
                  <Text className="sub-txt">Product Weight</Text>
                  <Text className="asterisk">*</Text>
                </div>
                <Input
                  className="input-box"
                  placeholder="Enter the weight of the product"
                  name="productWeight"
                  value={form.productWeight}
                  onChange={(e) =>
                    updateForm({ productWeight: e.target.value })
                  }
                  required
                />
                <div className="text">
                  <Text className="sub-txt">Unit of Weight</Text>
                  <Text className="asterisk">*</Text>
                </div>
                <Select
                  placeholder="Choose Weight Unit"
                  className="input-box"
                  width="20vw"
                  height="40px"
                  name="productWeightUnit"
                  value={form.productWeightUnit}
                  onChange={(e) =>
                    updateForm({ productWeightUnit: e.target.value })
                  }
                  required
                >
                  <option value="kg" className="options">
                    Kg
                  </option>
                  <option value="g" className="options">
                    g
                  </option>
                  <option value="lb" className="options">
                    lb
                  </option>
                  <option value="oz" className="options">
                    oz
                  </option>
                </Select>
              </div>
              <div className="sizing-details-box">
                <Text className="storetxt">Sizing Details</Text>
                <Text className="sub-txt">Size Chart</Text>
                <HStack className="checkbox">
                  {[
                    "XXXS",
                    "XXS",
                    "XS",
                    "S",
                    "M",
                    "L",
                    "XL",
                    "XXL",
                    "XXXL",
                    "XXXXL",
                  ].map((size) => (
                    <Checkbox
                      className="checkbox-txt"
                      key={size}
                      isChecked={form.productSizeList.includes(size)}
                      onChange={() => handleSizeChange(size)}
                    >
                      {size}
                    </Checkbox>
                  ))}
                </HStack>
                <HStack className="checkbox1">
                  {["XXXS", "XXS", "XS", "S", "M"].map((size) => (
                    <Checkbox
                      className="checkbox-txt"
                      key={size}
                      isChecked={form.productSizeList.includes(size)}
                      onChange={() => handleSizeChange(size)}
                    >
                      {size}
                    </Checkbox>
                  ))}
                </HStack>
                <HStack className="checkbox1">
                  {["L", "XL", "XXL", "XXXL", "XXXXL"].map((size) => (
                    <Checkbox
                      className="checkbox-txt"
                      key={size}
                      isChecked={form.productSizeList.includes(size)}
                      onChange={() => handleSizeChange(size)}
                    >
                      {size}
                    </Checkbox>
                  ))}
                </HStack>
                <HStack className="checkbox2">
                  {["XXXS", "XXS", "XS"].map((size) => (
                    <Checkbox
                      className="checkbox-txt"
                      key={size}
                      isChecked={form.productSizeList.includes(size)}
                      onChange={() => handleSizeChange(size)}
                    >
                      {size}
                    </Checkbox>
                  ))}
                </HStack>
                <HStack className="checkbox2">
                  {["S", "M", "L", "XL"].map((size) => (
                    <Checkbox
                      className="checkbox-txt"
                      key={size}
                      isChecked={form.productSizeList.includes(size)}
                      onChange={() => handleSizeChange(size)}
                    >
                      {size}
                    </Checkbox>
                  ))}
                </HStack>
                <HStack className="checkbox2">
                  {["XXL", "XXXL", "XXXXL"].map((size) => (
                    <Checkbox
                      className="checkbox-txt"
                      key={size}
                      isChecked={form.productSizeList.includes(size)}
                      onChange={() => handleSizeChange(size)}
                    >
                      {size}
                    </Checkbox>
                  ))}
                </HStack>
                <Text className="sub-txt">Upload Size Chart</Text>
                <div className="upload-box">
                  <label className="upload-button">
                    Upload
                    <input
                      type="file"
                      name="productSizeChart"
                      style={{ display: "none" }}
                      accept=".jpg, .jpeg, .png, .pdf,.svg"
                      onChange={handleSizeChart}
                    />
                  </label>
                  {form.productSizeChart && (
                    <Text>{form.productSizeChart.name}</Text>
                  )}
                  <Text className="upload-txt">
                    .jpg , .jpeg , .pdf , .svg files
                  </Text>
                </div>
              </div>
              <div className="color-details-box">
                <Text className="storetxt">Color Details</Text>
                <Text className="sub-txt">Number of Colors</Text>
                <Input
                  className="input-box"
                  placeholder="Enter the number of colors"
                  name="productColorCount"
                  value={form.productColorList.length}
                  readOnly
                />
                <Text className="sub-txt">Colors</Text>
                <Input
                  className="input-box-1"
                  placeholder="Enter the colors (comma-separated)"
                  name="productColorList"
                  value={form.productColorList.join(",")}
                  onChange={(e) =>
                    updateForm({ productColorList: e.target.value.split(",") })
                  }
                />
              </div>
              <div className="color-details-box" style={{height: "100%"}}>
                <Text className="storetxt">Material Details</Text>
                <div className="text">
                  <Text className="sub-txt">Material</Text>
                  <Text className="asterisk">*</Text>
                </div>
                <Input
                  className="input-box"
                  style={{marginBottom: "60px"}}
                  placeholder="Enter the material"
                  name="productMaterial"
                  value={form.productMaterial}
                  onChange={(e) =>
                    updateForm({ productMaterial: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="proceed_btn">
            {add !== "1" && (
                <button className="add-more" onClick={handleAddMore}>
                  + Add More
                </button>
              )}
              {add === "1" ? (
                <button className="proceed" type="submit">
                  Proceed <span className="arrow">&#10132;</span>
                </button>
              ) : (
                <button className="proceed" onClick={handleProceed}>
                  Proceed <span className="arrow">&#10132;</span>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      {showPopup && (
        <div className="popup-background">
          <div className="popup-box">
            <div className="popup-content">
              <h2>Your store is ready. Here's the link to your store:</h2>
              <div className="link-container">
                <p>{`http://localhost:3002/store?store=${storeID}`}</p>
                <button
                  onClick={async () => {
                    const storeLink = `http://localhost:3002/store?store=${storeID}`;
                    await navigator.clipboard.writeText(storeLink);
                    alert("Link copied to clipboard!");
                  }}
                >
                  <FaCopy />
                </button>
              </div>
              <FaTimes className="close-icon" onClick={closePopup} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default OthersAddProducts;
