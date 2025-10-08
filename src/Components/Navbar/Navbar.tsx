import React, { useState, useContext } from 'react';
import type { Language } from '../TSbasics/translations';
import { LanguageContext } from '../Context/LanguageContext';
import './Navbar.css';

const languages: Language[] = ['EN', 'LT', 'NL', 'UA'];

const LanguageSelector: React.FC = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(prev => !prev);

    const handleSelect = (lang: Language) => {
        setLanguage(lang);
        setOpen(false);
    };

    return (
        <div className="lang-selector">
            <button className="lang-toggle" onClick={toggle}>
                🌐 {language} ▾
            </button>

            <div className={`lang-menu ${open ? 'open' : ''}`}>
                {languages.map(lang => (
                    <button
                        key={lang}
                        className={`lang-option ${language === lang ? 'active' : ''}`}
                        onClick={() => handleSelect(lang)}
                    >
                        {lang}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LanguageSelector;
