import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './components/Homepage.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import FolderPage from './components/FolderPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/folder/:id' element={<FolderPage />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
