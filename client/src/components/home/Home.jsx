import React, { useEffect } from 'react';
import {styled, Box} from '@mui/material';

// components
import Navbar from './Navbar';
import Banner from './Banner';
import { getProducts } from '../../redux/actions/productaction';
import { useDispatch, useSelector } from 'react-redux';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

const  Container = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`
 
const Home = () => {

  const { products } = useSelector(state => state.getProducts)
  console.log('this is products', products)


  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  }, [])
  return (
    <>
    <Navbar/>
    <Container>
      <Banner/>
      <MidSlide products={products} title='Deal of the Day' timer={true}/>
      <MidSection/>
      <Slide products={products} title='Discounts for You' timer={false}/>
      <Slide products={products} title='Suggested Items' timer={false}/>
      <Slide products={products} title='Top Selection' timer={false}/>
      <Slide products={products} title='Recomended Items' timer={false}/>
      <Slide products={products} title='Tranding Offers' timer={false}/>
      <Slide products={products} title='Season;s top picks' timer={false}/>
      <Slide products={products} title='Top Deals on Accessories' timer={false}/>
    </Container>
    </>
  )
}

export default Home;