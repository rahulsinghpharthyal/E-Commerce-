import React from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from '../../constants/data';
import {styled } from '@mui/material';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  const Image = styled('img')(({theme})=>({
    width: '100%',
    height: 200,
    [theme.breakpoints.down('md')]: {
      objetFit: "cover",
      height: 180,
    }
  }))




const Banner = () => {
  return (
    <Carousel responsive={responsive}
    swipeable={false}
    draggable={false}
    showDots={true}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={4000}
    slidesToSlide={1}
    containerClass="carousel-container"
    keyBoardControl={true}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px">
           {
            bannerData.map((value, index)=>(
                <Image src={value.url} alt='img' key={index}></Image>
            ))
           }
    </Carousel>
  )
}

export default Banner;