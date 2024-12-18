import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { margin, padding, styled, textAlign, width } from '@mui/system';
import Container from '@mui/material/Container';
import { IconsContainer, SoftwareHouseContainer, TitleContainer } from './moreAboutUs';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import SearchIcon from '@mui/icons-material/Search';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CodeIcon from '@mui/icons-material/Code';
import DnsIcon from '@mui/icons-material/Dns';
import BuildIcon from '@mui/icons-material/Build';
import { Autoplay } from 'swiper/modules';
import ciclistImage from '../assets/cliclistImage.svg';
import interactImage from '../assets/interactImage.svg';
import agendPet from '../assets/agendPet.svg';
import biografiaImage from '../assets/biografiaImage.svg';
import eurosul from '../assets/eurosul.png';


const CasesContainer = styled('div')(({ theme }) => ({
}));

const CaseContainer = styled('div')(({ isEven }) => ({
    display: 'flex',
    flexDirection: isEven ? 'row' : 'row-reverse', // Alterna a direção
    justifyContent: 'space-between',
    marginTop: '4rem',
    gap:'6rem',
    // Adiciona responsividade com media queries
    '@media (max-width: 900px)': {
      gap:'0',
      flexDirection: 'column', // Altera para coluna em telas menores
      alignItems: 'center',    // Centraliza os itens
    },
  }));
  
  

const ImageContainer = styled('div')`
    display: flex;

    border: 1px solid #f27540c6;
    border-radius: 10px;
    padding: 10px;
    border-left: none;
    border-bottom: none ;
    img{
        height: 20rem;
        width: 100%;
    };

    @media (max-width: 900px) {
        padding: 0px;
        img{
            height: 15rem;
            width: 80%;
        }
    }
`;

const InfoContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 5px',
    width: '50%',
    h3: {
        textAlign: 'left',
        fontSize: 'large',
        color: '#F27641',
        margin: '5px 0',
    },

    h5: {
        margin: '00px 20px 20px 0',
        textAlign: 'left',
    },

    p: {
        margin: '00px 20px 40px 0',
        textAlign:'left'
    },

    div: {
        display: 'flex',
        gap: '1rem',

        h1: {
            border: "1px solid #94A0B8",
            borderRadius: '5px',
            padding: '5px',
            fontSize: 'small',
        },
    },

    '@media (max-width: 900px)': {
        width:'100%'
    },
}));


export default function ProjectCases() {
    const [isCardElevated, setIsCardElevated] = useState(true); // estado para controlar a posição
    const cases = [
        {
            title: 'Interact Play',
            subtitle: 'Painel de Administracao para ciclistas',
            description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet...',
            tags: ['Node-js', 'Typescript', 'React', 'AWS', 'Redis'],
            image: interactImage,
        },
        {
            title: 'Bicicreteiro',
            subtitle: 'Painel de Administracao para ciclistas',
            description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet...',
            tags: ['C#', 'Front-end', 'Blazor'],
            image: ciclistImage,
        },
        {
            title: 'Agend Pet',
            subtitle: 'Painel de Administracao para ciclistas',
            description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet...',
            tags: ['C#', 'Front-end', 'Blazor'],
            image: agendPet,
        },
        {
            title: 'Biografia Preta',
            subtitle: 'Painel de Administracao para ciclistas',
            description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet...',
            tags: ['C#', 'Front-end', 'Blazor'],
            image: biografiaImage,
        },
        {
            title: 'Eurosul Equipamentos Nauticos',
            subtitle: 'Automacao PipeDrive',
            description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet...',
            tags: ['C#', 'Front-end', 'Blazor'],
            image: eurosul,
        },
        // Adicione outros casos aqui
    ];


    return (
        <Container id="cases"  sx={{ py: { xs: 8, sm: 16 }, }}>
            <SoftwareHouseContainer>
                <TitleContainer>
                    <IconsContainer>
                        <Brightness1Icon />
                        <Brightness1Icon />
                        <Brightness1Icon />
                    </IconsContainer>
                    <h2>ALGUNS DOS NOSSOS CASES</h2>
                </TitleContainer>

            </SoftwareHouseContainer>


            <CasesContainer>
                {cases.map((caseItem, index) => (
                    <CaseContainer key={index} isEven={index % 2 === 0}>
                        <ImageContainer>
                            <img src={caseItem.image} alt={caseItem.title} />
                        </ImageContainer>
                        <InfoContainer>
                            <h3>{caseItem.title}</h3>
                            <h5>{caseItem.subtitle}</h5>
                            <p>{caseItem.description}</p>
                            <div>
                                {caseItem.tags.map((tag, i) => (
                                    <h1 key={i}>{tag}</h1>
                                ))}
                            </div>
                        </InfoContainer>
                    </CaseContainer>
                ))}
            </CasesContainer>

        </Container>
    );
}
