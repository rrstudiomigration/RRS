import { createContext, useReducer } from "react"
import DarkModeReducer from "./darkModeReducer";
import useMediaQuery from '@mui/material/useMediaQuery';

const INITIAL_STATE = {
    darkMode: true
}
export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const INITIAL_STATE_SYSTEM = { ...INITIAL_STATE, darkMode: prefersDarkMode }

    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE_SYSTEM);

    return (
        <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
            {children}
        </DarkModeContext.Provider>
    )
}