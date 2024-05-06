import React from 'react';
import { Box, Button, Typography, styled } from "@mui/material";
import { addEllipsis } from '../../utils/common-utils';
import GroupOfButton from './GroupOfButton';
import { removeFromCart } from '../../redux/actions/cartAction';
import { useDispatch } from 'react-redux';

const Component = styled(Box)`
    border-top: 1px solid #f0f0f0;
    display: flex;
    background: #fff;

`
const LeftComponent = styled(Box)`
    margin: 20px;
    display: flex;
    flex-direction: column;
`
const SellerText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;

`;

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color: #000;
    font-weight: 600;
`
const RightComponent = styled(Box)`

`

const CartItem = ({item}) => {

    const dispatch = useDispatch();

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }
  return (
    <Component>
        <LeftComponent>
            <img src={item.url} alt='product' style={{height: 110, width: 110}}/>
            <GroupOfButton/>
        </LeftComponent>
        <Box style={{margin: 20}}>
            <Typography>{addEllipsis(item.title.longTitle)}</Typography>
            <SellerText>Seller:RetailNet
                <Box component='span'><img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png' alt='fliplkartassured' style={{width: 50, display:'inherit', marginLeft: 10, marginBottom: 10}}/></Box>
            </SellerText>
            <Typography style={{margin: '20px 0'}}> 
                <Box component='span' style={{fontWeight: 600, fontSize: 18}}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{color: '#878787'}}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{color: '#388e3c'}}>{item.price.discount}</Box>
            </Typography>
            <Remove onClick={()=>removeItemFromCart(item.id)}>Remove</Remove>
        </Box>
    </Component>
  )
}

export default CartItem;