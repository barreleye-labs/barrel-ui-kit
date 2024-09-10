import { createRoot } from 'react-dom/client'
import App from './App'
import { theme } from '../tokens/muiTheme';
import { ThemeProvider } from '@mui/material/styles';
import { CssVarsProvider } from '@mui/joy/styles';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <CssVarsProvider theme={theme}>
      <App />
    </CssVarsProvider>
  </ThemeProvider>
)
