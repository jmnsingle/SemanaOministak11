import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

function usePersistedState(key, initialValue) {
  const [ state, setState ] = useState(() => {
    const storageValue = AsyncStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    AsyncStorage.setItem(key, JSON.stringify(state))
  },[key, state])

  return [state, setState];
}

export default usePersistedState;