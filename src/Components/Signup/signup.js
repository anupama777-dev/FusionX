import './signup.css';
import { Box, Image, Text, Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Box className='bg'>
            <Image className="image" src='/images/logo.svg' />
            <Image className="line" src='/images/line_1.svg' />
            <Text className="signuptext">Create Your Account</Text>

            <Input
                className="name-input"
                value={name}
                variant='outline'
                height='60px'
                maxWidth='375px'
                onChange={(e) => setName(e.target.value)}
            />
             <Text className="name-text">Name</Text>
            <Input
                className="uname-input"
                value={username}
                variant='outline'
                height='60px'
                maxWidth='375px'
                onChange={(e) => setUsername(e.target.value)}
            />
            <Text className="name-text">UserName</Text>
            <Input
                className="email-input"
                type='email'
                value={email}
                variant='outline'
                height='60px'
                maxWidth='375px'
                onChange={(e) => setEmail(e.target.value)}
            />
            <Text className="name-text">E-Mail</Text>
            <Input
                className="pass-input"
                type='password'
                value={password}
                variant='outline'
                height='60px'
                maxWidth='375px'
                onChange={(e) => setPassword(e.target.value)}
            />
            <Text className="name-text">Password</Text>
            <Button className='signupbtn' textColor='#FFFF' borderRadius='16px'>Sign Up</Button>
            <Link to={'/login'}className='already'>Already have an account?</Link>
            <Link to={'/login'} className='link'>Log In</Link>
        </Box>
    );
}
export default Signup;