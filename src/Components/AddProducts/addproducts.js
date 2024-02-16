import "./addproducts.css";
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
  Button
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const AddProducts = () => {
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
              {/* <Link to={"/categories"}>
                <Tab className="disabled">Categories</Tab>
              </Link> */}
              <Link to={"/customizetheme"}>
                <Tab className="disabled">Customize Theme</Tab>
              </Link>
              <Link to={"/storedetails"}>
                <Tab className="disabled">Store Details</Tab>
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
            <Link className="dash_txt" to={"/logout"}>
              Log Out
            </Link>
          </div>
        </div>
        <div className="categories_container">
          <div classname="store-details">
            <div className="product-details-box">
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
            </div>
            <div className="pricing-details-box">
              <Text className="storetxt">Pricing Details</Text>
              <Text className="sub-txt">Price</Text>
              <Input className="input-box" placeholder="Enter Price" />
              <Text className="sub-txt">Cost Per Item</Text>
              <Input className="input-box" placeholder="Enter Cost Per Item" />
              <Checkbox className="sub-txt">
                Charge Tax on this product
              </Checkbox>
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
    /*<div className="proceed_btn">
               <Link to={"/choosetheme"} className="proceed">Proceed <span className="arrow">&#10132;</span></Link>
           </div>
        <Box className="bgadd">
            <Box className="navigation1">
                <Image className="logo" src="/images/logo.svg"></Image>
                <Text className="home">Home</Text>
                <Image className="homelogo" src="/images/Home.svg"></Image>
                <Text className="profile">Profile</Text>
                <Image className="profilelogo" src="/images/Profile.svg"></Image>
                <Text className="how">How to create?</Text>
                <Image className="howlogo" src="/images/Question.svg"></Image>
                <Text className="back">Back to Dashboard</Text>
                <Image className="backlogo" src="/images/Back.svg"></Image>
            </Box>
            <Image className="line_1" src="/images/line_1.svg"></Image>
            <Tabs className='tab' variant='unstyled'>
                <TabList>
                    <Tab isDisabled>Categories &gt; </Tab>
                    <Tab isDisabled >Choose Theme &gt; </Tab>
                    <Tab isDisabled >Customize Theme &gt; </Tab>
                    <Tab isDisabled>Store Details &gt;</Tab>
                    <Tab _selected={'gray.300'}>Add Products</Tab>
                </TabList>
            </Tabs>
            <Box className='prodbox'>
            <Text className="productdetail">Product Details</Text>
            <Text className="producttype">Product Type</Text>
            <Select className="storeinput" placeholder='Select the Product type' maxWidth='800px'>
                <option value='option1'>Women Clothing</option>
                <option value='option2'>Men Clothing</option>
                <option value='option3'>Baby Clothing</option>
                <option value='option4'>Children's Clothing</option>
                <option value='option5'>Footwear</option>
            </Select>
            <Text className="productname">Product Name</Text>
                <Input className="productinput" placeholder='Enter the Product Name' maxWidth='800px'/>
                <Text className="uploadimg">Upload Product Image</Text>
                <Box className='uploadimgbox'>
                <Button className='upload' textColor='#8C8D93'variant='outline'>Upload</Button>  
                    <Text className='fileformatimg'>.jpg , .jpeg , .pdf , .svg files</Text>
                </Box>
                <Text className="proddesc">Product Description</Text>
                <Textarea className='proddescinput' placeholder='Enter the Product Description' maxWidth='800px'></Textarea>    
            </Box>

            <Box className='pricebox'>
                <Text className="pricedetail">Price Details</Text>
                <Text className="price">Price</Text>
                <Input className="priceinput" placeholder='Enter the Price' maxWidth='800px'/>
                <Text className="costperproduct">Cost Per Product</Text>
                <Input className="costinput" placeholder='Enter the Cost Per Product' maxWidth='800px'/>
                <Checkbox className="tax">Charge Tax on this product</Checkbox>
            </Box>

            <Box className='sizebox'>
                <Text className='sizedetail'>Size Details</Text>
                <Text className="sizechart">Size Chart</Text>
                <HStack className="size" spacing={8}>
                    <Checkbox>XXXS</Checkbox>
                    <Checkbox>XXS</Checkbox>
                    <Checkbox>XS</Checkbox>
                    <Checkbox>S</Checkbox>
                    <Checkbox>M</Checkbox>
                    <Checkbox>L</Checkbox>
                    <Checkbox>XL</Checkbox>
                    <Checkbox>XXL</Checkbox>
                    <Checkbox>XXXL</Checkbox>
                    <Checkbox>XXXXL</Checkbox>
                </HStack>
                <Text className="uploadsize">Upload Size Chart</Text>
                <Box className='uploadsizechart'>
                <Button className='upload' textColor='#8C8D93'variant='outline'>Upload</Button>    
                    <Text className='fileformatsize'>.jpg , .jpeg , .pdf , .svg files</Text>
                </Box>
            </Box>
            <Box className='colorbox'>
                <Text className='colordetail'>Color Details</Text>
                <Text className="sizechart">Number of Colors</Text>
                <NumberInput className='noofcolor' maxWidth='800px'>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper color={'gray.300'}/>
                        <NumberDecrementStepper color={'gray.300'} />
                        </NumberInputStepper>
                </NumberInput>
                <Text className="colors">Colors</Text>
                <Input className="colorinput" placeholder='Enter the Color' maxWidth='754px'/>
                <Button className='plus'textColor='#8C8D93' variant='outline' fontSize='30px'>+</Button>
            </Box>

            <Box className='materialbox'>
                <Text className='colordetail'>Material Details</Text>
                <Text className="sizechart">Number of Materials</Text>
                <NumberInput className='noofcolor' maxWidth='800px'>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper color={'gray.300'}/>
                        <NumberDecrementStepper color={'gray.300'} />
                        </NumberInputStepper>
                </NumberInput>
                <Text className="colors">Colors</Text>
                <Input className="colorinput" placeholder='Enter the Materials' maxWidth='754px'/>
                <Button className='plus'textColor='#8C8D93' variant='outline' fontSize='30px'>+</Button>
            </Box>
            <Button className='proceed2' rightIcon={<AiOutlineCaretRight/>}  textColor='#8C8D93' variant='outline'>Proceed</Button>    
        </Box>*/
  );
};
export default AddProducts;
