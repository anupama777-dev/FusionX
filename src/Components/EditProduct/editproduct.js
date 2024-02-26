import React, { useState, useEffect } from "react";
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
  Select,
  Stack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const EditProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const storeID = searchParams.get("store");
  const category = searchParams.get("category");
  console.log('Category: ', category)
  const productID = searchParams.get("product");
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState({});
  const [image, setImage] = useState(null);
  const [sizeChart, setSizeChart] = useState(null);
  const [colorChange, setColorChange] = useState(false);
  const [materialChange, setMaterialChange] = useState(false);
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/editproduct/?store=${storeID}&category=${category}&product=${productID}`
        );
        setProductData(response.data);
        if (category === "clothing") {
          setProductData((prevProductData) => ({
            ...prevProductData,
            productSizeList: [],
          }));
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stores:", error);
        setProductData({});
        setLoading(false);
      }
    };
    fetchProductData();
  }, [storeID, category, productID]);
  if (loading) {
    return <div>Loading...</div>;
  }
  function updateFormColor(value) {
    setProductData((prev) => {
      setColorChange(true);
      return { ...prev, ...value };
    });
  }
  function updateFormMaterial(value) {
    setProductData((prev) => {
      setMaterialChange(true);
      return { ...prev, ...value };
    });
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const handleSizeChartChange = (e) => {
    const file = e.target.files[0];
    setSizeChart(file);
  };
  const handleTaxChange = (e) => {
    const isChecked = e.target.checked;
    const updatedPAT = isChecked ? productData.productPAT : "";
    console.log("PAT: ", updatedPAT);
    setProductData((productData) => ({
      ...productData,
      productTax: isChecked,
      productPAT: updatedPAT,
    }));
  };
  const handleSizeChange = (size) => {
    setProductData((prevProductData) => ({
      ...prevProductData,
      productSizeList: prevProductData.productSizeList.includes(size)
        ? prevProductData.productSizeList.filter((s) => s !== size)
        : [...prevProductData.productSizeList, size],
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (image) {
        formData.append("productImage", image);
      }
      if (sizeChart) {
        formData.append("productSizeChart", sizeChart);
      }
      for (const key in productData) {
        formData.append(key, productData[key]);
      }
      await axios.post(
        `http://localhost:3001/editproduct/?store=${storeID}&category=${category}&product=${productID}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
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
                Edit Product
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
            <Link className="dash_txt" to={"/"}>
              Log Out
            </Link>
          </div>
        </div>
        <div className="categories_container">
          <form onSubmit={handleSubmit}>
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
                  value={productData.productType}
                  onChange={handleInputChange}
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
                  value={productData.productName}
                  onChange={handleInputChange}
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
                  {image === null ? (
                    productData.productImage && (
                      <Text>
                        {productData.productImage.image
                          .split(/[0-9]{13}/)
                          .pop()}
                      </Text>
                    )
                  ) : (
                    <Text>{image.name}</Text>
                  )}
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
                  value={productData.productDescription}
                  onChange={handleInputChange}
                  required
                ></Textarea>
                {category === "food" ||
                  (category === "grocery" && (
                    <div className="text">
                      <Text className="sub-txt">Food Preference</Text>
                      <Text className="asterisk">*</Text>
                    </div>
                  ))}
                {category === "food" ||
                  (category === "grocery" && (
                    <RadioGroup
                      value={productData.productFoodPref}
                      onChange={(value) =>
                        handleInputChange({
                          target: { name: "productFoodPref", value },
                        })
                      }
                      required
                    >
                      <Stack direction="row" className="checkbox">
                        <Radio value="Vegetarian">Vegetarian</Radio>
                        <Radio value="Non-Vegetarian">Non-Vegetarian</Radio>
                        <Radio value="Vegan">Vegan</Radio>
                      </Stack>
                    </RadioGroup>
                  ))}
                {category === "health" ||
                  (category === "others" && (
                    <div className="text">
                      <Text className="sub-txt">Product Features</Text>
                      {category !== "others" && (
                      <Text className="asterisk">*</Text>
                      )}
                    </div>
                  ))}
                {category === "health" ||
                  (category === "others" && (
                    <RadioGroup
                      value={productData.productFeatures}
                      onChange={(value) =>
                        handleInputChange({
                          target: { name: "productFeatures", value },
                        })
                      }
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
                  ))}
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
                  value={productData.productPrice}
                  onChange={handleInputChange}
                  required
                />
                <Text className="sub-txt">Price After Tax</Text>
                <Input
                  className="input-box"
                  placeholder="Enter Cost Per Item"
                  name="productPAT"
                  value={productData.productPAT}
                  onChange={handleInputChange}
                  disabled={!productData.productTax}
                />
                <Checkbox
                  className="sub-txt"
                  isChecked={productData.productTax}
                  onChange={handleTaxChange}
                >
                  Charge Tax on this product
                </Checkbox>
              </div>
              {category === "clothing" ||
                (category === "others" && (
                  <div className="sizing-details-box">
                    <Text className="storetxt">Sizing Details</Text>
                    <div className="text">
                      <Text className="sub-txt">Size Chart</Text>
                      {category !== "others" && (
                      <Text className="asterisk">*</Text>
                      )}
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
                          isChecked={productData.productSizeList.includes(size)}
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
                          isChecked={productData.productSizeList.includes(size)}
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
                          isChecked={productData.productSizeList.includes(size)}
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
                          isChecked={productData.productSizeList.includes(size)}
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
                          isChecked={productData.productSizeList.includes(size)}
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
                          isChecked={productData.productSizeList.includes(size)}
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
                          onChange={handleSizeChartChange}
                        />
                      </label>
                      {sizeChart === null ? (
                        productData.productSizeChart.image && (
                          <Text>
                            {productData.productSizeChart.image
                              .split(/[0-9]{13}/)
                              .pop()}
                          </Text>
                        )
                      ) : (
                        <Text>{sizeChart.name}</Text>
                      )}
                      <Text className="upload-txt">
                        .jpg , .jpeg , .pdf , .svg files
                      </Text>
                    </div>
                  </div>
                ))}
              {category === "electronics" ||
                category === "food" ||
                category === "grocery" ||
                (category === "others" && (
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
                      value={productData.productWeight}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="text">
                      <Text className="sub-txt">Weight Unit</Text>
                      <Text className="asterisk">*</Text>
                    </div>
                    <Select
                      placeholder="Choose Weight Unit"
                      className="input-box"
                      width="20vw"
                      height="40px"
                      name="productWeightUnit"
                      value={productData.productWeightUnit}
                      onChange={handleInputChange}
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
                ))}
              {category === "clothing" ||
                category === "electronics" ||
                (category === "others" && (
                  <div className="color-details-box">
                    <Text className="storetxt">Color Details</Text>
                    <Text className="sub-txt">Number of Colors</Text>
                    {colorChange ? (
                      <Input
                        className="input-box"
                        placeholder="Enter the number of colors"
                        name="productColorCount"
                        value={productData.productColorList.length}
                        readOnly
                      />
                    ) : (
                      <Input
                        className="input-box"
                        placeholder="Enter the number of colors"
                        name="productColorCount"
                        value={
                          productData.productColorList[0].split(",").length
                        }
                        readOnly
                      />
                    )}
                    <div className="text">
                      <Text className="sub-txt">Colors</Text>
                      {category !== "others" && (
                        <Text className="asterisk">*</Text>
                      )}
                    </div>
                    <Input
                      className="input-box-1"
                      placeholder="Enter the colors (comma-separated)"
                      name="productColorList"
                      value={productData.productColorList.join(",")}
                      onChange={(e) => {
                        console.log("e: ", e.target.value);
                        updateFormColor({
                          productColorList: e.target.value.split(","),
                        });
                      }}
                      required={category !== "others"}
                    />
                  </div>
                ))}
              {category === "clothing" ||
                category === "electronics" ||
                (category === "others" && (
                  <div className="color-details-box">
                    <Text className="storetxt">Material Details</Text>
                    <Text className="sub-txt">Number of Materials</Text>
                    {materialChange ? (
                      <Input
                        className="input-box"
                        placeholder="Enter the number of colors"
                        name="productMaterialCount"
                        value={productData.productMaterialList.length}
                        readOnly
                      />
                    ) : (
                      <Input
                        className="input-box"
                        placeholder="Enter the number of colors"
                        name="productMaterialCount"
                        value={
                          productData.productMaterialList[0].split(",").length
                        }
                        readOnly
                      />
                    )}
                    <div className="text">
                      <Text className="sub-txt">Types of Materials</Text>
                      {category !== "others" && (
                      <Text className="asterisk">*</Text>
                      )}
                    </div>
                    <div className="color-box">
                      <Input
                        className="input-box-1"
                        placeholder="Enter the materials (comma-separated)"
                        name="productMaterialList"
                        value={productData.productMaterialList.join(",")}
                        onChange={(e) => {
                          console.log("e: ", e.target.value);
                          updateFormMaterial({
                            productMaterialList: e.target.value.split(","),
                          });
                        }}
                        required={category !== "others"}
                      />
                    </div>
                  </div>
                ))}
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
export default EditProduct;
