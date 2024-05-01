import { Box, TextField, Button, styled, Typography } from '@mui/material'
import Im from '../../images/1.png'
import {useState, useContext} from 'react'

const Component = styled(Box)`
width:400px;
margin:auto;
color: #000; /* Change text color to black */
  background: #BBAB8C; /* Change background B4D4FF B4D4FFcolor to black */
box-shadow:5px 2px 5px 2px rgb(0,0,0,0.6);
`
const Image = styled('img')({
    width: '100%', // Use 100% width to ensure the image fills its container
    marginTop: '0', // Set margin-top to 0 to stick the image to the top of the outer box
    display: 'flex',
    
    objectFit: 'cover',
})

const Wrapper = styled(Box)`
padding:25px 35px;
display:flex;
flex:1;
flex-direction:column;
& > div, & > Button, & > p{
    margin-top:10px;
}

`
const Text = styled(Typography)`
color:878787;
font-size:16px;


`
const LoginButton = styled(Button)`
    text-transform: none;
    background: #6C3428;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`

const SignupButton = styled(Button)`
 text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
`

const signupIntialValue={
    name:'',
    username:'',
    password:''
}

const Login = () => {
    const imageURL = `${Im}`;
    const [account, toggleAccount] = useState('login');
    const [signup,setSignup] = useState(signupIntialValue)
    const toggleSignup=()=>{
        account === 'login'? toggleAccount('signup'):toggleAccount('login')
    }
    const onInputChange = (e)=>{
        setSignup({...signup,[e.target.name]:e.target.value});
      }
    return (
        <Component>
            <Image src={imageURL} alt="login" srcset="" />
            {account === 'login' ?
            <Wrapper>
            <TextField variant="standard" name='username' label="Enter username" />
            <TextField variant="standard" name='password' label="Enter password" />
            <LoginButton variant="contained" >Login </LoginButton>
            <Text style={{ textAlign: 'center' }}>OR</Text>
            <SignupButton onClick={()=>{toggleSignup()}}>Create an account</SignupButton>
            </Wrapper>
            :
            <Wrapper>
            <TextField variant="standard"    onChange={(e)=>onInputChange(e)} name='name' label="Enter name"/>
    <TextField variant="standard"    onChange={(e)=>onInputChange(e)}
    name='username'label="Enter username"/>
    <TextField variant="standard"    onChange={(e)=>onInputChange(e)} name='password'label="Enter password"/>

    <SignupButton>SignUp </SignupButton>
            <Text style={{ textAlign: 'center' }}>OR</Text>
            <LoginButton variant="contained" onClick={()=>{toggleSignup()}}>Already have an account</LoginButton>
    
    </Wrapper>}
        </Component>
                )
}
                export default Login;