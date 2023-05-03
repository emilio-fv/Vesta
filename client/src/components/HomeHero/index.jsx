import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import HeroImg from '../../img/hero.jpg';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

const HomeHero = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.up("md"));

    const buttonProps = {
        size: !isSmallScreen ? 'small' : 'medium'
    }

    return (
        <Container 
            maxWidth='false' 
            disableGutters
            sx={{
                position: 'relative',
            }}
        >
            <Box 
                component='img'
                src={HeroImg}
                sx={{
                    maxInlineSize: '100%',
                    blockSize: 'auto',
                    height: '100%',
                    width: '100%'
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: { xs: '25%', sm: '30%', md: '35%'},
                    left: { xs: '15%', sm: '20%', md: '25%'},
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                }}
            >
                <Button 
                    {...buttonProps}
                    sx={{ 
                        border: '2px solid black'
                    }}
                >
                    Shop Unisex
                </Button>
                <Button 
                    {...buttonProps}
                    sx={{ 
                        border: '2px solid black' 
                    }}
                >
                    Shop Women
                </Button>
                <Button 
                    {...buttonProps}
                    sx={{ 
                        border: '2px solid black' 
                    }}
                >
                    Shop Men
                </Button>
            </Box>
            {/* <Box
                sx={{
                    marginLeft: { md: 12 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: { xs: 'flex-end', md: 'center'},
                    gap: { xs: 2, md: 6 }
                }}
            >

            </Box> */}
        </Container>
    )
}

export default HomeHero;