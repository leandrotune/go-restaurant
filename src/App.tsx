import { BrowserRouter as Routes } from 'react-router-dom';

import Router from './routes';

import GlobalStyle from './styles/global';

export default function App() {
  return (
    <>
      <GlobalStyle />
      < Routes >
        <Router />
      </Routes>
    </>
  )
};


