import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import brazilIcon from '../assets/brazil_icon.svg';
import brazilIconBlack from '../assets/brazil_icon_black.svg';
import usaIcon from '../assets/usa_icon.svg';
import usaIconBlack from '../assets/usa_icon_black.svg';
import spainIcon from '../assets/espain_flag.svg';
import { useTranslation } from 'react-i18next';

export default function LanguageSelectIconDropdown(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [language, setLanguage] = React.useState('en');
    const open = Boolean(anchorEl);
    const { i18n, t } = useTranslation();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageChange = (lang) => () => {
        setLanguage(lang);
        setAnchorEl(null);
        i18n.changeLanguage(lang);
        // Adicione lógica para atualizar o idioma no i18n aqui
    };

    return (
        <React.Fragment>
            <IconButton
                onClick={handleClick}
                disableRipple
                size="small"
                aria-controls={open ? 'language-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                {...props}
            >
                <img
                    src={
                        language === 'ptBr'
                            ? brazilIcon
                            : language === 'en'
                                ? usaIcon
                                : spainIcon
                    }
                    alt="Current language"
                    style={{ width: '24px', height: '24px' }}
                />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                id="language-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        variant: 'outlined',
                        elevation: 0,
                        sx: { my: '4px' },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleLanguageChange('en')}>
                    <Box
                        component="img"
                        src={usaIcon}
                        alt={t('english')}
                        sx={{
                            width: 24,
                            height: 24,
                            mr: 1,
                            transition: 'all 0.3s',
                            '&:hover': { filter: 'none' },
                        }}
                    />
                    {t('english')}
                </MenuItem>
                <MenuItem onClick={handleLanguageChange('ptBr')}>
                    <Box
                        component="img"
                        src={brazilIcon} // Ícone preto por padrão
                        alt={t('portugues')}
                        sx={{
                            width: 24,
                            height: 24,
                            mr: 1,
                            transition: 'all 0.3s',
                            '&:hover': { content: `url(${brazilIcon})` }, // Troca para a bandeira colorida no hover
                        }}
                    />
                    {t('portugues')}
                </MenuItem>

                <MenuItem onClick={handleLanguageChange('es')}>
                    <Box
                        component="img"
                        src={spainIcon} // Ícone preto por padrão
                        alt={t('spanish')}
                        sx={{
                            width: 24,
                            height: 24,
                            mr: 1,
                            transition: 'all 0.3s',
                            '&:hover': { content: `url(${brazilIcon})` }, // Troca para a bandeira colorida no hover
                        }}
                    />
                    {t('spanish')}
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
