import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>About Me</h1>

      <p><strong>Name:</strong> Jamela Fernandez</p>
      <p><strong>Course/Year:</strong> BS Information Technology 3rd Year - B</p>
      <p><strong>Fun Fact:</strong> Every time I hear music, my body gets triggered to dance.</p>

      <hr />

      <h2>Why I want to learn React?</h2>
      <p>
        React helps developers build user interfaces in a faster and more organized way through components. <br />
        React makes it eaiser to create dynamic, fast, and responsive user interfaces. <br />
        And I also noticed because one of my classmates said that it is easier to use React when building designs and easier to use overall
        <br /> because it allows developers to reuse components, which saves time and effort in coding.
      </p>
    </div>
    </>
  )
}

export default App
