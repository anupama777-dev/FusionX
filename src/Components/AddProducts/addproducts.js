import './addproducts.css';
import {Box,Image,Tab,Text,TabList,Tabs,Input,Select,Textarea,Checkbox,HStack, NumberInput,NumberDecrementStepper,NumberIncrementStepper,NumberInputField,NumberInputStepper,Button} from '@chakra-ui/react';
import { AiOutlineCaretRight } from 'react-icons/ai';
const AddProducts = () => {
    return (
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
        </Box>
        );
    }
export default AddProducts;