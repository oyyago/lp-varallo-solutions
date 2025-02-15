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
import { useTranslation } from 'react-i18next';
import vapnetImage from '../assets/vapnet.webp';

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
        gap: '0.6rem',
        rowGap:"0.2rem",
        flexWrap: "wrap",
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
    const [isCardElevated, setIsCardElevated] = useState(true);
    const { t } = useTranslation();
    
    const cases = [
        {
            title: t("interactName"),
            subtitle: t('interactTitle'),
            description: t('interactText'),
            tags: ['Node-js', 'Typescript', 'React', 'AWS', 'Redis', 'Mysql'],
            image: interactImage,
        },
        {
            title: t("agendPetName"),
            subtitle: t('agendPetTitle'),
            description: t('agendPetText'),
            tags: ['Angular', 'Typescript', 'Figma', 'CSS'],
            image: agendPet,
        },
        {
            title: t("blackBiographyName"),
            subtitle: t('blackBiographyTitle'),
            description: t('blackBiographyText'),
            tags: ['Node-js', 'Javascript', 'Metamask', 'OpenAi', 'EJS', 'Mysql'],
            image: biografiaImage,
        },
        {
            title: t("eurosulName"),
            subtitle: t('eurosulTitle'),
            description: t('eurosulText'),
            tags: ['C#', '.NET', 'Mysql'],
            image: eurosul,
        },
        {
            title: t("vapnetName"),
            subtitle: t('vapnetTitle'),
            description: t('vapnetText'),
            tags: ['Node-js', 'TypeScript', 'OpenAi'],
            image: vapnetImage,
        },
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
                    <h2>{t("casesTitle")}</h2>
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
