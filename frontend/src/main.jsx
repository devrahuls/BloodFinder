import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Navbar/>
    <App />
    <Footer/>
  </React.StrictMode>,
)
