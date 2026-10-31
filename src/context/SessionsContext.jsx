import { createContext, useContext, useState } from 'react'
import { sessions as initialSessions, courses } from '../data/mockData'

// The "channel" that carries session data to any component
const SessionsContext = createContext(null)

// Wraps the app and holds the sessions in state
export function SessionsProvider({ children }) {
  const [sessions, setSessions] = useState(initialSessions)

  // CREATE: add a new session, return its id
  function addSession(data) {
    const id = Date.now() // simple unique id (milliseconds since 1970)
    setSessions((prev) => [...prev, { ...data, id, attendeeIds: [] }])
    return id
  }

  // UPDATE: replace the fields of one session
  function updateSession(id, changes) {
    setSessions((prev) => prev.map((s) => (s.id === id ? { ...s, ...changes } : s)))
  }

  // DELETE: remove one session (used for "Cancel session")
  function deleteSession(id) {
    setSessions((prev) => prev.filter((s) => s.id !== id))
  }

  // Add a user to a session's attendees
  function joinSession(id, userId) {
    setSessions((prev) =>
      prev.map((s) =>
        s.id === id && !s.attendeeIds.includes(userId)
          ? { ...s, attendeeIds: [...s.attendeeIds, userId] }
          : s
      )
    )
  }

  // Remove a user from a session's attendees
  function leaveSession(id, userId) {
    setSessions((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, attendeeIds: s.attendeeIds.filter((uid) => uid !== userId) } : s
      )
    )
  }

  // READ helpers. Ids from the URL are text ("3"), so we convert with Number()
  const getSessionById = (id) => sessions.find((s) => s.id === Number(id))
  const getCourseById = (id) => courses.find((c) => c.id === Number(id))

  const value = {
    sessions, courses,
    addSession, updateSession, deleteSession, joinSession, leaveSession,
    getSessionById, getCourseById,
  }

  return <SessionsContext.Provider value={value}>{children}</SessionsContext.Provider>
}

// Shortcut for pages: const { sessions } = useSessions()
export function useSessions() {
  return useContext(SessionsContext)
}