import './App.css'
import Footer from './components/Footer'
import NavBar from './components/Navbar'
import AllSushi from './routes/AllSushi'
import Cart from './routes/Cart'
import Home from './routes/Home'
import Account  from './routes/Account'
import { Route, Routes } from 'react-router-dom'
import SingleSushi from './routes/SingleSushi'
import Admin from './routes/Admin'
import AddProduct from './routes/AddProduct'
import Checkout from './routes/Checkout'

function App() {


  return (
    <>
      <NavBar/>

      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/menu" element={<AllSushi/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/menu/:id" element={<SingleSushi/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/newproduct" element={<AddProduct/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
