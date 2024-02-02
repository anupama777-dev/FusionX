import './login.css';
import { Box, Image, Text, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Box className='bg'>
            <Image className="image" src='/images/logo.svg' />
            <Image className="line" src='/images/line_1.svg' />
            <Text className="logintext">Login To Your Account</Text>
            <Image className="eclipse" src='/images/Eclipse_1.svg'></Image>
            <Image className="bright_1" src='/images/bright_1.svg'></Image>
            <Image className="eclipse_2" src='/images/Eclipse_2.svg'></Image>
            <Image className="bright_2" src='/images/bright_2.svg'></Image>
            <Input
                className="username-input"
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <Input
                className="password-input"
                placeholder='Password'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Link to='/userhome' className='loginbtn'>Login</Link>
        </Box>
    );
}
export default Login;