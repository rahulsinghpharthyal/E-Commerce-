import React from 'react';
import { Button, ButtonGroup, styled} from '@mui/material';


const Component = styled(ButtonGroup)`
    margin-top: 30px;
    font-size: 14px;

`
const StyledButton = styled(Button)`
  border-radius: 50%; 
`
const GroupOfButton = () => {
  return (
    <Component>
        <StyledButton>-</StyledButton>
        <StyledButton>1</StyledButton>
        <StyledButton>+</StyledButton>
    </Component>

  )
}

export default GroupOfButton;