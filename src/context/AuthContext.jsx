import { createContext, useContext, useState } from 'react'
import { users as initialUsers } from '../data/mockData'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(initialUsers)
  const [currentUser, setCurrentUser] = useState(null) // null = nobody logged in

  // LOGIN: find a user with this email and password
  // Returns { ok: true } or { ok: false, error: '...' }
  function login(email, password) {
    const user = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    )
    if (!user) return { ok: false, error: 'Incorrect email or password.' }
    setCurrentUser(user)
    return { ok: true }
  }

  // REGISTER: create a new user, then log them in
  function register(data) {
    const taken = users.some((u) => u.email.toLowerCase() === data.email.toLowerCase())
    if (taken) return { ok: false, error: 'An account with this email already exists.' }

    const newUser = { ...data, id: Date.now(), bio: data.bio || '' }
    setUsers((prev) => [...prev, newUser])
    setCurrentUser(newUser)
    return { ok: true }
  }

  function logout() {
    setCurrentUser(null)
  }

  // Used by Session Details and Tutor Profile to show the host's info
  const getUserById = (id) => users.find((u) => u.id === Number(id))

  const value = { users, currentUser, login, register, logout, getUserById }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Shortcut for pages: const { currentUser, login } = useAuth()
export function useAuth() {
  return useContext(AuthContext)
}