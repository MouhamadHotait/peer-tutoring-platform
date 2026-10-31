import { useSessions } from '../context/SessionsContext'
import Button from '../components/Button'
import Input from '../components/Input'

function Home() {
  const { sessions } = useSessions()

  return (
    <section className="flex max-w-md flex-col gap-4">
      <h1 className="text-3xl font-bold">Home: {sessions.length} sessions available</h1>
      <div className="flex gap-2">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
      </div>
      <Input id="test" label="Test input" placeholder="Type here" />
      <Input id="test2" label="Input with error" error="This field is required." />
    </section>
  )
}

export default Home