import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { darkThemeProperties, lightThemeProperties } from './Theme';
import { DarkModeContext } from './context/darkModeContext';
import AppRouter from './components/routes/AppRouter';

const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  const selectedTheme = darkMode
    ? responsiveFontSizes(createTheme(darkThemeProperties))
    : responsiveFontSizes(createTheme(lightThemeProperties));

  return (
    <ThemeProvider theme={selectedTheme}>
      s
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
