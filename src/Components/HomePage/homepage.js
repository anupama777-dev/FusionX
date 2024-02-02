import './homepage.css';
import { Box, Button, Image, Text} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const HomePage = () => {
        return (
            <Box className='bg'>
                <Image className="image" src='/images/logo.svg' />
                <Box className='tool'>
                    <Link className="menu" to={'/'}>Menu</Link>
                    <Link className="menu" to={'/'}>Home</Link>
                    <Link className="menu" to={'/'}>About Us</Link>
                    <Link className="menu" to={'/'}>Contact Us</Link>
                </Box>
                <Image className="line" src='/images/line_1.svg' />
                <Link to={'/signup'} className='signup'>Sign Up</Link>
                <Image className="eclipse" src='/images/Eclipse_1.svg'></Image>
                <Image className="bright_1" src='/images/bright_1.svg'></Image>
                <Image className="eclipse_2" src='/images/Eclipse_2.svg'></Image>
                <Image className="bright_2" src='/images/bright_2.svg'></Image>

                <Text className="title">Elevate Your Business. Ignite Success</Text>
                <Text className="subtitle">Lorem ipsum dolor sit amet consectetur. Vel laoreet ornare tellus erat a a sapien enim lobortis. Sit nec pulvinar mattis dolor varius in.</Text>
                <Button className="getstarted">Get Started</Button>

            </Box>
        );
    }
    export default HomePage;
