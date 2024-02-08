
import { Routes, Route, Link } from 'react-router-dom'
import Blue from './Components/Blue'
import Red from './Components/Red'
import Home from './Components/Home'


function App() {
  

  return (
    
      <div id="container">
        <h1></h1>
        <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/Blue">Blue</Link>
          <Link to="/Red">Red</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/blue" element={<Blue/>} />
            <Route path="/red" element={<Red/>} />
          </Routes>
        </div>
      </div>
      
    
  )
}

export default App
