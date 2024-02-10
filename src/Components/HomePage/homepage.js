import './homepage.css';
import {Box, Button, Image,Link,Text} from '@chakra-ui/react';
import { AiOutlineArrowRight } from 'react-icons/ai';
const HomePage = () => {
    return (
      <Box className='bg'>
        <Image className="image" src='/images/logo.svg'/>
        <Box className='tool'>
            <Text className="menu">Menu</Text>
            <Text className="menu">Home</Text>
            <Text className="menu">About Us</Text>
            <Text className="menu">Contact Us</Text>
        </Box>
        <Image className="line" src='/images/line_1.svg'/>
        <Link to={'/signin'}>
            <Button className="signup" variant='outline' borderRadius='100px' borderColor='#B794F4' textColor='#B794F4'>Sign Up</Button>
        </Link>    
        <Image className="eclipse-1" src='/images/home-eclipse-1.svg'></Image>
        <Image className="eclipse-1" src='/images/bright_1.svg'></Image>
        <Image className="eclipse-2" src='/images/home-eclipse-2.svg'></Image>
        <Image className="eclipse-2" src='/images/bright_2.svg'></Image>

        <Text className="title">Elevate Your Business. Ignite Success</Text>
        <Text className="subtitle">Lorem ipsum dolor sit amet consectetur. Vel laoreet ornare tellus erat a a sapien enim lobortis. Sit nec pulvinar mattis dolor varius in.</Text>
        <Link to={'/signin'}>
            <Button className="getstarted" variant='filled' textColor='#FFFF' rightIcon={<AiOutlineArrowRight/>} borderRadius='100px'>Get Started</Button>
        </Link>    
        


    </Box>
        );
    }
export default HomePage;
     