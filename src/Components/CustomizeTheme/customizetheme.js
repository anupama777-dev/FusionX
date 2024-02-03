import './customizetheme.css';
import { Box, Image, Text, Select, Tab, Tabs, TabList } from '@chakra-ui/react';
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
            <Tabs className='tab' variant='unstyled'>
                <TabList>
                    <Link to={'/categories'}><Tab>Categories</Tab></Link>
                    <Link to={'/choosetheme'}><Tab>Choose Theme</Tab></Link>
                    <Tab _selected={'gray.300'}>Customize Theme</Tab>
                    <Tab isDisabled>Store Details</Tab>
                    <Tab isDisabled>Add Products</Tab>
                </TabList>
            </Tabs>
            <br/>
            <Box className='body-3'>

            </Box>
            <Link to={'/storedetails'} className='proceed-3'>Proceed <span className="arrow">&#10132;</span></Link>
        </Box>
    );
}
export default CustomizeTheme;