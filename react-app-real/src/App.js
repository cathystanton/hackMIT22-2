import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { globalTheme } from './Theme';
import Navbar from './components/Navbar/index';
import Home from './containers/Home/index';
import Listen from './containers/Listen/index';
import Login from './containers/Login/index';

const App = () => {

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
    <ThemeProvider theme = {globalTheme}>
      <Routes>
        <Route path="/listen" element={ (token === '') ? <Login/> : 
                                                          <div>
                                                            <Navbar props="Listen" />
                                                            <Listen token={token} /> 
                                                          </div> } />
        <Route path='/' element={<Home />} props="Home"/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
