import React, { useState, useContext } from 'react';
import {Dialog, Box, TextField, Button, Typography, styled} from '@mui/material';
import { authenticateLogin, authenticationSignup } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
`

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height: 100%; 
    width: 40%;
    padding: 45px 35px;
    & > p, & > h5   {
        color: #fff;
        font-weight: 600;
    }
`

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    & > div, & > button, & > p{
        margin-top: 20px;
        }
`
const LoginButton = styled(Button)`
    text-transform: none;
    background: #fb641b;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`

const RequestButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%)
`

const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
`
const CreateAccount = styled(Typography)`
    font-size: 14px;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    cursor: pointer;

`

const Error = styled(Typography)`
        font-size: 10px;
        color: #ff6161;
        line-height: 0;
        margin-top: 10px;
        font-weight: 600;
`
const accountInitialValues = {
    login: {
        view: 'login',
        heading: "Login",
        subheading: "Get access to your Orders,Wishlist and Recommendations",
      
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subheading: "Sign up with mobile to get started"
    }
}

const signupInitialValue = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''

}

const logininitialValues = {
    username: '',
    password: '',
}

const LoginDialog = ({open, setOpen}) => {
    const [account, setAccount] = useState(accountInitialValues.login)
    const [signup, setSignup] = useState(signupInitialValue);
    const [login, setLogin] = useState(logininitialValues);
    const [error, setError] = useState(false);

    const { acc, setAcc }= useContext(DataContext)

const handleClose = () =>{
        setOpen(!open);
        setAccount(accountInitialValues.login);
        setError(false);
}

const onInputChange = (e) =>{
    setSignup({...signup, [e.target.name]: e.target.value})

}
  
const signupUser = async ()=> {
let response = await authenticationSignup(signup);
if(!response) return;
handleClose();
setAcc(signup.firstname);
}

const onValueChange = (e) =>{
    setLogin({...login, [e.target.name]: e.target.value})
   
}

const loginUser = async () =>{
   let response = await authenticateLogin(login);
   if (response && response.status === 200){
    handleClose();
    setAcc(response.data.data.firstname);

}else{
   setError(true);
}
}

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{sx: {maxWidth: 'unset'}}}>
            <Component >
                <Box style={{display: 'flex', height: '100%'}}>
                    <Image>
                      <Typography variant='h5'>{account.heading}</Typography>
                      <Typography style={{marginTop: 20}}>{account.subheading}
                     </Typography>
                    </Image>
                    {
                        account.view === 'login' ?
                        <Wrapper>
                        <TextField variant='standard' onChange={(e) => onValueChange(e)} name='username' label='Enter Username'/>
                       { 
                         error &&
                         <Error>Please Enter valid username or password</Error>
                        } 

                        <TextField variant='standard' onChange={(e) => onValueChange(e)} name='password' label='Enter Password'/>
                        <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                        <LoginButton onClick={loginUser}>Login</LoginButton >
                        <Typography style={{textAlign: 'center'}}>OR</Typography>
                        <RequestButton>Request OTP</RequestButton>
                        <CreateAccount onClick={()=>setAccount(accountInitialValues.signup)}>New to Flipkart? Create an account</CreateAccount>
                        </Wrapper>
                    :
                    <Wrapper>
                        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='firstname' label='Enter First Name'/>
                        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='lastname' label='Enter Last Name'/>
                        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='username' label='Enter username'/>
                        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='email' label='Enter email'/>
                        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='password' label='Enter Password'/>
                        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='phone' label='Phone'/>
                        <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
                       
                    </Wrapper>
                    }
                    
                </Box>
            </Component >

    </Dialog>
  )
}


export default LoginDialog;