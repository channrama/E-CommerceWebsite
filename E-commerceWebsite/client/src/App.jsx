import {Router,Route, Routes} from 'react-router-dom'
import Layout from './components/layout'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import PageNotFound from './pages/PageNotFound'
import './App.css'

function App() {
  
  return (
    <>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/policy' element={<Policy/>}/>
    <Route path='/pagenotfound' element={<PageNotFound/>}/>
   </Routes>
    </>
  )
}

export default App
