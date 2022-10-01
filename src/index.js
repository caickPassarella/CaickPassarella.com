import { render } from 'react-dom';
import App from './App';
import { Suspense } from 'react';
import { Loading } from './Components/Loading';

const rootElement = document.getElementById('root');
render(
  <>
    <Suspense fallback={<div>Loading...</div>}></Suspense>
    <App />
    <Suspense />
  </>,
  rootElement,
);
