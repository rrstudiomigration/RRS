import React, { createContext, Dispatch, useReducer } from 'react'
import DarkModeReducer from './darkModeReducer'
import useMediaQuery from '@mui/material/useMediaQuery'
import { ReactNode } from 'react'

const initialState = {
  darkMode: true
}

interface DarkModeContextProviderProps {
  children: ReactNode;
}

export const DarkModeContext = createContext<{
  darkMode: boolean;
  dispatch: Dispatch<any>;
}>({ ...initialState, dispatch: () => null })

export const DarkModeContextProvider = ({ children }: DarkModeContextProviderProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const INITIAL_STATE_SYSTEM = { ...initialState, darkMode: prefersDarkMode }

  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE_SYSTEM)

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  )
}