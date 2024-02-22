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
  Select,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const ElectronicsAddProducts = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  const theme = searchParams.get("theme")
  const [Error, setError] = useState('');
  const [form, setForm] = useState({
    productType: "",
    productName: "",
    productImage: null,
    productDescription: "",
    productPrice: "",
    productPAT: "",
    productTax: false,
    productWeight: "",
    productWeightUnit: "",
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
    formData.append("productWeight", form.productWeight);
    formData.append("productWeightUnit", form.productWeightUnit);
    formData.append("productColorCount", productColorCount);
    formData.append("productColorList", form.productColorList);
    formData.append("productMaterialCount", productMaterialCount);
    formData.append("productMaterialList", form.productMaterialList);
    try {
      await axios.post("http://localhost:3001/electronicsaddproducts", formData, {
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
        productWeight: "",
        productWeightUnit: "",
        productColorList: [],
        productMaterialList: [],
      });
      navigate("/");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError('Product Name Already Exists');
      } else {
        console.error("Error adding product:", error.message);
      }
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
              <Link to={"/categories"}>
                <Tab className="disabled">Categories</Tab>
              </Link>
              <Link to={`/choosetheme?category=${category}`}>
                <Tab className="disabled">Choose Theme</Tab>
              </Link>
              <Link to={`/customizetheme?category=${category}&theme=${theme}`}>
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
                <Text className="sub-txt">Product Type</Text>
                <Input
                  className="input-box"
                  placeholder="Enter Product Type"
                  name="productType"
                  value={form.productType}
                  onChange={(e) => updateForm({ productType: e.target.value })}
                />
                <Text className="sub-txt">Product Name</Text>
                <Input
                  className="input-box"
                  placeholder="Enter Product Name"
                  name="productName"
                  value={form.productName}
                  onChange={(e) => updateForm({ productName: e.target.value })}
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
                <Text className="sub-txt">Product Description</Text>
                <Textarea
                  className="input-box"
                  placeholder="Enter Product Description"
                  name="productDescription"
                  value={form.productDescription}
                  onChange={(e) =>
                    updateForm({ productDescription: e.target.value })
                  }
                ></Textarea>
              </div>
              <div className="pricing-details-box">
                <Text className="storetxt">Pricing Details</Text>
                <Text className="sub-txt">Price</Text>
                <Input
                  className="input-box"
                  placeholder="Enter Price"
                  name="productPrice"
                  value={form.productPrice}
                  onChange={(e) => updateForm({ productPrice: e.target.value })}
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
                <Text className="sub-txt">Product Weight</Text>
                <Input
                  className="input-box"
                  placeholder="Enter the weight of the product"
                  name="productWeight"
                  value={form.productWeight}
                  onChange={(e) => updateForm({ productWeight: e.target.value })}
                />
                <Text className="sub-txt">Weight Unit</Text>
                <Select
                  placeholder="Choose Weight Unit"
                  className="input-box"
                  width="20vw"
                  height="40px"
                  name="productWeightUnit"
                  value={form.productWeightUnit}
                  onChange={(e) => updateForm({ productWeightUnit: e.target.value })}
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
                  className="input-box"
                  placeholder="Enter the colors (comma-separated)"
                  name="productColorList"
                  value={form.productColorList.join(",")}
                  onChange={(e) =>
                    updateForm({ productColorList: e.target.value.split(",") })
                  }
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
                <Text className="sub-txt">Types of Materials</Text>
                  <Input
                    className="input-box"
                    placeholder="Enter the materials (comma-separated)"
                    name="productMaterialList"
                    value={form.productMaterialList.join(",")}
                    onChange={(e) =>
                      updateForm({
                        productMaterialList: e.target.value.split(","),
                      })
                    }
                  />
              </div>
            </div>
            {Error && <Text className="error-message">{Error}</Text>}
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
export default ElectronicsAddProducts;
