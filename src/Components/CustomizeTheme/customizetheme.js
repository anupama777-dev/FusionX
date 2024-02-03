import './customizetheme.css';
import { Box, Image, Text, Select } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CustomizeTheme = () => {
    return (
        <Box className='bg'>
            <Box className='dashboard'>
                <Image className="imagecategories" src='/images/logo.svg' />
                <Text className='font'>Font</Text>
                    <Select placeholder='Choose font' className='slctfont' maxWidth="220px">
                        <option value='arial' className='options'>Arial</option>
                        <option value='helvetica' className='options'>Helvetica</option>
                        <option value='times' className='options'>Times New Roman</option>
                        <option value='courier' className='options'>Courier New</option>
                        <option value='verdana' className='options'>Verdana</option>
                    </Select>
                <Text className='color'>Color</Text>
                <Select placeholder='Choose color' className='slctcolor' maxWidth='220px'>
                    <option value='red' className='options'>Red</option>
                    <option value='green' className='options'>Green</option>
                    <option value='blue' className='options'>Blue</option>
                    <option value='orange' className='options'>Orange</option>
                    <option value='black' className='options'>Black</option>
                </Select>
            </Box>
            <Image className="line" src='/images/line_1.svg' />
            <Link className='categories-nav-3' to={'/categories'}>Categories</Link>
            <Link className='theme-nav-1' to={'/choosetheme'}>Choose Theme</Link>
            <Link className='cust-theme-nav-3' to={'/customizetheme'}>Customize Theme</Link>
            <Link className='store-nav-1' to={'/storedetails'}>Store Details</Link>
            <Link className='addprod-nav-1' to={'/addproducts'}>Add Products</Link>
            <Image className='line-nav-3' src='/images/line_nav_cust.svg' />
            <Box className='body-3'>

            </Box>
            <Link to={'/storedetails'} className='proceed-3'>Proceed <span className="arrow">&#10132;</span></Link>
        </Box>
    );
}
export default CustomizeTheme;