import React, { createContext, Dispatch, useReducer, ReactNode } from 'react';
import DarkModeReducer, { ThemeAction } from './darkModeReducer';
import useMediaQuery from '@mui/material/useMediaQuery';

const initialState = {
  darkMode: true,
};

interface DarkModeContextProviderProps {
  children: ReactNode;
}

export const DarkModeContext = createContext<{
  darkMode: boolean;
  dispatch: Dispatch<ThemeAction>;
}>({ ...initialState, dispatch: () => null });

export const DarkModeContextProvider = ({ children }: DarkModeContextProviderProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const INITIAL_STATE_SYSTEM = { ...initialState, darkMode: prefersDarkMode };

  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE_SYSTEM);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
