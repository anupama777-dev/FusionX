import "./userhome.css";
import { Box, Image, Avatar, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineCaretRight } from "react-icons/ai";
const UserHome = () => {
  return (
    <div className="userhome_page">
      <div className="header1">
        <Image className="header_logo" src="/images/logo.svg" />
      </div>
      <div className="line_div">
        <Image className="line" src="/images/line_1.svg" />
      </div>
      <div className="userhomebody">
        <div className="dashboard1">
          <div className="dash_items1">
            <Avatar className="user" image="/images/user-solid.svg" />
            <div className="avatar_txt">
              <Text className="name_txt">Name</Text>
              <Text className="email_txt">abc@gmail.com</Text>
            </div>
          </div>
          <div className="dash_items">
            <Image className="dashboard_home" src="/images/home.svg" />
            <Text className="home_txt">Home</Text>
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
            <Image className="dashboard_category" src="/images/category.svg" />
            <Link className="category_txt" to={"/categories"}>
              Categories
            </Link>
          </div>
          <div className="dash_items">
            <Image className="back_dash" src="/images/logout.svg" />
            <Link className="dash_txt" to={"/logout"}>
              Log Out
            </Link>
          </div>
        </div>

        <div className="userhome_container">
          <div className="begin">
            <Text className="line1">
              Build And Launch Your <br />
              E-commerce Platform Now
            </Text>
            <Button
              className="beginbtn"
              rightIcon={<AiOutlineCaretRight />}
              variant="outline"
            >
              Begin Now
            </Button>
          </div>

          <div className="prev_work_container">
            <div className="b1">
              <Image className="previmg" src="/images/home-prev.svg" />
            </div>
            <div className="b2">
              <Image className="previmg" src="/images/home-prev.svg" />
            </div>
            <div className="b3">
              <Image className="previmg" src="/images/home-prev.svg" />
            </div>
          </div>

          <div className="prev_work_container1">
            <div className="b1">
              <Image className="previmg" src="/images/home-prev.svg" />
            </div>
            <div className="b2">
              <Image className="previmg" src="/images/home-prev.svg" />
            </div>
            <div className="b3">
              <Image className="previmg" src="/images/home-prev.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserHome;
