// Entry point of all project (when npm run dev, it starts here)

// StrictMode: warning for old APIs, hook life cycle (like useEffect) or call function twice in dev mode to find bug
import { StrictMode } from 'react'

// createRoot: allow new rendering method (on React 18) like concurrent rendering
import { createRoot } from 'react-dom/client'

// Import for CSS's file for all of the project
import './index.css'

// Import the original component of the project, where start all the interface (giao dien)
import App from './App.tsx'

// Took card id="root" from index.html -> render all of the function in card #root -> put App inside StrictMode for sooner debug (!: non-null assertion)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)