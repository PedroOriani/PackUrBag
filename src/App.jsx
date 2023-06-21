import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogIn from './pages/Login'
import SignIn from './pages/SignIn'
import HomePage from './pages/HomePage'
import NewTrip from './pages/NewTrip'
import Trip from './pages/Trip'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LogIn /> } />
        <Route path='/signIn' element={ <SignIn /> } />
        <Route path='/homepage' element={ <HomePage /> } />
        <Route path='/newtrip' element={ <NewTrip /> } />
        <Route path='/trip/:id' element={ <Trip /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App