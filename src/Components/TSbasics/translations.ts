// src/translations.ts

export type Language = 'EN' | 'NL' | 'LT' | 'UA';
export type TranslationKeys = 'greeting' | 'paragraph';

export type TranslationsType = {
    [K in TranslationKeys]: {
        [L in Language]: string
    }
};

const translations: TranslationsType = {
    greeting: {
        EN: "Hello, welcome to our site",
        LT: "Sveiki atvykę į mūsų svetainę",
        NL: "Hallo, welkom op onze site",
        UA: "Привіт, це наш сайт"
    },
    paragraph: {
        EN: "This is a sample paragraph in English.",
        LT: "Tai pavyzdinis pastraipos tekstas lietuvių kalba.",
        NL: "Dit is een voorbeeldtekst in het Nederlands.",
        UA: "Це є прикладний параграф українською мовою."
    }
};

export default translations;