import React from 'react'
import './App.css'
import NavBar from './componentes/NavBar'
import Home from './routes/home'
import EtiPersonalizadas from './routes/EtiPersonalizadas'
import Sellos from './componentes/Sellos'
import Footer from './componentes/Footer'
import { Routes, Route } from 'react-router-dom'
import QuienesSomos from './componentes/QuienesSomos'
function App() {
  return (
    <div>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/etiquetas-personalizadas' element={<EtiPersonalizadas/ >}/>
        <Route path='/sellos' element={<Sellos />}/>
        <Route path='/quienes-somos' element={<QuienesSomos/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}
export default App;