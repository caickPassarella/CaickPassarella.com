/* eslint-disable require-jsdoc */
import './App.css';
import i18n from './i18n';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages';
import { useState } from 'react';
import LocaleContext from './LocaleContext';

function App() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on('languageChanged', (lng) => setLocale(i18n.language));
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </LocaleContext.Provider>
  );
}

export default App;
