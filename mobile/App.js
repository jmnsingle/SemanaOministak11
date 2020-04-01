import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React, { useCallback, useState, useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// import { useColorScheme } from 'react-native-appearance';
import { ThemeProvider } from 'styled-components';

import Context from './src/styles/thems/context';
import light from './src/styles/thems/light';
import dark from './src/styles/thems/dark';

import usePersistedState from './src/utils/usePersistedState';
import Routes from './src/routes';

export default function App() {
  const deviceTheme = useColorScheme();
  const [theme, setTheme] = useState(deviceTheme === 'light' ? light : dark);

  useEffect(() => {
    async function getPersistedTheme() {
      const persistedTheme = await AsyncStorage.getItem('theme');

      if (persistedTheme) {
        setTheme(persistedTheme === 'light' ? light : dark);
      }
    }

    getPersistedTheme();
  }, []);

  const persistTheme = useCallback(async (themeToPersist) => {
    setTheme(themeToPersist === 'light' ? light : dark);
    await AsyncStorage.setItem('theme', themeToPersist);
  }, []);

  useEffect(() => {
    persistTheme(deviceTheme);
  }, [deviceTheme, persistTheme]);

  const toggleTheme = useCallback(() => {
    persistTheme(theme.title === 'light' ? 'dark' : 'light');
  }, [theme.title, persistTheme]);


  return (
    <Context.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle={theme.title === 'dark' ? 'ligh-content' : 'dark-content'} backgroundColor={theme.title === 'dark' ? '#000' : '#f0f0f0'} />
        <Routes />
      </ThemeProvider>
    </Context.Provider>
  );
}
