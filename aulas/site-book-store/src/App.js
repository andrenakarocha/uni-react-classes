import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Categorias from './pages/categorias'
import Favoritos from './pages/favoritos'
import MinhaEstante from './pages/minhaEstante'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/categorias' element={<Categorias/>} />
        <Route path='/favoritos' element={<Favoritos/>} />
        <Route path='/minhaestante' element={<MinhaEstante/>} />
      </Routes>
    </Router>
  )
}

export default App;