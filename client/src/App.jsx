import './App.css'
import NavBar from './components/Navbar'
import AllSushi from './routes/AllSushi'
import Cart from './routes/Cart'
import Home from './routes/Home'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar/>

      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/menu" element={<AllSushi/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
