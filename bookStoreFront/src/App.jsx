import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// library
import { Route, Routes } from 'react-router-dom'
import DashboardPage from './dashboard/pages/dashboard'


// component users
import Landing from './pages/landing'


//dashboard admins
import AddBook from './dashboard/pages/addBook'
import DeleteBook from './dashboard/pages/deleteBook'
import UpdateBook from './dashboard/pages/updateBook'
import ViewBook from './dashboard/pages/viewBook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Landing/>}/>

          <Route path='dashboard' element={<DashboardPage/>}/>
          <Route path='dashboard/addBook' element={<AddBook/>}/>
          <Route path='dashboard/ViewBook/:id' element={<ViewBook/>}/>
          <Route path='dashboard/UpdateBook/:id' element={<UpdateBook/>}/>
          <Route path='dashboard/DeleteBook/:id' element={<DeleteBook/>}/>
      </Routes>

    </div>
 
  )
}

export default App
