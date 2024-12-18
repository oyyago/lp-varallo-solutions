import { styled } from '@mui/material';
import Container from '@mui/material/Container';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import TerminalIcon from '@mui/icons-material/Terminal';
import CodeIcon from '@mui/icons-material/Code';

export const SoftwareHouseContainer = styled('div')`
    display: flex;
    flex-direction: row;
    gap: 10rem;
    p{
        width: 70%;
        font-size: small;
        color: #94A0B8;
    }

    @media (max-width: 900px) {
        flex-direction: column;
        gap: 0;
}
`

export const TitleContainer = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2{
        text-align: left;
        margin: 5px 0;
    }
`;

export const IconsContainer = styled('div')`
    display: flex;
    flex-direction: row;
`;

const BoxesContainer = styled('div')`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 220px;
    gap: 1rem;

    & div:nth-child(2) {
        width: 60%;
        display: flex;
        padding: 10px;
        flex-direction: column;
        gap: 1rem;
        font-size: small;
    }

    & div {
        height: 100%;
        width: 20%;
        color: #94A0B8;
        border: 1px solid #94A0B8;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & div:nth-child(3) {
        border-radius: 10px 0px 0px 10px ;
        border-right: none;
    }

    & div:nth-child(1) {
        border-radius: 0px 10px 10px 0 ;
        border-left: none;
    }
`;

const Abouts = styled('div')`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: space-between;
    @media (max-width: 900px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const About = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div{
        display: flex;
        justify-content: center;
        height: fit-content;
        font-size: x-large;
        height: fit-content;
        gap: 0.5rem;
        span{
            height: fit-content;
            display: flex;
            color: #F27540;
            align-items: center;
            justify-content: center;
        }

        h4{
            height: fit-content;
            margin: 0;
        }
    }
    p{
        font-size: small;
        color: #94A0B8;
    }
`;

export default function MoreAboutUs() {
    return (
        <Container id="about_us" sx={{ py: { xs: 8, sm: 16 }, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <SoftwareHouseContainer>
                <TitleContainer>
                    <IconsContainer>
                        <Brightness1Icon />
                        <Brightness1Icon />
                        <Brightness1Icon />
                    </IconsContainer>
                    <h2>ENTENDA QUEM SOMOS NOS</h2>
                </TitleContainer>

                <p>Uma Software House é uma empresa de tecnologia especializada na criação de aplicativos, sites, softwares e produtos digitais centrados no usuário. A Attri é uma Software House com equipe multidisciplinar e metodologias ágeis.
                </p>
            </SoftwareHouseContainer>

            <BoxesContainer>
                <div></div>
                <div>
                    <CodeIcon fontSize='large' />
                    Além de desenvolver trabalhar com as mais diversas tecnologias, nós garantimoss a melhor infraestrutura, manutenção e evolução do seu projeto.
                </div>
                <div></div>
            </BoxesContainer>

            <Abouts>
                <About>
                    <div>
                        <span>+</span>
                        <h4>2 ANOS</h4>
                    </div>
                    <p>de experiência no ramo</p>
                </About>

                <About>
                    <div>
                        <span>+</span>
                        <h4>50</h4>
                    </div>
                    <p>Clientes satisfeitos</p>
                </About>

                <About>
                    <div>
                        <span>+</span>
                        <h4>50 PROJETOS</h4>
                    </div>
                    <p>de design e tecnologia realizados</p>
                </About>

                <About>
                    <div>
                        <span>+</span>
                        <h4>4 MIL</h4>
                    </div>
                    <p>horas de desenvolvimento web</p>
                </About>

            </Abouts>
        </Container>
    )
};