import "./clothingaddproducts.css";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import axios from "axios";
import {
  Image,
  Tab,
  Text,
  TabList,
  Tabs,
  Input,
  Textarea,
  Checkbox,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const ClothingAddProducts = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const storeID = searchParams.get("store");
  const category = searchParams.get("category");
  const theme = searchParams.get("theme")
  const [form, setForm] = useState({
    productType: "",
    productName: "",
    productImage: null,
    productDescription: "",
    productPrice: "",
    productPAT: "",
    productTax: false,
    productSizeList: [],
    productSizeChart: null,
    productColorList: [],
    productMaterialList: [],
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
    setForm((prevForm) => ({
      ...prevForm,
      productTax: isChecked,
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
  async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    const productColorCount = form.productColorList.length;
    const productMaterialCount = form.productMaterialList.length;
    formData.append("productType", form.productType);
    formData.append("productName", form.productName);
    formData.append("productImage", form.productImage);
    formData.append("productDescription", form.productDescription);
    formData.append("productPrice", form.productPrice);
    formData.append("productPAT", form.productPAT);
    formData.append("productTax", form.productTax);
    formData.append("productSizeList", form.productSizeList);
    formData.append("productSizeChart", form.productSizeChart);
    formData.append("productColorCount", productColorCount);
    formData.append("productColorList", form.productColorList);
    formData.append("productMaterialCount", productMaterialCount);
    formData.append("productMaterialList", form.productMaterialList);
    try {
      await axios.post("http://localhost:3001/clothingaddproducts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setForm({
        productType: "",
        productName: "",
        productImage: null,
        productDescription: "",
        productPrice: "",
        productPAT: "",
        productTax: false,
        productSizeList: [],
        productSizeChart: null,
        productColorList: [],
        productMaterialList: [],
      });
      navigate("/");
    } catch (error) {
      console.error("Error adding product:", error.message);
    }
  }
  return (
    <div className="store-details-page">
      <div className="header1">
        <Image className="header_logo" src="\images\logo.svg" />
        <div className="header_categories">
          <Tabs className="tabs" variant="unstyled">
            <TabList>
              <Link to={"/storedetails"}>
                <Tab className="disabled">Store Details</Tab>
              </Link>
              <Link to={{
                  pathname: "/categories",
                  search: `?store=${storeID}`,
                }}>
                <Tab className="disabled">Categories</Tab>
              </Link>
              <Link to={{
                  pathname: "/choosetheme",
                  search: `?store=${storeID}category=${category}`,
                }}>
                <Tab className="disabled">Choose Theme</Tab>
              </Link>
              <Link to={{
                  pathname: "/customizetheme",
                  search: `?store=${storeID}category=${category}&theme=${theme}`,
                }}>
                <Tab className="disabled">Customize Theme</Tab>
              </Link>
              <Tab _isselected="true">Add Products</Tab>
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
            <Link className="dash_txt" to={"/"}>
              Log Out
            </Link>
          </div>
        </div>
        <div className="categories_container">
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
                <Text className="sub-txt">Upload Product Image</Text>
                <div className="upload-box">
                  <label className="upload-button">
                    Upload
                    <input
                      type="file"
                      name="productImage"
                      style={{ display: "none" }}
                      accept=".jpg, .jpeg, .png, .pdf,.svg"
                      onChange={handleImageChange}
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
                  placeholder="Enter Cost Per Item"
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
              <div className="sizing-details-box">
                <Text className="storetxt">Sizing Details</Text>
                <div className="text">
                  <Text className="sub-txt">Size Chart</Text>
                  <Text className="asterisk">*</Text>
                </div>
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
                <div className="text">
                  <Text className="sub-txt">Colors</Text>
                  <Text className="asterisk">*</Text>
                </div>
                <Input
                  className="input-box-1"
                  placeholder="Enter the colors (comma-separated)"
                  name="productColorList"
                  value={form.productColorList.join(",")}
                  onChange={(e) =>
                    updateForm({ productColorList: e.target.value.split(",") })
                  }
                  required
                />
              </div>
              <div className="color-details-box">
                <Text className="storetxt">Material Details</Text>
                <Text className="sub-txt">Number of Materials</Text>
                <Input
                  className="input-box"
                  placeholder="Enter the number of materials"
                  name="productMaterialCount"
                  value={form.productMaterialList.length}
                  readOnly
                />
                <div className="text">
                  <Text className="sub-txt">Types of Materials</Text>
                  <Text className="asterisk">*</Text>
                </div>
                <div className="color-box">
                  <Input
                    className="input-box-1"
                    placeholder="Enter the materials (comma-separated)"
                    name="productMaterialList"
                    value={form.productMaterialList.join(",")}
                    onChange={(e) =>
                      updateForm({
                        productMaterialList: e.target.value.split(","),
                      })
                    }
                    required
                  />
                </div>
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
};
export default ClothingAddProducts;
