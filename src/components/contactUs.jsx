import React, { useEffect, useState } from 'react';
import { IconsContainer, SoftwareHouseContainer, TitleContainer } from './moreAboutUs';
import { Alert, alpha, CircularProgress, Container, InputLabel, Snackbar, Stack, styled, TextareaAutosize, TextField } from '@mui/material';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { visuallyHidden } from '@mui/utils';
import { useTranslation } from 'react-i18next';

const MainContainer = styled('div')`
  display: flex;
  flex-direction: row;
  margin-top: 4rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const ContactContainer = styled('div')`
  display: flex;
  flex-direction: column;
  border: 1px solid #94A0B8;
  width: 80%;
  padding: 2rem;
  border-radius: 10px;
  gap: 1rem;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const InputContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;

  label{
    text-align: left;
    margin-left: 5px;
  }
`;

const OtherContainer = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;


const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
  width: '100%',
  padding: '8px 12px',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.default,
  fontSize: theme.typography.body1.fontSize,
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.primary,
  transition: 'border-color 120ms ease-in',
  resize: 'vertical', // Permite redimensionar apenas verticalmente
  '&:hover': {
    borderColor: theme.palette.grey[400],
  },
  '&:focus': {
    outline: `3px solid ${alpha(theme.palette.primary.main, 0.5)}`,
    borderColor: theme.palette.primary.main,
  },
}));

const OurContactContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 800px) {
    width: 100%;
    
  }
`;

const Contact = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;

  p{
    width: 100%;
    text-align: left;
    font-size: medium;
  }

  div{
    width: 100%;
    margin-bottom: 1rem;
    text-align: left;
    span{
      margin: 0;
      width: 100%;
      display: flex;
      text-align: left;
    }

    h3{
      font-size: x-large;
      margin: 5px 0;
    }
  }
`;

const ButtonContainer = styled('div')`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-top: 1rem;
  
  button {
    background-color: #F27540;
    color: white;
    font-size: medium;
    font-weight: bold;
    border: none;  /* Remove border if any */
    padding: 10px 20px;  /* Optional padding for better look */
    border-radius: 5px;  /* Optional border radius for rounded corners */
    cursor: pointer;  /* Shows pointer cursor on hover */
    transition: background-color 0.3s ease, transform 0.2s ease;  /* Smooth transition on hover */
  }

  button:hover {
    background-color: #e0642d;  /* Darker shade of the original color */
    transform: scale(1.05);  /* Slight scale effect on hover */
  }
`;


export const ContactUs = () => {
  const { t, i18n } = useTranslation();
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    description: '',
  });
  const [errors, setErrors] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [resultMessage, setResultMessage] = React.useState('');
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false); // Estado para controlar o carregamento

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = t('contactInputNameError');
    if (!form.company.trim()) newErrors.company = t('contactInputCompanyNameError');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = t('contactInputEmailError');
    if (!form.phone.trim()) newErrors.phone = t('contactInputPhoneError');
    if (!form.description.trim()) newErrors.description = t('contactInputDescriptionError');
    return newErrors;
  };

  const handleSubmit = async () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true); // Ativar o carregamento (spinner)
    try {
      const response = await fetch("https://api.varallosolutions.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name:form.name,
          companyName:form.company,
          email:form.email,
          description:form.description,
          phone:form.phone,
          lang: i18n.language, // Obtém o idioma atual do i18n
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Mostra a mensagem de sucesso da resposta
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
      setErrors({});
      setLoading(false); // Desativar o carregamento
    }
  };

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
    setErrors({ ...errors, [field]: '' });
  };

  return (
    <Container id="contact" sx={{ py: { xs: 8, sm: 16 }, }}>
      <SoftwareHouseContainer>
        <TitleContainer>
          <IconsContainer>
            <Brightness1Icon />
            <Brightness1Icon />
            <Brightness1Icon />
          </IconsContainer>
          <h2>{t('contactTitle')}
          </h2>
        </TitleContainer>
        <p>{t('contactText')}</p>
      </SoftwareHouseContainer>

      <MainContainer>
        <OurContactContainer>


          <Contact>
            <div>
              <span>{t('ContactHotline')}</span>
              <h3>{t('contactPhone')}</h3>
            </div>

            <p><strong>Email:</strong> {t('contactEmail')}</p>
            <p><strong>{t('contactTextWorkHour')}</strong> {t('contactWorkHour')}</p>
          </Contact>
        </OurContactContainer>

        <ContactContainer>
          <OtherContainer>
            <InputContainer>
              <InputLabel>{t('contactInputNameLabel')}</InputLabel>
              <TextField
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                error={!!errors.name}
                helperText={errors.name}
                placeholder={t('contactInputNamePlaceholder')}
              />
            </InputContainer>
            <InputContainer>
              <InputLabel>{t('contactInputCompanyNameLabel')}</InputLabel>
              <TextField
                value={form.company}
                onChange={(e) => handleChange('company', e.target.value)}
                error={!!errors.company}
                helperText={errors.company}
                placeholder={t('contactInputCompanyNamePlaceholder')}
              />
            </InputContainer>
          </OtherContainer>

          <InputContainer>
            <InputLabel>{t('contactInputEmailLabel')}</InputLabel>
            <TextField
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              placeholder={t('contactInputEmailPlaceholder')}
            />
          </InputContainer>

          <InputContainer>
            <InputLabel>{t('contactInputPhoneLabel')}</InputLabel>
            <TextField
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </InputContainer>

          <InputContainer>
            <InputLabel>{t('contactInputDescriptionLabel')}</InputLabel>
            <StyledTextarea
              value={form.description}
              onChange={(e) => handleChange('description', e.target.value)}
              style={{
                borderColor: errors.description ? 'red' : undefined,
              }}
            />
            {errors.description && (
              <span style={{ color: 'red', fontSize: '12px' }}>
                {errors.description}
              </span>
            )}
          </InputContainer>

          <ButtonContainer>
            <button onClick={handleSubmit}> {loading ? <CircularProgress size={20} sx={{ color: 'white' }} /> :t('contactButtonSubmit')}</button>
          </ButtonContainer>
        </ContactContainer>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={() => setSnackbarOpen(false)}
        >
          <Alert
            severity={error ? 'error' : 'success'}
            onClose={() => setSnackbarOpen(false)}>
            {resultMessage}
          </Alert>
        </Snackbar>
      </MainContainer>
    </Container>
  );
};
