import './storedetails.css';
import {Box,Text,Image,Tabs,Tab,TabList, Input, Button, Textarea, HStack,PinInput,PinInputField,Link} from '@chakra-ui/react';
import { AiOutlineCaretRight } from 'react-icons/ai';
const StoreDetails = () => {
    return (
        <Box className="bg">
            <Box className="navigation">
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
                    <Tab _selected={'gray.300'}>Store Details &gt;</Tab>
                    <Tab isDisabled>Add Products</Tab>
                </TabList>
            </Tabs>

            <Box className="box">
                <Text className="storedetail">Store Details</Text>
                <Text className="storename">Store Name</Text>
                <Input className="storeinput" placeholder='Enter the Store Name' maxWidth='800px'/>
                <Text className="uploadlogo">Upload Logo</Text>
                <Box className='uploadbox'>
                    <Button className='upload' textColor='#8C8D93'variant='outline'>Upload</Button>  
                    <Text className='fileformat'>.jpg , .jpeg , .pdf , .svg files</Text>
                </Box>
                <Text className="storedesc">Store Description</Text>
                <Textarea className='descinput' placeholder='Enter the Store Description' maxWidth='800px'></Textarea>    
            </Box>
            <Box className='box1'>
                <Text className="storecontactdetail">Store Contact Details</Text>
                <Text className="emailid">Email ID</Text>
                <Input className="emailinput" placeholder='Enter the Email ID' maxWidth='800px'/>
                <Text className="contactnumber">Contact Number</Text>
                <Input className="contactinput" placeholder='Enter the Contact Number' maxWidth='800px'/>
                <Text className="storedomainname">Store Domain Name</Text>
                <Input className="storedomaininput" placeholder='Enter the Store Domain Name' maxWidth='800px'/>
            </Box>
            <Box className='box2'>
                <Text className="billingdetail">Billing Details</Text>
                <Text className="country">Country</Text>
                <Input className="countryinput" placeholder='Enter the Country' maxWidth='800px'/>
                <Text className="state">State</Text>
                <Input className="stateinput" placeholder='Enter the State' maxWidth='800px'/>
                <Text className="city">City</Text>
                <Input className="cityinput" placeholder='Enter the City' maxWidth='800px'/>
                <Text className="pin">PIN Number</Text>
                <HStack  className="pininput">
                    <PinInput type='alphanumeric' >
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                    </PinInput>
                </HStack>   
            </Box>
            <Link to={'/addproducts'}>
                <Button className='proceed1' rightIcon={<AiOutlineCaretRight/>}  textColor='#8C8D93' variant='outline'>Proceed</Button>
            </Link>
        </Box>
        );
    }
export default StoreDetails;