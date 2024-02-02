import './userhome.css';
import { Box, Image, Text, Avatar } from '@chakra-ui/react';
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
                <Text className='hometxt'>Home</Text>
                <Image className="profile" src="/images/profile.svg" />
                <Text className='proftxt'>Profile</Text>
                <Image className="help" src="/images/help.svg" />
                <Text className='helptxt'>How to Create?</Text>
                <Image className="category" src="/images/category.svg" />
                <Text className='categtxt'>Categories</Text>
                <Image className="logout" src="/images/logout.svg" />
                <Text className='logtxt'>Log Out</Text>
            </Box>
        </Box>
    );
}
export default UserHome;