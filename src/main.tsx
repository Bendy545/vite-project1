import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AgeCalculator from "./AgeClaculator.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
      <AgeCalculator />
  </StrictMode>,
)
