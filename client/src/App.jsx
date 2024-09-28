import { Outlet } from 'react-router-dom'
import './App.css'
import ResponsiveAppBar from './components/header/MiuiHeader.jsx'



function App() {
  

  return (
    <>
      
      <ResponsiveAppBar/>
        <main>
          <Outlet/>
        </main>
    </>
  )
}

export default App
