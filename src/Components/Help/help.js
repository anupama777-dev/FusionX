import "./help.css";
import { Image, Avatar, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Help = () => {

    const [user, setUser] = useState({});
    const token = localStorage.getItem("token");
  
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
  
    const handleLogout = () => {
      localStorage.removeItem("token");
    };
  return (
    <div className="help_page">
      <div className="header1">
        <Image className="header_logo" src="/images/logo.svg" />
      </div>
      <div className="line_div1">
        <Image className="line" src="/images/line_1.svg" />
      </div>
      <div className="userhomebody">
        <div className="dashboard1">
          <div className="dash_items1">
            <Avatar className="user" image="/images/user-solid.svg" />
            <div className="avatar_txt">
              <Text className="name_txt">{user.name}</Text>
              <Text className="email_txt">{user.email}</Text>
            </div>
          </div>
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
            <Link to={"/"} onClick={handleLogout}>
              <Image className="back_dash" src="/images/logout.svg" />
            </Link>
            <Link className="dash_txt" to={"/"} onClick={handleLogout}>
              Log Out
            </Link>
          </div>
        </div>
        <div className="help-container">
            <div classname="help-box">
               <Image className="help" src="/Images/homepage.png"></Image>
               <Text className="help-text">Step 1: Home Page. Click the button to get started.</Text>
            </div>

            <div classname="help-box">
               <Image className="help" src="/Images/signup.png"></Image>
               <Text className="help-text">Step 2: Proceed to sign up for an account.If one already exists, proceed to log in.</Text>
            </div>

            <div classname="help-box">
               <Image className="help" src="/Images/login.png"></Image>
               <Text className="help-text">Step 3: Log In to your account. If the credentials are correct, then the user will be navigated to the user dashboard</Text>
            </div>

            <div classname="help-box">
               <Image className="help" src="/Images/userhome1.png"></Image>
               <Text className="help-text">Step 4: To create the website, click on begin now button to proceed.</Text>
            </div>

            <div classname="help-box">
               <Image className="help" src="/Images/storename.png"></Image>
               <Text className="help-text">Step 5: Enter the necessary details about the store such as Store name, Store Logo, Store description, Store Contact Details and Billing Details and click the button to proceed.</Text>
            </div>

            <div classname="help-box">
               <Image className="help" src="/Images/categories.png"></Image>
               <Text className="help-text">Step 6: Select the required category and click the button to proceed.</Text>
            </div>

            <div classname="help-box">
               <Image className="help" src="/Images/choosetheme.png"></Image>
               <Text className="help-text">Step 7: Select the required theme and click the button to proceed.</Text>
            </div>

            <div classname="help-box">
               <Image className="help" src="/Images/customizetheme.png"></Image>
               <Text className="help-text">Step 8: Customize the theme by changing the colors and fonts and click the button to proceed.</Text>
            </div>

            <div classname="help-box">
               <Image className="help" src="/Images/addproduct.png"></Image>
               <Text className="help-text">Step 9: Enter the necessary details about each product such as Product type, Product name, Product Image, Product Description, Pricing details, Sizing details, Weight details, Color details and Material details.To add another product click the add product button, else click the proceed button.</Text>
            </div>

            <div classname="help-box">
               <Image className="help" src="/Images/copylink.png"></Image>
               <Text className="help-text">Step 10: Copy the link and paste in the browser to get the final completed Website.</Text>
            </div>

            <div classname="help-box">
               <Image className="help" src="/Images/final.png"></Image>
               <Text className="help-text">Example of the final website generated.</Text>
            </div>

            <div classname="help-box">
               <Image className="help" src="/Images/userhome.png"></Image>
               <Text className="help-text">The store created will be shown in the user dashboard.</Text>
            </div>

            <div classname="help-box">
               <Image className="help" src="/Images/mystore.png"></Image>
               <Text className="help-text">The user can edit the store details or delete the store.</Text>
            </div>

            <div classname="help-box">
               <Image className="help" src="/Images/mystore-1.png"></Image>
               <Text className="help-text" marginBottom='100px'>The user can edit indivitual product details or delete the indivitual Product.</Text>
            </div>
        </div>
    </div>
    </div>
  );
};
export default Help;
