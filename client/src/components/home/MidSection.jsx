import React from 'react';
import { imageURL } from '../../constants/data';
import { Grid, styled} from '@mui/material';

const Wrapper = styled(Grid)`
    margin-top: 10px;
    justify-content: space-between;
`

const Image = styled('img')(({theme})=> ({

    marginTop: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
   [theme.breakpoints.down('md')]: {
    objectFit: 'cover',
    height: '120px'
   }
    
}));


const MidSection = () => {
  return (
<>
    <Wrapper lg={12} md={12} xs={12} container>
        {
            imageURL.map((image, index)=>(
                <Grid item lg={4} md={4} sm={12} xs={12} key={index}>

                <img src={image} key={index} alt='image' style={{width: '100%'}}/>
                </Grid>
            ))
        }
    </Wrapper>
    <Image src='https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50' alt='covid'/>
</>
  )
}

export default MidSection;