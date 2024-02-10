import './userhome.css';
import { Box, Image, Avatar, Text,Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AiOutlineCaretRight } from 'react-icons/ai';
const UserHome = () => {
    return (
        <Box className='bg1'>
            <Box className='dashboard'>
                <Image className="imageuserhome" src='/images/logo.svg' />
                <Avatar className='user' image="/images/user-solid.svg" />
                <Text className='name'>Name</Text>
                <Text className='email'>abc@gmail.com</Text>
                <Image className="home" src="/images/home.svg" />
                <Text className='hometxt'>Home</Text>
                <Image className="profile" src="/images/profile.svg" />
                <Link className='proftxt' to={'/profile'}>Profile</Link>
                <Image className="help" src="/images/Question.svg" />
                <Link className='helptxt' to={'/help'}>How to Create?</Link>
                <Image className="category" src="/images/category.svg" />
                <Link className='categtxt' to={'/categories'}>Categories</Link>
                <Image className="logout" src="/images/Back.svg" />
                <Link className='logtxt' to={'/logout'}>Log Out</Link>
            </Box>

            <Box className='begin'>
                <Text className='line1'>Build And Launch Your <br/>E-commerce Platform Now</Text>
                <Button className='begintxt' rightIcon={<AiOutlineCaretRight/>} variant="outline">Begin Now</Button>
            </Box>

            <Box className='prev'>
                <Box className='b1'>
                    <Image className='previmg' src='/images/home-prev.svg' />
                </Box>
                <Box className='b2'>
                    <Image className='previmg' src='/images/home-prev.svg' />
                </Box>
                <Box className='b3'>
                    <Image className='previmg' src='/images/home-prev.svg' />
                </Box>
            </Box>

            <Image className="line_1" src='/images/line_1.svg' />
        </Box>
    );
}
export default UserHome;