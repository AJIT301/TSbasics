import { createContext } from 'react';
import type { Language } from '../TSbasics/translations';

export interface LanguageContextProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    showFlags: boolean;
    setShowFlags: (show: boolean) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
    language: 'EN',
    setLanguage: () => { },
    showFlags: true,
    setShowFlags: () => { }
});
