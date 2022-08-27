import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DarkModeContextProvider } from './context/darkModeContext'
import Root from './Root'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <DarkModeContextProvider>
      <Root />
    </DarkModeContextProvider>
  </StrictMode>
)
