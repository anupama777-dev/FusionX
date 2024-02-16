import "./storedetails.css";
import {
  Image,
  Tabs,
  Tab,
  TabList,
  Text,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
const StoreDetails = () => {
  return (
    <div className="store-details-page">
      <div className="header1">
        <Image className="header_logo" src="\images\logo.svg" />
        <div className="header_categories">
          <Tabs className="tabs" variant="unstyled">
            <TabList>
            <Link to={"/categories"}>
                <Tab className="disabled">Categories</Tab>
              </Link>
              {/* <Tab isDisabled className="disabled">
                Choose Theme
              </Tab> */}
              <Link to={"/customizetheme"}>
                <Tab className="disabled">Customize Theme</Tab>
              </Link>
              <Tab _isSelected>Store Details</Tab>
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
            <Link className="dash_txt" to={"/logout"}>
              Log Out
            </Link>
          </div>
        </div>
        <div className="categories_container">
          <div classname="store-details">
            <div className="store-details-box">
              <Text className="storetxt">Store Details</Text>
              <Text className="sub-txt">Store Name</Text>
              <Input className="input-box" placeholder="Enter Store Name" />
              <Text className="sub-txt">Upload Logo</Text>
              <div className="upload-box">
                <Link className="upload-button">Upload</Link>
                <Text className="upload-txt">
                  .jpg , .jpeg , .pdf , .svg files
                </Text>
              </div>
              <Text className="sub-txt">Store Description</Text>
              <Textarea
                className="input-box"
                placeholder="Enter Store Description"
              ></Textarea>
            </div>
            <div className="store-contact-details-box">
              <Text className="storetxt">Store Contact Details</Text>
              <Text className="sub-txt">Email-ID</Text>
              <Input className="input-box" placeholder="Enter Email ID" />
              <Text className="sub-txt">Contact Number</Text>
              <Input className="input-box" placeholder="Enter Contact Number" />
              <Text className="sub-txt">Store Domain Name</Text>
              <Input
                className="input-box"
                placeholder="Enter Store Domain Name"
              />
            </div>
            <div className="billing-details-box">
              <Text className="storetxt">Billing Details</Text>
              <Text className="sub-txt">Country</Text>
              <Input className="input-box" placeholder="Enter Country" />
              <Text className="sub-txt">State</Text>
              <Input className="input-box" placeholder="Enter State" />
              <Text className="sub-txt">City</Text>
              <Input className="input-box" placeholder="Enter City" />
            </div>
          </div>
          <div className="proceed_btn">
            <Link to={"/addproducts"} className="proceed">
              Proceed <span className="arrow">&#10132;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    /* <HStack  className="pininput">
                    <PinInput type='alphanumeric' >
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                    </PinInput>
                </HStack>   */
  );
};
export default StoreDetails;