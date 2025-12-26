import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Crucial: This 'root' must exist in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)