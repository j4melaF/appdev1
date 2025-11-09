import { useState } from 'react'

import WelcomeMessage from './components/WelcomeMessage';

function App() {
  const [name, setName] = useState('Guest');

  return (
    <div>
      <WelcomeMessage name={name} />
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter your name" 
      />
    </div>
  )
}

export default App;