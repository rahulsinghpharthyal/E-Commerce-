import React from 'react';
import { navData } from '../../constants/data';
import { Box, styled, Typography} from '@mui/material';


const ImgBox = styled(Box)(({theme})=>({
    display: 'flex',
    margin: '55px 130px 0 130px',
    justifyContent: 'space-between',
    overflow: 'hidden',
   
    [theme.breakpoints.down('lg')]: {
        margin: 0
    }
}))
   
const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center;
`
const Text = styled(Typography)`
    font-size: 14px;
    font-weight: bold;
    font-family: inherit;
    text-align: center;
`



const Navbar = () => {
  return (
    <Box style={{ background: "#fff" }}>
      <ImgBox>
        {navData.map((value, index) => (
          <Container style={{ textAlign: "center" }} key={index}>
            <img src={value.url} alt="img" style={{ height: 125 }}></img>
            <Text>{value.text}</Text>
          </Container>
        ))}
      </ImgBox>
    </Box>
  );
}

export default Navbar