import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './HomePage'
import Layout from './Layout'
import Projects from './Projects'
import About from './About'
import Skills from './Skills'
function App() {
 

  return (
    <>
    <div>
      {/* <Background /> */}
    <BrowserRouter basename='/jabnia-portfolio/'>
      <Routes>
        <Route path='https://jabnia.github.io/jabnia-portfolio/' element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path='/jabnia-portfolio/projects' element={<Projects />}/>
          <Route path='/jabnia-portfolio/about' element={<About />}/>
          <Route path='/jabnia-portfolio/skills' element={<Skills />}/>
        </Route>
      </Routes>
    </BrowserRouter>

    </div>
    </>
  )
}

export default App
