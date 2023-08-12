import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GlobalContextReorderProvider } from './context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalContextReorderProvider>
      <App />
    </GlobalContextReorderProvider>
  </React.StrictMode>,
)