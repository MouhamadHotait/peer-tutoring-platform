import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { SessionsProvider } from './context/SessionsContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SessionsProvider>
        <App />
      </SessionsProvider>
    </BrowserRouter>
  </StrictMode>,
)
