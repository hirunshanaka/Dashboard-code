import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { SideBar } from './dashboard/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen'>
      <Outlet/>
      <SideBar/>
    </div>
  )
}

export default App
