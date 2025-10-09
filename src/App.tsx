// App.tsx
import { useContext } from 'react';
import { LanguageProvider } from './Components/Context/LanguageProvider'
import { LanguageContext } from './Components/Context/LanguageContext';
import { wrapperClasses } from './Components/TSbasics/flags';
import './App.css';
import LanguageSelector from './Components/Navbar/Navbar';
import Hello from './Components/TSbasics/Ts1';


function AppContent() {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <header className="language-selector">
        <LanguageSelector />
      </header>

      <fieldset className={`wrapper ${wrapperClasses[language]}`}>
        <legend>Wrapper Container</legend>

        <fieldset className='container'>
          <legend>Component Wrapper</legend>
          <Hello name="Iguana"
          />
          <Hello name="Lemur"
            language='LT' />
          <Hello name="Sloth"
            language='UA' />
          <Hello name="Cheetah"
            language='NL' />
        </fieldset>
      </fieldset>
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
