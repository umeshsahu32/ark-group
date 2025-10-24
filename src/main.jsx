import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './routes/AppRouter.jsx'
import { RouterProvider } from 'react-router-dom'
import ErrorBoundary from './components/error-boundary/ErrorBoundary.jsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <ErrorBoundary>
        <RouterProvider router={AppRouter} />
      </ErrorBoundary>
    </HelmetProvider>
  </StrictMode>,
)
