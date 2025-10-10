import React, { useContext } from 'react';
import { LanguageContext } from '../Context/LanguageContext';
import './Navbar.css';

const FlagToggle: React.FC = () => {
    const { showFlags, setShowFlags } = useContext(LanguageContext);

    const toggleFlags = () => {
        setShowFlags(!showFlags);
    };

    return (
        <button className={`flag-toggle ${showFlags ? 'active' : 'inactive'}`} onClick={toggleFlags}>
            {showFlags ? 'Flag On' : 'Flag Off'}
        </button>
    );
};

export default FlagToggle;
