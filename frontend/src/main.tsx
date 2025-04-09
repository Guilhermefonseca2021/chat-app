import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from './components/provider.tsx'
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
    <Provider>
      <App />
    </Provider>
    </Router>
  </StrictMode>,
)
