// src/TSbasics/flags.ts
import type { Language } from './translations';

export const flagClasses: Record<Language, string> = {
    EN: 'flag-en',   // UK/GB flag
    LT: 'flag-lt',
    NL: 'flag-nl',
    UA: 'flag-ua',
};

export const wrapperClasses: Record<Language, string> = {
    EN: 'wrapper-en',   // blue-yellow gradient
    LT: 'wrapper-lt',   // flag colors
    NL: 'wrapper-nl',
    UA: 'wrapper-ua',
};
