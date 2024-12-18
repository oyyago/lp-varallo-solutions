import React from 'react';
import { color, styled } from '@mui/system';
import Container from '@mui/material/Container';
import { IconsContainer, SoftwareHouseContainer, TitleContainer } from './moreAboutUs';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Yago from '../assets/Yago.png';
import Thiago from '../assets/thiago.webp';

const PeaplesContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '3rem',
}));

const PeapleContainer = styled('div')(({ theme }) => ({
    textAlign: 'center',
    img: {
        width: "100px",
        borderRadius: '50%',
        marginBottom: '1rem',
    },
    h6: {
        color: theme.palette.primary.main,
        fontSize: 'large',
        margin: '0',
    },
    p: {
        margin: '0',
        transition: 'color 0.3s ease',
    },
    '&:hover p': {
        color: theme.palette.primary.main,
    },
}));


const SocialIcons = styled('div')(({ theme }) => ({
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',

    'a': {
        color: theme.palette.text.primary,
        transition: 'transform 0.3s ease, color 0.3s ease',
        '&:hover': {
            transform: 'scale(1.2)',
            color: theme.palette.primary.main,
        },
    },
}));

export default function OurPictures() {
    return (
        <Container id="people" sx={{ py: { xs: 8, sm: 16 }, }}>
            <SoftwareHouseContainer>
                <TitleContainer>
                    <IconsContainer>
                        <Brightness1Icon />
                        <Brightness1Icon />
                        <Brightness1Icon />
                    </IconsContainer>
                    <h2>CONHEÇA NÓS</h2>
                </TitleContainer>
            </SoftwareHouseContainer>

            <PeaplesContainer>
                <PeapleContainer>
                    <img src={Thiago} alt="Thiago Varallo" />
                    <h6>Thiago Varallo</h6>
                    <p>Fundador/Desenvolvedor</p>
                    <SocialIcons>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon />
                        </a>
                    </SocialIcons>
                </PeapleContainer>

                <PeapleContainer>
                    <img src={Yago} alt="Yago Sousa" />
                    <h6>Yago Sousa</h6>
                    <p>Desenvolvedor</p>
                    <SocialIcons>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon />
                        </a>
                    </SocialIcons>
                </PeapleContainer>
            </PeaplesContainer>

        </Container>
    );
}
