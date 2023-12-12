import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ProviderTraduction } from './context/traduction.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProviderTraduction>
    <App />
    </ProviderTraduction>
  </React.StrictMode>,
)
