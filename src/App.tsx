import { useState } from 'react'
import Navigation from './components/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navigation />
    </div>
  )
}

export default App
