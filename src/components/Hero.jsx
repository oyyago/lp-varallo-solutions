import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import osCara from '../assets/osCara.png';
import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';
import fundoBlack from '../assets/fundoBlack.svg';
import fundoWhite from '../assets/fundoWhite.svg';
import { useTranslation } from 'react-i18next';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar'; // Importando o Snackbar
import Alert from '@mui/material/Alert'; // Para usar dentro do Snackbar

const StyledBox = styled('div')(({ theme }) => ({
  backgroundImage: theme.palette.mode === 'light'
    ? `url(${fundoWhite})`
    : `url(${fundoBlack})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '90vh',
  width: '100vw',
  [theme.breakpoints.down('sm')]: {
    backgroundImage: 'none',
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
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

export default function Hero() {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false); // Estado para controlar o carregamento
  const [emailValid, setEmailValid] = React.useState(true); // Estado para validar o email
  const [snackbarOpen, setSnackbarOpen] = React.useState(false); // Estado para controlar o Snackbar
  const [resultMessage, setResultMessage] = React.useState('');
  const [error, setError] = React.useState(false);
  // Função para validar o e-mail
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Função de envio do email
  const sendEmail = async () => {
    if (!validateEmail(email)) {
      setEmailValid(false); // Definir email como inválido
      return;
    }

    setEmailValid(true); // Caso o email seja válido, setamos como válido
    setLoading(true); // Ativar o carregamento (spinner)

    try {
      const response = await fetch("https://www.api.varallosolutions.com/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          lang: i18n.language, // Obtém o idioma atual do i18n
        }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log(result.message);
        setError(false)
        setResultMessage(result.message);
        setSnackbarOpen(true); // Abrir o Snackbar
      } else {
        setError(true)
        setResultMessage(result.message)
        setSnackbarOpen(true); // Abrir o Snackbar
        console.error("Erro no servidor:", result || "Erro desconhecido.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    } finally {
      setLoading(false); // Desativar o carregamento
    }
  };


  return (
    <StyledBox id="home">
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
                {t("homeTitle1")}&nbsp;
                <Typography
                  component="span"
                  variant="h1"
                  sx={(theme) => ({
                    fontSize: 'inherit',
                    color: 'hsla(25.102040816326532, 95.14563106796116%, 59.6078431372549%, 0.851)',
                  })}
                >
                  {t("homeTitle2")}
                </Typography>
              </Typography>
              <Typography
                sx={{
                  textAlign: 'center',
                  color: 'text.secondary',
                  width: { sm: '100%', md: '80%' },
                }}
              >
                {t("homeSubTitle")}
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
                  aria-label={t("homeplaceholderInput")}
                  placeholder={t("homeplaceholderInput")}
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!emailValid} // Aplica erro se o email for inválido
                  helperText={!emailValid ? t('homeEmailInputError') : ''}
                  slotProps={{
                    htmlInput: {
                      autoComplete: 'off',
                      'aria-label': t("homeplaceholderInput"),
                    },
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ minWidth: 'fit-content' }}
                  onClick={sendEmail}
                  disabled={loading} // Desabilita o botão enquanto carrega
                >
                  {loading ? <CircularProgress size={24} color="primary" /> : t("homeButtonSubmit")}
                </Button>
              </Stack>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ textAlign: 'center' }}
              >
                {t("homeTextBellowInput")}
              </Typography>
            </Stack>
          </MainContainer>
          <ImageContainer>
            <img src={osCara} alt="" style={{ width: '370px' }} />
          </ImageContainer>
        </Container>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert
            onClose={() => setSnackbarOpen(false)}
            severity={error?'error':'success'}
            sx={{ width: '100%' }}
          >
            {resultMessage}
          </Alert>
        </Snackbar>
      </Box>
    </StyledBox>
  );
}
