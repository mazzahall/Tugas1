import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from './components/Footer/Footer'
import Layout from './components/Layout/Layout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout />
    <Footer />
  </StrictMode>,
)
