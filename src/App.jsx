import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SessionList from './pages/SessionList'
import SessionDetails from './pages/SessionDetails'
import TutorProfile from './pages/TutorProfile'
import SessionForm from './pages/SessionForm'
import MySessions from './pages/MySessions'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
    <main className="min-h-screen p-8">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessions" element={<SessionList />} />
        <Route path="/sessions/new" element={<SessionForm />} />
        <Route path="/sessions/:id" element={<SessionDetails />} />
        <Route path="/sessions/:id/edit" element={<SessionForm />} />
        <Route path="/tutors/:id" element={<TutorProfile />} />
        <Route path="/dashboard" element={<MySessions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    </>
  )
}

export default App