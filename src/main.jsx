import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App.jsx'
import { defaultTheme } from './theme/default.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)