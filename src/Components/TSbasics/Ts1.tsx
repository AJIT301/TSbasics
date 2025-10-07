//Ts1.tsx
// import React from 'react';
import type { HelloProps } from '../../types';
import './Ts1.css';
import { translations } from './translations';
//React.FC<HelloProps> tells TypeScript:
// This is a React functional component
// It accepts props of type HelloProps
// Props are destructured in the parameter list.

// const Hello: React.FC<HelloProps> = ({ name }) => {
//     return <div>Hello, {name}</div>;
// };

const Hello = ({ name, language = 'EN', greeting, paragraph }: HelloProps) => {


    // const greetingText = greeting ?? translations.greeting[language ?? 'EN'];
    // const paragraphText = paragraph ?? translations.paragraph[language ?? 'EN'];
    const greetingText = greeting ?? translations.greeting[language];
    const paragraphText = paragraph ?? translations.paragraph[language];
    return (

        <fieldset className='nested-container'>
            <legend>Component Container</legend>
            <h1>{greetingText}, {name}!</h1>
            <p>{paragraphText}</p>
        </fieldset>
    )

};

export default Hello;
