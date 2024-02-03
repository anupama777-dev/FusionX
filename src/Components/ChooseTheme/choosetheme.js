import './choosetheme.css';
import {Box, Image, Text, Tab, Tabs, TabList} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const ChooseTheme = () => {
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
                    <Link to={'/categories'}><Tab>Categories</Tab></Link>
                    <Tab _selected={'gray.300'}>Choose Theme</Tab>
                    <Tab isDisabled>Customize Theme</Tab>
                    <Tab isDisabled>Store Details</Tab>
                    <Tab isDisabled>Add Products</Tab>
                </TabList>
            </Tabs>
            <br/>
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