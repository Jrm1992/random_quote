import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Container } from "./components/styled";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>

  </React.StrictMode>
)
