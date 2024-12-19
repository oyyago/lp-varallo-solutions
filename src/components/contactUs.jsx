import React, { useEffect } from 'react';
import { IconsContainer, SoftwareHouseContainer, TitleContainer } from './moreAboutUs';
import { alpha, Container, InputLabel, Stack, styled, TextareaAutosize, TextField } from '@mui/material';
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
  const { t } = useTranslation();

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
          <OtherContainer >
            <InputContainer
            >
              <InputLabel htmlFor="email-hero" >
                {t('contactInputNameLabel')}
              </InputLabel>
              <TextField
                id="email-hero"
                hiddenLabel
                size="small"
                variant="outlined"
                aria-label={t('contactInputNamePlaceholder')}
                placeholder={t('contactInputNamePlaceholder')}
                fullWidth
                slotProps={{
                  htmlInput: {
                    autoComplete: 'off',
                    'aria-label': t('contactInputNamePlaceholder'),
                  },
                }}
              />
            </InputContainer>
            <InputContainer
            >
              <InputLabel htmlFor="email-hero">
                {t('contactInputCompanyNameLabel')}
              </InputLabel>
              <TextField
                id="email-hero"
                hiddenLabel
                size="small"
                variant="outlined"
                aria-label={t('contactInputCompanyNamePlaceholder')}
                placeholder={t('contactInputCompanyNamePlaceholder')}
                fullWidth
                slotProps={{
                  htmlInput: {
                    autoComplete: 'off',
                    'aria-label': t('contactInputCompanyNamePlaceholder'),
                  },
                }}
              />
            </InputContainer>
          </OtherContainer>

          <InputContainer
          >
            <InputLabel htmlFor="email-hero" >
              {t('contactInputEmailLabel')}
            </InputLabel>
            <TextField
              id="email-hero"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter the corporate email"
              placeholder={t('contactInputEmailPlaceholder')}
              fullWidth
              slotProps={{
                htmlInput: {
                  autoComplete: 'off',
                  'aria-label': 'Enter the corporate email',
                },
              }}
            />
          </InputContainer>
          <InputContainer
          >
            <InputLabel htmlFor="email-hero">
              {t('contactInputPhoneLabel')}
            </InputLabel>
            <TextField
              id="email-hero"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your phone"
              placeholder=""
              fullWidth
              slotProps={{
                htmlInput: {
                  autoComplete: 'off',
                  'aria-label': 'Enter your phone',
                },
              }}
            />
          </InputContainer>

          <InputContainer>
            <InputLabel htmlFor="project-description">
              {t('contactInputDescriptionLabel')}
            </InputLabel>
            <StyledTextarea
              id="project-description"
              minRows={4}
              placeholder={t('contactInputDescriptionPlaceHolder')}
              style={{ width: '100%' }}
            />
          </InputContainer>

          <ButtonContainer>
            <button>{t('contactButtonSubmit')}</button>
          </ButtonContainer>
        </ContactContainer>

      </MainContainer>
    </Container>
  );
};
