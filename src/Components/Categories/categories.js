import './categories.css';
import { Box, Image, Text, Tab, Tabs, TabList } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Categories = () => {
    return (
        <Box className='bg'>
            <Box className='dashboard'>
                <Image className="imagecategories" src='/images/logo.svg' />
                <Image className="home" src="/images/home.svg" />
                <Link className='hometxt' to={'/'}>Home</Link>
                <Image className="profile" src="/images/profile.svg" />
                <Link className='proftxt' to={'/profile'}>Profile</Link>
                <Image className="help" src="/images/help.svg" />
                <Link className='helptxt' to={'/help'}>How to Create?</Link>
                <Image className="dash" src="/images/logout.svg" />
                <Link className='dashtxt' to={'/userhome'}>Back to dashboard</Link>
            </Box>
            <Image className="line" src='/images/line_1.svg' />
            <Tabs className='tab' variant='unstyled'>
                <TabList>
                    <Tab _selected={'gray.300'}>Categories</Tab>
                    <Tab isDisabled>Choose Theme </Tab>
                    <Tab isDisabled>Customize Theme</Tab>
                    <Tab isDisabled>Store Details</Tab>
                    <Tab isDisabled>Add Products</Tab>
                </TabList>
            </Tabs>
            <br />
            <Box className='cat1'>
                <Link to={'/choosetheme'}><Image className='cat1img' src='/images/electronics.svg' /></Link>
                <Link to={'/choosetheme'}><Text className='cat1txt'>Electronics</Text></Link>
            </Box>
            <Box className='cat2'>
                <Link to={'/choosetheme'}><Image className='cat2img' src='/images/clothing.svg' /></Link>
                <Link to={'/choosetheme'}><Text className='cat2txt'>Clothing & Apparel</Text></Link>
            </Box>
            <Box className='cat3'>
                <Link to={'/choosetheme'}><Image className='cat3img' src='/images/grocery.svg' /></Link>
                <Link to={'/choosetheme'}><Text className='cat3txt'>Grocery</Text></Link>
            </Box>
            <Box className='cat4'>
                <Link to={'/choosetheme'}><Image className='cat4img' src='/images/food.svg' /></Link>
                <Link to={'/choosetheme'}><Text className='cat4txt'>Food & Beverages</Text></Link>
            </Box>
            <Box className='cat5'>
                <Link to={'/choosetheme'}><Image className='cat5img' src='/images/health.svg' /></Link>
                <Link to={'/choosetheme'}><Text className='cat5txt'>Health & Beauty</Text></Link>
            </Box>
            <Box className='cat6'>
                <Link to={'/choosetheme'}><Image className='cat6img' src='/images/others.svg' /></Link>
                <Link to={'/choosetheme'}><Text className='cat6txt'>Others</Text></Link>
            </Box>
            <Link to={'/choosetheme'} className='proceed'>Proceed <span className="arrow">&#10132;</span></Link>
        </Box>
    );
}
export default Categories;