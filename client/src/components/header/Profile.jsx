
import React, { useState } from 'react'
import { Box, Typography, Menu, styled, MenuItem} from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const Component = styled(Menu)`
    margin-top: 5px;
`
const LogOut = styled(Typography)`
    font-size: 14px;
    margin-left: 15px;
`

const Profile = ({acc, setAcc}) => {

    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }
    
    const handleClose = () =>{
        setOpen(!open);
    }

    const logoutUser = () => {
        setAcc('');
    }
  return (
    <>
       <Box onClick={handleClick}>
            <Typography style={{MarginTop: 5, cursor: 'pointer'}}>{acc}</Typography>
       </Box> 
       <Component
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}
           
        >
            <MenuItem onClick={()=> {handleClose(); logoutUser();}}>
            <PowerSettingsNewIcon color='primary' fontSize='small'/>
                <LogOut>
                   Logout
                </LogOut>
            </MenuItem>
            
      </Component>
           
        
    </>
  )
}

export default Profile;