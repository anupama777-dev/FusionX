
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
    RadioGroup,
    Button
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  import { useState } from "react";

  const OthersAddProducts = () => {

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
                <Link to={"/otherstheme"}>
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
              <div className="sizing-details-box">
              <Text className="storetxt">Sizing Details</Text>
              <Text className="sub-txt">Size Chart</Text>
              <HStack className="checkbox">
                <Checkbox>XXXS</Checkbox>
                <Checkbox className="checkbox-txt">XXS</Checkbox>
                <Checkbox className="checkbox-txt">XS</Checkbox>
                <Checkbox className="checkbox-txt">S</Checkbox>
                <Checkbox className="checkbox-txt">M</Checkbox>
                <Checkbox className="checkbox-txt">L</Checkbox>
                <Checkbox className="checkbox-txt">XL</Checkbox>
                <Checkbox className="checkbox-txt">XXL</Checkbox>
                <Checkbox className="checkbox-txt">XXXL</Checkbox>
                <Checkbox className="checkbox-txt">XXXXL</Checkbox>
              </HStack>
              <HStack className="checkbox1">
                <Checkbox>XXXS</Checkbox>
                <Checkbox className="checkbox-txt">XXS</Checkbox>
                <Checkbox className="checkbox-txt">XS</Checkbox>
                <Checkbox className="checkbox-txt">S</Checkbox>
                <Checkbox className="checkbox-txt">M</Checkbox>
              </HStack>
              <HStack className="checkbox1">
                <Checkbox>L</Checkbox>
                <Checkbox className="checkbox-txt">XL</Checkbox>
                <Checkbox className="checkbox-txt">XXL</Checkbox>
                <Checkbox className="checkbox-txt">XXXL</Checkbox>
                <Checkbox className="checkbox-txt">XXXXL</Checkbox>
              </HStack>
              <HStack className="checkbox2">
                <Checkbox>XXXS</Checkbox>
                <Checkbox className="checkbox-txt">XXS</Checkbox>
                <Checkbox className="checkbox-txt">XS</Checkbox>
              </HStack>
              <HStack className="checkbox2">
                <Checkbox>S</Checkbox>
                <Checkbox className="checkbox-txt">M</Checkbox>
                <Checkbox className="checkbox-txt">L</Checkbox>
                <Checkbox className="checkbox-txt">XL</Checkbox>

              </HStack>
              <HStack className="checkbox2">
                <Checkbox>XXL</Checkbox>
                <Checkbox className="checkbox-txt">XXXL</Checkbox>
                <Checkbox className="checkbox-txt">XXXXL</Checkbox>
              </HStack>
              <Text className="sub-txt">Upload Size Chart</Text>
              <div className="upload-box">
                <Link className="upload-button">Upload</Link>
                <Text className="upload-txt">
                  .jpg , .jpeg , .pdf , .svg files
                </Text>
              </div>
            </div>
            <div className="color-details-box">
              <Text className="storetxt">Color Details</Text>
              <Text className="sub-txt">Number of Color</Text>
              <Input
                className="input-box"
                placeholder="Enter the number of colors"
              />
              <Text className="sub-txt">Colors</Text>
              <div className="color-box">
                <Input className="input-box-1" placeholder="Enter the colors" />
                <Button
                  className="plus-box"
                  variant="outline"
                  color={"gray.400"}
                  fontSize="20px"
                >
                  +
                </Button>
              </div>
            </div>
            <div className="color-details-box">
              <Text className="storetxt">Material Details</Text>
              <Text className="sub-txt">Number of Materials</Text>
              <Input
                className="input-box"
                placeholder="Enter the number of materials"
              />
              <Text className="sub-txt">Types of Materials</Text>
              <div className="color-box">
                <Input
                  className="input-box-1"
                  placeholder="Enter the material name"
                />
                <Button
                  className="plus-box"
                  variant="outline"
                  color={"gray.400"}
                  fontSize="20px"
                >
                  +
                </Button>
              </div>
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
  export default OthersAddProducts;
  