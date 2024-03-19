import React from "react";
import "./templatehome.css";
import { Image, Text, Input } from "@chakra-ui/react";
import { Link} from "react-router-dom";
function TemplateHomePage() {
    const selectedColor = localStorage.getItem('selectedColor');
    const selectedFont = localStorage.getItem('selectedFont');
    console.log(selectedFont)
  return (
    <div className={selectedColor === "blue" ? "template-home_page-blue" : 
                    selectedColor === 'red' ? 'template-home_page-red' :
                    selectedColor === 'green' ? 'template-home_page-green' :
                    selectedColor === 'yellow' ? 'template-home_page-yellow' :
                    selectedColor === 'pink' ? 'template-home_page-pink' :
                    selectedColor === 'purple' ? 'template-home_page-purple' :
                    selectedColor === 'orange' ? 'template-home_page-orange' :
                    selectedColor === 'teal' ? 'template-home_page-teal' :
                    selectedColor === 'cyan' ? 'template-home_page-cyan' :
                    selectedColor === 'gray' ? 'template-home_page-gray' : ''}>  
      <div className={selectedFont=== "arial" ? "template-font-1" :
                      selectedFont=== "georgia" ? "template-font-2" :
                      selectedFont=== "times" ? "template-font-3" :
                      selectedFont=== "courier" ? "template-font-4" :
                      selectedFont=== "verdana" ? "template-font-5" : "" }>                            
      <div className="template-homepage_header">
        <div className="logo_name">
        <Image className="template-header_logo" src="/images/logo.svg" />
        <Text className="store_name">Store Name</Text>
        </div>
        <div className="search_bar">
        <Image className="search_icon" src="images/search_icon.png" />
        <div className="input_box">
        <Input className="input_txt" type="text" fontSize='10px' height='4vh' placeholder="Search products"/>
        </div> 
        </div>
        <Link className="template-home_txt">Home</Link>
        <Link className="contact_us_txt">Contact Us</Link>
        <Link className="about_us_txt">About Us</Link>
        <Link className="account_txt" to="/Signup">Account</Link>
      </div>

      <div className="template-homepage_body">
        <div className="home_body_top">
        <div className="home_image">
          <Image className="home_image1" src={selectedColor==="blue" ? "/images/template-home-blue.svg":
                                              selectedColor === 'red' ? '/images/template-home-red.svg' :
                                              selectedColor === 'green' ? '/images/template-home-green.svg' :
                                              selectedColor === 'yellow' ? '/images/template-home-yellow.svg' :
                                              selectedColor === 'pink' ? '/images/template-home-pink.svg' :
                                              selectedColor === 'purple' ? '/images/template-home-purple.svg' :
                                              selectedColor === 'orange' ? '/images/template-home-orange.svg' :
                                              selectedColor === 'teal' ? '/images/template-home-teal.svg' :
                                              selectedColor === 'cyan' ? '/images/template-home-cyan.svg' :
                                              selectedColor === 'gray' ? '/images/template-home-gray.svg' : ''} />
        </div>
        <div className="home_store_txt">
          <Text className="store_name_txt">Store Name</Text>
          <Text classname="store_descriprion">Store Name Store Name Store Name Store Name Store Name Store Name Store Name Store Name Store Name Store Name Store Name Store Name Store Name Store Name Store Name Store Name Store Name Store Name Store Name Store Name Store Name Store Name Store Name Store Name Store Name</Text>
        </div>
        </div>
      <div className="homebody_product">
      <div className="products">
        <div className="product_container">
          <Image className="product_image" src="/images/product.svg" />
          <Text className="product_name">Product Name</Text>
          <Text className="product_price">Rs : 000</Text>
        </div>
        <div className="product_container">
          <Image className="product_image" src="/images/product.svg" />
          <Text className="product_name">Product Name</Text>
          <Text className="product_price">Rs : 000</Text>
        </div>
        <div className="product_container">
          <Image className="product_image" src="/images/product.svg" />
          <Text className="product_name">Product Name</Text>
          <Text className="product_price">Rs : 000</Text>
        </div>
      </div>

      <div className="products">
        <div className="product_container">
          <Image className="product_image" src="/images/product.svg" />
          <Text className="product_name">Product Name</Text>
          <Text className="product_price">Rs : 000</Text>
        </div>
        <div className="product_container">
          <Image className="product_image" src="/images/product.svg" />
          <Text className="product_name">Product Name</Text>
          <Text className="product_price">Rs : 000</Text>
        </div>
        <div className="product_container">
          <Image className="product_image" src="/images/product.svg" />
          <Text className="product_name">Product Name</Text>
          <Text className="product_price">Rs : 000</Text>
        </div>
      </div>

      <div className="products">
        <div className="product_container">
          <Image className="product_image" src="/images/product.svg" />
          <Text className="product_name">Product Name</Text>
          <Text className="product_price">Rs : 000</Text>
        </div>
        <div className="product_container">
          <Image className="product_image" src="/images/product.svg" />
          <Text className="product_name">Product Name</Text>
          <Text className="product_price">Rs : 000</Text>
        </div>
        <div className="product_container">
          <Image className="product_image" src="/images/product.svg" />
          <Text className="product_name">Product Name</Text>
          <Text className="product_price">Rs : 000</Text>
        </div>
      </div>

      <div className="products">
        <div className="product_container">
          <Image className="product_image" src="/images/product.svg" />
          <Text className="product_name">Product Name</Text>
          <Text className="product_price">Rs : 000</Text>
        </div>
        <div className="product_container">
          <Image className="product_image" src="/images/product.svg" />
          <Text className="product_name">Product Name</Text>
          <Text className="product_price">Rs : 000</Text>
        </div>
        <div className="product_container">
          <Image className="product_image" src="/images/product.svg" />
          <Text className="product_name">Product Name</Text>
          <Text className="product_price">Rs : 000</Text>
        </div>
      </div>
      </div>

      </div>
      <div className="homepage_footer">
        <div className="contact">
          <Text className="contact_footer_txt">Contact Us</Text>
          <Text>Store Name</Text>
          <Text>Email : abc@gmail.com</Text>
          <Text>Phone No: 0000000000</Text>
        </div>
        <div className="address">
          <Text className="address_txt">Address</Text>
          <Text>City</Text>
          <Text>State, Country</Text>
          <Text>PIN</Text>
        </div>
      </div>
    </div>
    </div>  
  );
}
export default TemplateHomePage;
