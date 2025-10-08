import { useState, type ReactNode } from 'react';
import { LanguageContext } from './LanguageContext'; // import the context
import type { Language } from '../TSbasics/translations';

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('EN');

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};