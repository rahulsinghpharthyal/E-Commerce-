import React, { useState, useContext } from 'react';
import { Badge, Box, Button, Typography, styled } from "@mui/material";
import {ShoppingCart} from '@mui/icons-material';
import { DataContext } from '../../context/DataProvider';

import { useSelector } from 'react-redux';

// component
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';
import { Link } from 'react-router-dom';


const Wrapper = styled(Box)(({theme})=>({
    display: 'flex',
    margin: '0 3% 0 auto',
    '& > button, & > p, & > div': {
        color: '#000',
        marginRight: 60,
        fontSize: 17,
        alignItems: 'center'
    },

    '& > button:hover': {
        color: '#fff',
        background: 'blue'
    },
   
    [theme.breakpoints.down('md')]: {
    display: 'none'
}

}))
    

const Container = styled(Link)(({theme})=>({
    display: 'flex',
    color: '#000',
    fontSize: 17,
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));

const LoginButton = styled(Button)`
        background: white;
        font-transform: none;
        padding: 20px 40px ;
        border-radius: 5px;
        shadow: none;
        height: 32px;
        text-transform: none;
`




const CustomButtons = () => {

    const [open, setOpen] = useState(false);
    const {acc, setAcc} = useContext(DataContext);

    const {cartItems} = useSelector(state => state.cart)
 
  return (
    <Wrapper>
        {
            acc ? <Profile acc={acc} setAcc={setAcc}/>  
            :
            <LoginButton variant="contained" onClick={()=>setOpen(!open)}>Login</ LoginButton>

        }
       
        <Typography style={{marginTop: 5, width: 150}}>Become a Seller</Typography>
        <Typography style={{marginTop: 5}}>More</Typography>
        <Container to='/cart' color='primary'>
            <Badge badgeContent={cartItems.length} color='primary' style={{marginTop: 3}}>
            <ShoppingCart style={{marginTop: 5}}/>
            </Badge>
            <Typography style={{marginTop: 5, marginLeft: 10}}>Cart</Typography>
        </Container>
        <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>

  )
}

export default CustomButtons;