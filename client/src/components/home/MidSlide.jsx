import React from "react";
import Slide from "./Slide";
import { Box, styled } from "@mui/material";

const Component = styled(Box)`
    display: flex;
`
const LeftComponent = styled(Box)(({theme})=>({
    width: '85%',
    [theme.breakpoints.down('md')]: {
        width: '100%',
    }
}));

const RightComponent = styled(Box)(({theme})=>({
    background: '#fff',
    padding: 5,
    marginTop: 10,
    marginLeft: 10,
    width: '15%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none',

    }

}));

const MidSlide = ({ products, title, timer }) => {
  return (
    <Component>
      <LeftComponent>
        <Slide products={products} title={title} timer={true} />
      </LeftComponent>
      <RightComponent >
        <img src="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70" alt="ad" style={{width: 217}}/>
      </RightComponent >
    </Component>
  );
};

export default MidSlide;
