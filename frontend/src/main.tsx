import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme, Typography, ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.tsx'

const theme = createTheme({
  typography: {
    fontFamily: "Roboto Mono,serif",
  allVariants: { color: "whitesmoke" },
 },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
     <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)