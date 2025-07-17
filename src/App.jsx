import './App.css'
import About from './components/about/about';
import Home from './components/homepage/home';
import {BrowserRouter, Routes, Route} from 'react-router'
import Skills from './components/skill/skills';
import Myworks from './components/myworks/works';
import ContactMe from './components/contactme/contactme.jsx';
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/skills" element={<Skills />}></Route>
      <Route path="/myworks" element={<Myworks />} ></Route>
      <Route path="/contactme" element={<ContactMe/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
