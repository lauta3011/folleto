import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import Magazine from './components/Magazine.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Magazine file="/folleto/folleto_final.pdf" />
  </StrictMode>,
)
