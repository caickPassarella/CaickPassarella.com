/* eslint-disable require-jsdoc */
import './App.css';
import i18n from './i18n';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
