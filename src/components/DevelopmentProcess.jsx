import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import { IconsContainer, SoftwareHouseContainer, TitleContainer } from './moreAboutUs';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import SearchIcon from '@mui/icons-material/Search';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CodeIcon from '@mui/icons-material/Code';
import DnsIcon from '@mui/icons-material/Dns';
import BuildIcon from '@mui/icons-material/Build';
import { Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

const TimelineWrapper = styled('div')`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 50%;
    width: 100%;
    height: 1px;
    background-color: #94A0B8;
    z-index: 0;
    transform: translateY(-50%);
  }

  .dot{
    height: 15px;
    width: 15px;
    background-color: #F27540;
    position: absolute;
    top: 17%;
    right: 5px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    z-index: 2;
  }
`;

const Card = styled('div')(({ theme }) => ({
    position: "relative",
    background: theme.vars
        ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
        : alpha(theme.palette.background.default, 0.4),
    textAlign: "center",
    width: "100%", // Mudei para 100%
    maxWidth: "300px", // Adicionei um máximo
    height: "200px",
    padding: "1rem",
    margin: "0 auto", // Centralize
    borderRadius: "8px",
    boxShadow: (theme.vars || theme).shadows[1],
    zIndex: 1,
    maxHeight: "100px",
    border: "1px solid #94A0B8",
    ".icon": {
        fontSize: "2rem",
        marginTop: "1.6rem",
        color: "#777",
    },

    "h3": {
        fontSize: "1.2rem",
        margin: "0.5rem 0",
    },

}));


const TextContainer = styled('div')`
  text-align: center;
  margin-bottom: 2rem;

  h3{
    font-size: large;
  }

  p{
    color: #94A0B8;
  }

`;

export default function DevelopmentProcess() {
    const [isCardElevated, setIsCardElevated] = useState(true); // estado para controlar a posição
      const { t } = useTranslation();

    return (
        <Container id="processes" sx={{ py: { xs: 8, sm: 16 } }}>
            <SoftwareHouseContainer>
                <TitleContainer>
                    <IconsContainer>
                        <Brightness1Icon />
                        <Brightness1Icon />
                        <Brightness1Icon />
                    </IconsContainer>
                    <h2>{t("processesTitle")}</h2>
                </TitleContainer>

            </SoftwareHouseContainer>

            <Swiper
                modules={[Autoplay]}
                slidesPerView={2}
                spaceBetween={40}
                style={{ marginTop: '2rem', maxWidth: '100vw' }}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50
                    },
                }}
                centeredSlides={true}
            >
                <SwiperSlide>
                    <TimelineWrapper>
                        <div className='dot'></div>
                        <Card style={{ marginBottom: '0px' }}>
                            <div className="icon"><SearchIcon fontSize='larger' /></div>
                        </Card>
                        <TextContainer>
                            <h3>{t("processesCardTitle1")}</h3>
                            <p>{t("processesCardText1")}</p>
                        </TextContainer>
                    </TimelineWrapper>
                </SwiperSlide>

                <SwiperSlide>
                    <TimelineWrapper>
                        <div className='dot'></div>
                        <Card>
                            <div className="icon"><DriveFileRenameOutlineIcon fontSize='larger' /></div>
                        </Card>
                        <TextContainer>
                            <h3>{t("processesCardTitle2")}</h3>
                            <p>{t("processesCardText2")}</p>
                        </TextContainer>
                    </TimelineWrapper>
                </SwiperSlide>

                <SwiperSlide style={{ position: 'relative', top: isCardElevated ? '40px' : '0' }}>
                    <TimelineWrapper>
                        <div className='dot'></div>
                        <Card>
                            <div className="icon"><CodeIcon fontSize='larger' /></div>
                        </Card>
                        <TextContainer>
                            <h3>{t("processesCardTitle3")}</h3>
                            <p>{t("processesCardText3")}</p>
                        </TextContainer>
                    </TimelineWrapper>
                </SwiperSlide>

                <SwiperSlide>
                    <TimelineWrapper>
                        <div className='dot'></div>
                        <Card>
                            <div className="icon"><DnsIcon fontSize='larger' /></div>
                        </Card>
                        <TextContainer>
                            <h3>{t("processesCardTitle4")}</h3>
                            <p>{t("processesCardText4")}</p>
                        </TextContainer>
                    </TimelineWrapper>
                </SwiperSlide>

                <SwiperSlide style={{ position: 'relative', top: isCardElevated ? '40px' : '0' }}>
                    <TimelineWrapper>
                        <div className='dot'></div>
                        <Card>
                            <div className="icon"><BuildIcon fontSize='larger' /></div>
                        </Card>
                        <TextContainer>
                            <h3>{t("processesCardTitle5")}</h3>
                            <p>{t("processesCardText5")}</p>
                        </TextContainer>
                    </TimelineWrapper>
                </SwiperSlide>
            </Swiper>
        </Container>
    );
}
