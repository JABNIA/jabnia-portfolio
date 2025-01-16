import { Outlet } from 'react-router'
import NavBar from './NavBar'


function Layout() {
  return (
    <div style={{overflow: 'hidden'}}>
        <header>
            <NavBar />
        </header>
      <main>
        <Outlet />
      </main>
      <footer>
        &copy; Created By Jabnia
      </footer>
    </div>
  )
}

export default Layout
