import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle} from './styles/'
import { AppThemeProvider } from './contexts/AppThemeContext.tsx'
import { Provider } from 'react-redux'
import store from './redux/index.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <React.StrictMode>
      <Provider store={store}>
        <AppThemeProvider>
          <GlobalStyle />
          <App />
        </AppThemeProvider>
      </Provider>
    </React.StrictMode>
  </StrictMode>
)
