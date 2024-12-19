import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import SitemarkIcon from './SitemarkIcon';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
        '@media (max-width:900px)': {
          alignItems: 'center', // Center content horizontally when width is <= 900px
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
          '@media (max-width:900px)': {
            width:'100%',
            justifyContent: 'center', // Center content when width is <= 900px
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
            '@media (max-width:900px)': {
              width:'100%',
              minWidth: '100%', // Make sure content takes full width on smaller screens
            },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' },
         '@media (max-width:900px)': {
          width:'100%',
          minWidth: '100%', // Make sure content takes full width on smaller screens
        }, }}>
            <SitemarkIcon />
            <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
              Varallo solutions LTDA
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              {t('footerAboutUs')}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
          '@media (max-width:900px)': {
            justifyContent: 'center', // Center the text on small screens
          },
        }}
      >
        <div>
          {t('footerRightsCompany')}
        </div>
      </Box>
    </Container>
  );
}
