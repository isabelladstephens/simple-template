import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './Home.tsx'
import './index.css'

import Header from './components/Header.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" Component={App} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
