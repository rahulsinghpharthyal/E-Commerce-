import React, { useState } from 'react';
import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem, styled} from '@mui/material';
import { Link } from 'react-router-dom';
import {     Menu} from '@mui/icons-material';

// components
import Search from './Search';
import CustomButtons from './CustomButtons';

const StyleHeader = styled(AppBar)`
    background: #fff;
    width: 100%
`

const MenuButton = styled(IconButton)(({theme})=>({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))

const CustomButtonWrapper = styled(Box)(({theme})=>({
    margin: '0 3% 0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const Header = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () =>{
        setOpen(true);
    }

    const handleClose = () =>{
        setOpen(false);
    }
    
    const list = () => (
        <Box style={{width: 200}} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons/>
                </ListItem>
            </List>
        </Box>
    )
 
  return (
   <>
   <StyleHeader>
    <Toolbar style={{minHeight: 55}}>
                <MenuButton onClick={handleOpen}>
                    <Menu/>
                </MenuButton>   
                <Drawer open={open} onClose={handleClose}>
                   {
                    list()
                   }
                </Drawer>
        <Link to='/'>
            <Box >
                <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus_mobile-39120d.svg' alt='logo' className='ml-20 w-36' ></img>
            </Box>
        </Link>
        <Search/>
        <CustomButtonWrapper>
            <CustomButtons/>
        </CustomButtonWrapper>
    </Toolbar>
   </StyleHeader>

   </>
  )
}

export default Header;

      

       