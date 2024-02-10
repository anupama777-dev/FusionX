import React from "react";
import "./homepage.css";
import { Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="home_page">
      <div className="header">
        <Image className="header_logo" src="\images\logo.svg" />
        <div className="header_nav">
          <div className="header_option">
            <Link to={"/menu"}>Menu</Link>
          </div>
          <div className="header_option">
            <Link to={"/"}>Home</Link>
          </div>
          <div className="header_option">
            <Link to={"/about"}>About</Link>
          </div>
          <div className="header_option">
            <Link to={"/contact"}>Contact</Link>
          </div>
        </div>
        <div className="header_signup">
          <div className="signup">
            <Link to={"/signup"}>Sign Up</Link>
          </div>
        </div>
      </div>
      <div className="line_div">
        <Image className="line" src="/images/line_1.svg" />
      </div>
      <div className="home1">
        <div className="left_eclipse">
          <Image className="eclipse_1" src="/images/eclipse1.svg" />
        </div>
        <div className="home_container">
          <Text className="title">Elevate Your Business. Ignite Success</Text>
          <Text className="subtitle">
            Lorem ipsum dolor sit amet consectetur. Vel laoreet ornare tellus
            erat a a sapien enim lobortis. Sit nec pulvinar mattis dolor varius
            in.
          </Text>
          <div className="create_store">
            <Link to={"/signup"}>Create My Store</Link>
          </div>
        </div>
        <div className="right_eclipse">
          <Image className="eclipse_2" src="/images/eclipse2.svg" />
        </div>
      </div>
    </div>
  );
}
export default HomePage;