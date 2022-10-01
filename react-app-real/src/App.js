import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { globalTheme } from './Theme';
import WebPlayback from './WebPlayback';
import { Login } from './containers/Login/index';
import './App.css';

function App() {

  const [token, setToken] = useState('');

  useEffect(() => {

    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();

  }, []);

  return (
    <ThemeProvider theme={globalTheme}>
      <Routes>
        <Route path="/" element={ (token === '') ? <Login/> : <WebPlayback token={token} /> } />
      </Routes>
    </ThemeProvider>
  );
}

export default App;