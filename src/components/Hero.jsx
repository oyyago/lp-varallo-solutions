import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import osCara from '../assets/osCara.png';
import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';
import fundoBlack from '../assets/fundoBlack.svg'
import fundoWhite from '../assets/fundoWhite.svg'

const StyledBox = styled('div')(({ theme }) => ({
  backgroundImage:theme.palette.mode === 'light'
      ? `url(${fundoWhite})`
      : `url(${fundoBlack})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '90vh',
  width: '100vw',
  [theme.breakpoints.down('sm')]: {  // Assuming you're using Material-UI's breakpoints
    backgroundImage: 'none', // Hides the background on smaller screens
  },
}));


const ImageContainer = styled('div')`

  @media (max-width: 900px) {
    display: none;
  }

`;

const MainContainer = styled('div')`

  width: '50%';
  display: 'flex';
  justify-content: 'center';

  @media (max-width: 900px) {
    width: 80%;
  }

`;

export default function Hero() {
  return (
    <StyledBox id="home"
    >
      <Box
        id="hero"
        sx={(theme) => ({
          width: '100%',
          height: '100vh',
          justifyContent: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, #cf3e00), transparent)',
          ...theme.applyStyles('dark', {
            backgroundImage:
              'radial-gradient(ellipse 80% 50% at 50% -20%, #f2743e3b, transparent)',
          }),
        })}
      >
        <Container
          sx={{
            marginBottom: '12vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <MainContainer>

            <Stack
              spacing={2}
              useFlexGap
              sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
            >
              <Typography
                variant="h1"
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  fontSize: 'clamp(3rem, 10vw, 3.5rem)',
                }}
              >
                Criando&nbsp;
                <Typography
                  component="span"
                  variant="h1"
                  sx={(theme) => ({
                    fontSize: 'inherit',
                    color:'hsla(25.102040816326532, 95.14563106796116%, 59.6078431372549%, 0.851)'
                  })}
                >
                  Soluções
                </Typography>
              </Typography>
              <Typography
                sx={{
                  textAlign: 'center',
                  color: 'text.secondary',
                  width: { sm: '100%', md: '80%' },
                }}
              >
Transformamos suas ideias em realidade digital, oferecendo soluções personalizadas e inovadoras para impulsionar seu negócio

</Typography>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1}
                useFlexGap
                sx={{ pt: 2, width: { xs: '100%', sm: '350px' } }}
              >
                <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
                  Email
                </InputLabel>
                <TextField
                  id="email-hero"
                  hiddenLabel
                  size="small"
                  variant="outlined"
                  aria-label="Enter your email address"
                  placeholder="Your email address"
                  fullWidth
                  slotProps={{
                    htmlInput: {
                      autoComplete: 'off',
                      'aria-label': 'Enter your email address',
                    },
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ minWidth: 'fit-content' }}
                >
                  Enviar
                </Button>
              </Stack>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ textAlign: 'center' }}
              >
                Send your contact now 
                
                .
              </Typography>
            </Stack>
          </MainContainer>
          <ImageContainer>
            <img src={osCara} alt="" style={{ width: '370px' }} />
          </ImageContainer>
        </Container>
      </Box>
    </StyledBox>
  );
}
