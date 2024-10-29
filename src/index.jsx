import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main from './Main.jsx'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import Aside from './Aside.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <Main/>
    <Aside/>
    <Footer/>
  </StrictMode>,
)
