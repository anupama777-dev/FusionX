import "./foodaddproducts.css";
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
    Radio,
    HStack,
    Stack,
    RadioGroup
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  import { useState } from "react";

  const FoodAddProducts = () => {

  const [value, setValue] = useState('Vegetarian'); 
  const handleChange = (newValue) => {
    setValue(newValue);
  };
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
                {/* <Link to={"/categories"}>
                  <Tab className="disabled">Categories</Tab>
                </Link> */}
                <Link to={"/foodtheme"}>
                  <Tab className="disabled">Customize Theme</Tab>
                </Link>
                <Tab _isSelected>Add Products</Tab>
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
            <div classname="store-details">
              <div className="product-details-box1">
                <Text className="storetxt">Product Details</Text>
                <Text className="sub-txt">Product Type</Text>
                <Input className="input-box" placeholder="Enter Product Type" />
                <Text className="sub-txt">Product Name</Text>
                <Input className="input-box" placeholder="Enter Product Name" />
                <Text className="sub-txt">Upload Product Image</Text>
                <div className="upload-box">
                  <Link className="upload-button">Upload</Link>
                  <Text className="upload-txt">
                    .jpg , .jpeg , .pdf , .svg files
                  </Text>
                </div>
                <Text className="sub-txt">Product Description</Text>
                <Textarea
                  className="input-box"
                  placeholder="Enter Product Description"
                ></Textarea>
                <Text className="sub-txt">Food Preference</Text>
                <RadioGroup value={value} onChange={handleChange}>
                    <Stack direction='row' className="checkbox">
                        <Radio value="Vegetarian" name="diet">Vegetarian</Radio>
                        <Radio value="Non-Vegetarian" name="diet">Non-Vegetarian</Radio>
                        <Radio value="Vegan" name="diet">Vegan</Radio>
                    </Stack>
                </RadioGroup>

              </div>
              <div className="pricing-details-box">
                <Text className="storetxt">Pricing Details</Text>
                <Text className="sub-txt">Price</Text>
                <Input className="input-box" placeholder="Enter Price" />
                <Text className="sub-txt">Cost After Tax</Text>
                <Input className="input-box" placeholder="Enter Cost Per Item" />
                <Checkbox className="sub-txt">
                  Charge Tax on this product
                </Checkbox>
              </div>
              <div className="color-details-box">
                <Text className="storetxt">Weight Details</Text>
                <Text className="sub-txt">Product Weight</Text>
                <Input
                  className="input-box"
                  placeholder="Enter the weight of the product"
                />
                <Text className="sub-txt">Weight Unit</Text>
                <Select
                  placeholder="Choose Weight Unit"
                  className="input-box"
                  width="20vw"
                  height="40px">
                  <option value="kg" className="options">Kg</option>
                  <option value="g" className="options">g</option>
                  <option value="lb" className="options">lb</option>
                  <option value="oz" className="options">oz</option>
                </Select>
              </div>
            </div>
            <div className="proceed_btn">
              <Link to={"/"} className="proceed">
                Proceed <span className="arrow">&#10132;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default FoodAddProducts;
  