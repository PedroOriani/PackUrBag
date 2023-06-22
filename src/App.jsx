import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogIn from './pages/Login'
import SignIn from './pages/SignIn'
import HomePage from './pages/HomePage'
import NewTrip from './pages/NewTrip'
import Trip from './pages/Trip'
import Profile from './pages/profile'
import { useState } from 'react'

function App() {

  const [page, setPage] = useState('')
  const [name, setName] = useState('')

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LogIn name={name} setName={setName}/> } />
        <Route path='/signIn' element={ <SignIn /> } />
        <Route path='/homepage' element={ <HomePage page ={page} setPage={setPage} name={name}/> } />
        <Route path='/newtrip' element={ <NewTrip page ={page} setPage={setPage}/> } />
        <Route path='/trip/:id' element={ <Trip page ={page} setPage={setPage}/> } />
        <Route path='/profile' element={ <Profile page ={page} setPage={setPage} setName={setName}/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App