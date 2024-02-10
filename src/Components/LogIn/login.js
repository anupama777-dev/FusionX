import './login.css';
import { Box, Image, Text, Button, Input } from '@chakra-ui/react';
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
    };
    return (
        <Box className='bg'>
            <Image className="image" src='/images/logo.svg' />
            <Image className="line" src='/images/line_1.svg' />
            <Text className="logintext">Log In To<br/>Your Account</Text>
            
            <Input
                className="username-input"
                value={username}
                variant='outline'
                height='60px'
                maxWidth='375px'
                onChange={(e) => setUsername(e.target.value)}
            />
            <Text className="name-text">Userame</Text>
            <Input
                className="password-input"
                type="password"
                value={password}
                variant='outline'
                height='60px'
                maxWidth='375px'
                onChange={(e) => setPassword(e.target.value)}
            />
            <Text className="name-text">Password</Text>
            <Button className='loginbtn' onClick={handleLogin}extColor='#FFFF' borderRadius='16px'>Login</Button>
        </Box>
    );
}
export default Login;