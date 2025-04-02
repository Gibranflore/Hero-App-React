import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import '../src/index.css'
import { HeroApp } from './HeroApp'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HeroApp />
    </BrowserRouter>
  </StrictMode>,
)
