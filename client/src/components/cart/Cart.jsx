import React from 'react';
import { useSelector } from 'react-redux';

import { Box, Grid, Typography, Button, styled } from '@mui/material';
import CartItem from './CartItem';
import TotalBalance from './TotalBalance';
import EmptyCart from './EmptyCart';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

const Container = styled(Grid)(({theme})=>({
  padding: '30px 135px',
  [theme.breakpoints.down('md')]: {
      padding: '35px 0'
  }
}));

const Header = styled(Box)`
  padding: 50px 24px;
  background: #fff;

`

const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%)
  border-top: 1px solid #f0f0f0;
`
const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  width: 250px;
  height: 52px;
  border-radius: 2px;
`;

const LeftComponent = styled(Grid)(({theme})=>({
  paddingRight: 15,
  [theme.breakpoints.down('md')]: {
    marginBottom: 15
  }

}));

const Cart = () => {

  const { cartItems } = useSelector(state => state.cart);

  const buyNow = () => {
    const response = payUsingPaytm({ amount: 500, email: 'rahul@gmail.com'})
    let information = {
      action: 'https://securegw-stage.paytm.in/order/process',
      params: response
    }
    post(information);
  }

  return (
    <>
      {
        cartItems.length 
      ?
        <Container container>
            <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                <Header>
                    <Typography>My Cart ({cartItems.length})</Typography>
                </Header>
                {
                  cartItems.map((item, index)=>(
                    <CartItem item={item} key={index}/>
                  ))
                }
                <ButtonWrapper>
                  <StyledButton onClick={()=> buyNow()}>Place Order</StyledButton>
                </ButtonWrapper>

            </LeftComponent>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                  <TotalBalance cartItems={cartItems}/>
            </Grid>
        </Container>

      :
        <EmptyCart/>
      }
    </>
  )
}

export default Cart;