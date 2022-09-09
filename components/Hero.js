import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container  from '@mui/material/Container';
import { Typography } from '@mui/material';
import { global } from 'styled-jsx/css';
import lightTheme from '../styles/theme/lightTheme';
import {useState, useEffect} from 'react';
import heroImage from '../public/assets/bg_new.png';


const Hero = () => {
  useEffect(() => {
console.log('use effect')

});
  return (
   <Container maxWidth='lg'>
<Box component="div" disablegutters="false" sx={{display:'flex', minHeight: '100vh', alignItems:'center', justifyItems:'left', }}> 
<Image className={global.landingImage} src={heroImage}  objectFit='cover' layout='fill' objectPosition='center' alt='Hero Image' priority/>

<Box p={3} sx={{display:'block', zIndex:1000, }}>

<Typography  variant="h1"  mb={2} sx={{ width: '45vw', color:'#fafafa', fontSize:'3.6rem', }}>
Data-Driven Design for Humans.
</Typography>
<Typography variant="body2" mb={2} sx={{width:'45vw', color:'#fafafa', fontWeight:'400', fontSize:'1rem'}}>

UX/UI design and engineering practioners who focus on identifying user pain-points and problems and designing solutions that work.
</Typography>
<Button color="primary" variant="contained">
Learn More...
</Button>
  </Box>

</Box>

   </Container>

  );
}
export default Hero