import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './routes/AppRouter.jsx'
import { RouterProvider } from 'react-router-dom'
import ErrorBoundary from './components/error-boundary/ErrorBoundary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={AppRouter} />
    </ErrorBoundary>
  </StrictMode>,
)
