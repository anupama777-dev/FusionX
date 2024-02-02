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
            <Image className="eclipse" src='/images/Eclipse_1.svg'></Image>
            <Image className="bright_1" src='/images/bright_1.svg'></Image>
            <Image className="eclipse_2" src='/images/Eclipse_2.svg'></Image>
            <Image className="bright_2" src='/images/bright_2.svg'></Image>
            <Input
                className="name-input"
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <Input
                className="uname-input"
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <Input
                className="email-input"
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <Input
                className="pass-input"
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <Button className='signupbtn'>Sign Up</Button>
            <Text className='already'>Already have an account?</Text>
            <Link to={'/login'} className='link'>Login</Link>
        </Box>
    );
}
export default Signup;