import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import ptBrJson from './translations/pt-br.json';
import enJson from './translations/en.json';
import esjson from './translations/es.json';

i18n.use(initReactI18next).init({
    fallbackLng:'en',
    interpolation:{
        escapeValue:false
    },
    resources:{
        en:enJson,
        ptBr:ptBrJson,
        es:esjson
    }
});