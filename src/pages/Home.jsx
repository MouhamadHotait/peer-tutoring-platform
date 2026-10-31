import { useSessions } from '../context/SessionsContext'

function Home() {
  const { sessions } = useSessions()

  return <h1 className="text-3xl font-bold">Home: {sessions.length} sessions available</h1>
}

export default Home