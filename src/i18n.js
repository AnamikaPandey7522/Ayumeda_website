import i18n from  "i18next";
import backend from "i18next-http-backend";
import LanguageDetectorModule  from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    backend:{
        loadPath:"/assets/i18n/{{ns}}/{{lng}}.json",
    },
    fallbacking:"en",
    debug: false,
    ns:["common","home","profile"],

    interpolation:{
        escapeValue:false,
        formatSeparator:",",
    },
    react:{
        wait:true,
    }
});