// App.tsx
import './App.css';
import LanguageSelector from './Components/Navbar/Navbar';
import Hello from './Components/TSbasics/Ts1';
import { LanguageProvider } from './Components/Context/LanguageProvider'
import { useContext } from 'react';
import { LanguageContext } from './Components/Context/LanguageContext';
import { wrapperClasses } from './Components/TSbasics/flags';

function AppContent() {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <LanguageSelector />

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
