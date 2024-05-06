import { Typography, Box, styled } from '@mui/material';
import React from 'react';

const Component = styled(Box)`
    height: 80vh;
    width: 80%;
    background: #fff;
    margin: 80px 140px;
`;

const Container = styled(Box)`
    text-align: center;
    padding-top: 70px;
 
    }
`

const EmptyCart = () => {
    const imageURl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90'
  return (
    <Component>
        <Container>
            <img src={imageURl} alt='empty' style={{width: '15%', margin: 'auto'}}/>
            <Typography>Your Cart is empty</Typography>
            <Typography>Add items to it now</Typography>
        </Container>
    </Component>
  )
}

export default EmptyCart;