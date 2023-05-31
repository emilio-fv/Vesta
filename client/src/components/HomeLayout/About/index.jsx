import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const About = () => {
  return (
    <Box sx={{ paddingTop: 6 }}>
      <Typography component='h3' variant='h4' align='center'>
        About Vesta
      </Typography>
      <Box
        sx={{
          paddingY: 6,
          marginX: { xs: '20%', md: '30%'},
          display: 'flex',
          justifyItems: 'center',
          alignContent: 'center',
        }}
      >
        <Typography align='center'>
          Welcome to Vesta, a fashion label created by Antonio Rossi. We are a fashion brand that focuses on creating unique and stylish clothing pieces for all genders who want to express their individuality through fashion.
          <br/>
          <br/>
          Our brand is committed to using sustainable and eco-friendly materials in our production process to ensure that our products are not only stylish but also ethical and environmentally conscious. We believe that fashion should be accessible to everyone, which is why we offer a wide range of sizes to cater to all body types.
          <br/>
          <br/>
          At Vesta, we value creativity, innovation, and quality. Our clothing pieces are designed with care and attention to detail, ensuring that each piece is of the highest quality. We are passionate about fashion and believe that it has the power to change the world. We hope you enjoy exploring our collection and finding pieces that inspire you to express yourself through fashion.
        </Typography>
      </Box>
    </Box>
  )
};

export default About;