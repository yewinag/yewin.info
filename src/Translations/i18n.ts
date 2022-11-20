import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import moment from "moment";

import { TRANSLATIONS_EN, TRANSLATIONS_MM } from ".";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        interpolation: {
            format: function (value, format) {
                if (value instanceof Date) return moment(value).format(format);
                return value;
            },
        },
        resources: {
            en: {
                translation: TRANSLATIONS_EN,
            },
            mm: {
                translation: TRANSLATIONS_MM,
            },
        },
    });
