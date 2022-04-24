import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ToggleThemeProps {
  children: ReactNode;
}

interface ToggleThemeContextData {
  theme: string;
  toggleTheme: () => Promise<void>;
}

const ToggleThemeContext = createContext<ToggleThemeContextData>(
  {} as ToggleThemeContextData,
);

const ToggleThemeProvider = ({ children }: ToggleThemeProps) => {
  const deviceTheme = useColorScheme();
  const [theme, setTheme] = useState('light');

  const getTheme = useCallback(async () => {
    try {
      const themeValue = await AsyncStorage.getItem('@theme');

      if (themeValue) {
        setTheme(themeValue);
      } else {
        setTheme(deviceTheme || theme);
      }
    } catch (error) {
      console.log(error);
    }
  }, [theme, deviceTheme]);

  const toggleTheme = async () => {
    const themeValue = theme === 'dark' ? 'light' : 'dark';

    try {
      // const themeStorage = await AsyncStorage.getItem('@theme');

      // if (themeStorage) {
      //   await AsyncStorage.removeItem('@theme');
      // }

      await AsyncStorage.setItem('@theme', themeValue);

      setTheme(themeValue);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTheme();
  }, [getTheme]);

  return (
    <ToggleThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ToggleThemeContext.Provider>
  );
};

function useDarkMode(): ToggleThemeContextData {
  const context = useContext(ToggleThemeContext);

  if (!context) {
    throw new Error('useDarkMode must be used within an ToggleThemeProvider');
  }

  return context;
}

export { ToggleThemeProvider, useDarkMode };
