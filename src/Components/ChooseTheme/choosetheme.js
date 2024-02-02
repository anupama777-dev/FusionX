import './choosetheme.css';
import {Box, Image, Text} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const ChooseTheme = () => {
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
            <Link className='categories-nav-2' to={'/categories'}>Categories</Link>
            <Link className='theme-nav-2' to={'/choosetheme'}>Choose Theme</Link>
            <Link className='cust-theme-nav-1' to={'/customizetheme'}>Customize Theme</Link>
            <Link className='store-nav-1' to={'/storedetails'}>Store Details</Link>
            <Link className='addprod-nav-1' to={'/addproducts'}>Add Products</Link>
            <Image className='line-nav-2' src='/images/line_nav_theme.svg' />
            <Box className='theme1'>
                <Link to={'/customizetheme'}><Image className='theme1img' src='/images/theme1.jpg' /></Link>
                <Link to={'/customizetheme'}><Text className='theme1txt'>3D Windows 11/10 Theme</Text></Link>
            </Box>
            <Box className='theme2'>
                <Link to={'/customizetheme'}><Image className='theme2img' src='/images/theme2.jpg' /></Link>
                <Link to={'/customizetheme'}><Text className='theme2txt'>Mountain Themes</Text></Link>
            </Box>
            <Box className='theme3'>
                <Link to={'/customizetheme'}><Image className='theme3img' src='/images/theme3.jpg' /></Link>
                <Link to={'/customizetheme'}><Text className='theme3txt'>Dark Frost</Text></Link>
            </Box>
            <Box className='theme4'>
                <Link to={'/customizetheme'}><Image className='theme4img' src='/images/theme4.jpg' /></Link>
                <Link to={'/customizetheme'}><Text className='theme4txt'>Beautiful Nature</Text></Link>
            </Box>
            <Link to={'/customizetheme'} className='proceed-2'>Proceed <span className="arrow">&#10132;</span></Link>
        </Box>
        );
    }
export default ChooseTheme;