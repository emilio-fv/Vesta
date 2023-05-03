import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import HeroImg from '../../img/hero.jpg';
import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import { Link as RouterLink } from 'react-router-dom';

const HomeHero = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.up("md"));

    const buttonProps = {
        size: !isSmallScreen ? 'small' : 'medium'
    }

    return (
        <Container maxWidth='false' disableGutters>
            <Box sx={{ position: 'relative' }}>
                {/* Image */}
                <Box 
                    component='img'
                    src={HeroImg}
                    sx={{
                        maxInlineSize: '100%',
                        blockSize: 'auto',
                        height: '100%',
                        width: '100%',
                        marginBottom: -2
                    }}
                />
                {/* Category Buttons */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '30%',
                        left: '25%',

                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                    }}
                >
                    <Button 
                        // TODO: handle click 
                        component={RouterLink}
                        to='/products'
                        {...buttonProps}
                        sx={{ 
                            border: '2px solid black'
                        }}
                    >
                        Shop Unisex
                    </Button>
                    <Button 
                        // TODO: handle click 
                        component={RouterLink}
                        to='/products'
                        {...buttonProps}
                        sx={{ 
                            border: '2px solid black' 
                        }}
                    >
                        Shop Women
                    </Button>
                    <Button 
                        // TODO: handle click 
                        component={RouterLink}
                        to='/products'
                        {...buttonProps}
                        sx={{ 
                            border: '2px solid black' 
                        }}
                    >
                        Shop Men
                    </Button>
                </Box>
            </Box>
            {/* Category Banners */}
            <Button
                // TODO: handle click
                component={RouterLink}
                to='/products'
                sx={{ 
                    width: '100%', 
                    height: '10rem',
                    backgroundColor: 'black',
                    color: 'white',
                    ':hover': {
                        bgcolor: 'grey',
                        color: 'black'
                    },
                    borderRadius: 0
                }}
            >
                Shop Unisex
            </Button>
            <Button
                // TODO: handle click
                component={RouterLink}
                to='/products'
                sx={{ 
                    width: '100%', 
                    height: '10rem',
                    backgroundColor: 'white',
                    color: 'black',
                    ':hover': {
                        bgcolor: 'grey',
                        color: 'black'
                    },
                    borderRadius: 0
                }}
            >
                Shop Women
            </Button>
            <Button
                // TODO: handle click
                component={RouterLink}
                to='/products'
                sx={{ 
                    width: '100%', 
                    height: '10rem',
                    backgroundColor: 'black',
                    color: 'white',
                    ':hover': {
                        bgcolor: 'grey',
                        color: 'black'
                    },
                    borderRadius: 0
                }}
            >
                Shop Men
            </Button>
            {/* About Section */}
            <Box 
                sx={{
                    paddingTop: 6,
                }}
            >
                <Typography
                    component='h3'
                    variant='h4'
                    align='center'
                >
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
                    <Typography
                        align='center'
                    >
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
            {/* Sale Banner */}
            <Button
                // TODO: Link to on sale products
                component={RouterLink}
                to='/products'
                sx={{
                    width: '100%',
                    height: '10rem',
                    backgroundColor: '#ff1a1a',
                    color: 'black', 
                    ':hover': {
                        bgcolor: '#fa6055'
                    },
                    borderRadius: 0,
                }}
            >
                Sale
            </Button>
        </Container>
    )
}

export default HomeHero;