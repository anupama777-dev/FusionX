import './categories.css';
import { Box, Image, Text} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Categories = () => {
    return (
        <Box className='bg'>
            <Box className='dashboard'>
                <Image className="imageuserhome" src='/images/logo.svg' />
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
            <Link className='categories-nav-1' to={'/categories'}>Categories</Link>
            <Link className='theme-nav-1' to={'/choosetheme'}>Choose Theme</Link>
            <Link className='cust-theme-nav-1' to={'/customizetheme'}>Customize Theme</Link>
            <Link className='store-nav-1' to={'/storedetails'}>Store Details</Link>
            <Link className='addprod-nav-1' to={'/addproducts'}>Add Products</Link>
            <Image className='line-nav-1' src='/images/line_nav.svg' />
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