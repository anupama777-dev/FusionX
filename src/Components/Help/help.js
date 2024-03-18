import "./help.css";
import { Image, Text } from "@chakra-ui/react";
const Help = () => {
  return (
    <div className="help_page">
      <div className="header1">
        <Image className="header_logo" src="/images/logo.svg" />
      </div>
      <div className="line_div1">
        <Image className="line" src="/images/line_1.svg" />
      </div>
      <div className="help-body">
        <div className="help-container">
          <div classname="help-box">
            <Image className="help" src="/Images/homepage.png"></Image>
            <Text className="help-text">
              Step 1: Home Page. Click on the button to get started.
            </Text>
          </div>

          <div classname="help-box">
            <Image className="help" src="/Images/signup.png"></Image>
            <Text className="help-text">
              Step 2: Proceed to sign up for an account. If you already have an
              account, log in.
            </Text>
          </div>

          <div classname="help-box">
            <Image className="help" src="/Images/login.png"></Image>
            <Text className="help-text">
              Step 3: Log in to your account. Upon successful login, you will be
              directed to the user dashboard.
            </Text>
          </div>

          <div classname="help-box">
            <Image className="help" src="/Images/userhome1.png"></Image>
            <Text className="help-text">
              Step 4: Click on the "Begin Now" button to initiate the website
              creation process.
            </Text>
          </div>

          <div classname="help-box">
            <Image className="help" src="/Images/storename.png"></Image>
            <Text className="help-text">
              Step 5: Provide essential details about your store, such as its
              name, logo, description, contact information, and billing details.
              Then, click the button to proceed.
            </Text>
          </div>

          <div classname="help-box">
            <Image className="help" src="/Images/categories.png"></Image>
            <Text className="help-text">
              Step 6: Select the appropriate category for your store and proceed
              by clicking the button.
            </Text>
          </div>

          <div classname="help-box">
            <Image className="help" src="/Images/choosetheme.png"></Image>
            <Text className="help-text">
              Step 7: Choose a theme that best suits your store's aesthetics.
              Click the button to proceed.
            </Text>
          </div>

          <div classname="help-box">
            <Image className="help" src="/Images/customizetheme.png"></Image>
            <Text className="help-text">
              Step 8: Customize the selected theme by adjusting colors and fonts
              according to your preferences. Click the button to proceed.
            </Text>
          </div>

          <div classname="help-box">
            <Image className="help" src="/Images/addproduct.png"></Image>
            <Text className="help-text">
              Step 9: Enter detailed information about each product, including
              type, name, image, description, pricing, sizing, weight, color,
              and material. To add more products, use the "Add Product" button;
              otherwise, proceed by clicking another button.
            </Text>
          </div>

          <div classname="help-box">
            <Image className="help" src="/Images/copylink.png"></Image>
            <Text className="help-text">
              Step 10: After completing the website creation process, copy the
              generated link and paste it into a browser to view the final
              website.
            </Text>
          </div>

          <div classname="help-box">
            <Image className="help" src="/Images/final.png"></Image>
            <Text className="help-text">
              View an example of the final website generated.
            </Text>
          </div>

          <div classname="help-box">
            <Image className="help" src="/Images/userhome.png"></Image>
            <Text className="help-text">
              The store you created will be shown in your user dashboard.
            </Text>
          </div>

          <div classname="help-box">
            <Image className="help" src="/Images/mystore.png"></Image>
            <Text className="help-text">
              You can edit the store details or delete the store from your
              dashboard.
            </Text>
          </div>

          <div classname="help-box">
            <Image className="help" src="/Images/mystore-1.png"></Image>
            <Text className="help-text" marginBottom="100px">
              You can edit individual product details or delete each product
              from your dashboard.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Help;
