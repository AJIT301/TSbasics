// translations.ts

// src/translations.ts
type Language = 'EN' | 'LT';
type TranslationKeys = 'greeting' | 'paragraph';

type TranslationsType = {
    [K in TranslationKeys]: {
        [L in Language]: string
    }
};

export const translations: TranslationsType = {
    greeting: {
        EN: "Hello, welcome to our site",
        LT: "Sveikas, sveiki atvykę į mūsų svetainę"
    },
    paragraph: {
        EN: "This is a sample paragraph in English.",
        LT: "Tai pavyzdinis pastraipos tekstas lietuvių kalba."
    }
}; // optional: makes keys readonly