import React from 'react';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import Context from './styles/thems/context';
import light from './styles/thems/light';
import dark from './styles/thems/dark';

import Routes from './routes';

function App() {
  const [ theme, setTheme ] = usePersistedState('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }


  return (
    <Context.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
