import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Vans from "./components/Vans"
import VanDetail from "./components/VanDetail"
import Footer from "./components/Footer"

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link className="header" to="/">#VANLIFE</Link>
        <div className="links">
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
        </div>
      </nav>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/vans' element={<Vans />}/>
            <Route path='/vans/:id' element={<VanDetail />}/>
        </Routes>
        <Footer />
  </BrowserRouter>
  )
}