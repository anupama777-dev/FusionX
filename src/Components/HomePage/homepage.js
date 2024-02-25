import React,{useRef} from "react";
import "./homepage.css";
import { Image, Text,Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoLogoFacebook,IoLogoInstagram,IoLogoLinkedin } from "react-icons/io5";
function HomePage() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="home_page">
      <div className="header">
        <Image className="header_logo" src="\images\logo.svg" />
        <div className="header_nav">
          <div className="header_option">
            <Link to={"/menu"}>Menu</Link>
          </div>
          <div className="header_option">
            <Link onClick={() => scrollToSection(homeRef)}>Home</Link>
          </div>
          <div className="header_option">
            <Link onClick={() => scrollToSection(aboutRef)}>About</Link>
          </div>
          <div className="header_option">
            <Link onClick={() => scrollToSection(contactRef)}>Contact</Link>
          </div>
        </div>
        <div className="header_signup">
          <div className="signup">
            <Link to={"/signup"}>Sign Up</Link>
          </div>
        </div>
      </div>
      <div className="line_div" ref={homeRef}>
        <Image className="line" src="/images/line_1.svg" />
      </div>
      <div className="home1" >
        <div className="left_eclipse">
          <Image className="eclipse_1" src="/images/eclipse1.svg" />
        </div>
        <div className="home_container">
          <Text className="title">Elevate Your Business. Ignite Success</Text>
          <Text className="subtitle">
            Discover limitless potential with our ecommerce wizardry. Innovative
            solutions tailored to fuel your online success, making every click a
            step towards growth.{" "}
          </Text>{" "}
          <div className="create_store" ref={aboutRef}>
            <Link to={"/signup"}>
              Create My Store <span className="arrow">&#10132;</span>
            </Link>
          </div>
        </div>
        <div className="right_eclipse">
          <Image className="eclipse_2" src="/images/eclipse2.svg" />
        </div>
      </div>
      <div classname='about-us' >
          <Text className="about-us-title">About FusionX</Text>
          <Text className="subtitle-1">Welcome to FusionX, where we believe in the power of empowerment for small businesses, startups, and individuals in the ever-evolving online market. 
                                       Our platform is designed to provide users with a seamless and user-friendly experience, enabling them to create their own stores and amplify their sales potential. 
                                       <br/><br/>At FusionX, we understand the importance of attention to detail, which is why our features allow users to effortlessly add products with comprehensive descriptions and captivating visuals. 
                                       With customizable themes, colors, and fonts, users can tailor their stores to reflect their unique brand identities, standing out in the crowded digital landscape. 
                                       <br/><br/>Moreover, our hosting capabilities ensure that users can easily share their stores with the world, reaching their target audience with ease. 
                                       To further enhance the customer experience, our dedicated chatbot feature is on standby to promptly address any inquiries, facilitating a smooth and interactive shopping journey. 
                                       Join us at FusionX and embark on a journey towards online success.
          </Text>
      </div>
      <div className="line_div1" ref={contactRef}>
        <Image className="line" src="/images/line_1.svg" />
      </div>
      <div className="contact-us">
        <div className="contact-us1">
         <Text className="contact-us-txt1">Contact Us</Text>
         <Text className="contact-us-subtitle">Email ID : FusionX@gmail.com<br/>Contact Us : +91 9876543210</Text>
        </div>
        <div className="visit-us">
        <Text className="contact-us-txt2">Visit Us</Text>
         <Text className="contact-us-subtitle">Kochi, Kerala<br/>India, PIN-678912</Text>
        </div>
        <div className="reach-us">
        <Text className="contact-us-txt3">Reach Us</Text>
         <Text className="contact-us-subtitle"><Icon as={IoLogoFacebook} width='21px' height='21px'/> FusionX
                                              <br/><Icon as={IoLogoInstagram} width='21px' height='21px'/> FusionX
                                              <br/><Icon as={IoLogoLinkedin} width='21px' height='21px'/> FusionX</Text>
        </div>
      </div> 
    </div>
  );
}
export default HomePage;