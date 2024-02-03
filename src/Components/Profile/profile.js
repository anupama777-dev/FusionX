import './profile.css';
import {Box, Image, Avatar, Text,} from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const Profile = () => {
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
            <Link className='proftxt'>Profile</Link>
            <Image className="help" src="/images/help.svg" />
            <Link className='helptxt'>How to Create?</Link>
            <Image className="category" src="/images/category.svg" />
            <Link className='categtxt'>Categories</Link> 
            <Image className="logout" src="/images/logout.svg" />
            <Link className='logtxt'>Log Out</Link>
        </Box>

        <Box className="personal">
            <Text className="head">Personal Information</Text>
            <div className="box-with-rectangle1">
      {}
      <Text className="namee">Name</Text>
      <Text className="col1">:  </Text>
      <Text className="orname">ABCD</Text>
    </div>

    <div className='rect2'></div>
    <div className='rect3'></div>
    <div className='rect4'></div>
    <Text className="us1">Username</Text>
      <Text className="col2">:  </Text>
      <Text className="orusname">abcd</Text>
    
      <Text className="pa">Password</Text>
      <Text className="col3">:  </Text>
      <Text className="orpas">123456</Text>

      <Text className="em">Email ID</Text>
      <Text className="col4">:  </Text>
      <Text className="oruemail">abc@gmail.com</Text>
        </Box>
               
<Box className='web'>
    <Text className="webs">Websites Created</Text>
    <div className='wrect'></div>
    <Text className='wtext'>GetPass: An automated Bus Pass </Text>
</Box>
            
            
           
      
            <Image className="line" src='/images/line_1.svg' />
            <Image className="eclipse" src='/images/Eclipse_1.svg'></Image>
            <Image className="bright_1" src='/images/bright_1.svg'></Image>
            <Image className="eclipse_2" src='/images/Eclipse_2.svg'></Image>
            <Image className="bright_2" src='/images/bright_2.svg'></Image>
            
    
        </Box>
        );
    }
 
export default Profile;



