import './userhome.css';
import { Box, Image, Avatar, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const UserHome = () => {
    return (
        <Box className='bg'>
            <Box className='dashboard'>
                <Image className="imageuserhome" src='/images/logo.svg' />
                <Avatar className='user' image="/images/user-solid.svg" />
                <Text className='name'>Name</Text>
                <Text className='email'>abc@gmail.com</Text>
                <Image className="linedash" src='/images/line_1.svg' />
                <Image className="home" src="/images/home.svg" />
                <Link className='hometxt' to={'/'}>Home</Link>
                <Image className="profile" src="/images/profile.svg" />
                <Link className='proftxt' to={'/profile'}>Profile</Link>
                <Image className="help" src="/images/help.svg" />
                <Link className='helptxt' to={'/help'}>How to Create?</Link>
                <Image className="category" src="/images/category.svg" />
                <Link className='categtxt' to={'/categories'}>Categories</Link>
                <Image className="logout" src="/images/logout.svg" />
                <Link className='logtxt' to={'/logout'}>Log Out</Link>
            </Box>

            <Box className='begin'>
                <Text className='line1'>Build and Launch Your</Text>
                <Text className='line2'>E-commerce Platform Now</Text>
                <Box className='beginnow'>
                    <Link><Text className='begintxt'>Begin Now</Text></Link>
                </Box>
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

            <Image className="line" src='/images/line_1.svg' />
            <Image className="eclipse" src='/images/Eclipse_1.svg'></Image>
            <Image className="bright_1" src='/images/bright_1.svg'></Image>
            <Image className="eclipse_2" src='/images/Eclipse_2.svg'></Image>
            <Image className="bright_2" src='/images/bright_2.svg'></Image>
        </Box>
    );
}
export default UserHome;