import './App.css'
import { HashRouter, Routes, Route } from 'react-router'
import HomePage from './HomePage'
import Layout from './Layout'
import Projects from './Projects'
import About from './About'
import Skills from './Skills'
function App() {
 

  return (
    <>
    <div>
      {/* <Background basename="/jabnia-portfolio/"/> */}
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/skills' element={<Skills />}/>
        </Route>
      </Routes>
    </HashRouter>

    </div>
    </>
  )
}

export default App
