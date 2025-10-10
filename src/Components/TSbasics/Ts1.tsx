//Ts1.tsx
// import React from 'react';
import { useContext } from 'react';
import type { HelloProps } from '../../types';
import translations from './translations';
import { LanguageContext } from '../Context/LanguageContext';
import './Ts1.css';
import './flag.css';
import { flagClasses } from './flags';
//React.FC<HelloProps> tells TypeScript:
// This is a React functional component
// It accepts props of type HelloProps
// Props are destructured in the parameter list.

// const Hello: React.FC<HelloProps> = ({ name }) => {
//     return <div>Hello, {name}</div>;
// };

const Hello = ({ name, greeting, paragraph, language: langProp }: HelloProps) => {

    const { language: contextLang, showFlags } = useContext(LanguageContext);
    const lang = langProp ?? contextLang; // use prop if provided, otherwise context
    // const greetingText = greeting ?? translations.greeting[language ?? 'EN'];
    // const paragraphText = paragraph ?? translations.paragraph[language ?? 'EN'];
    // or we can declare language = 'EN' and avoid using it in every line of code.
    const greetingText = greeting ?? translations.greeting[lang];
    const paragraphText = paragraph ?? translations.paragraph[lang];

    return (

        <fieldset className={`nested-container${showFlags ? ` ${flagClasses[lang]} flag-overlay` : ''}`}>
            <legend>Component Container</legend>
            <h1>{greetingText}, {name}!</h1>
            <p>{paragraphText}</p>

        </fieldset>
    )

};

export default Hello;
