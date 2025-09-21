
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react';

function Nesting() {
    return (
    <button>I am a button</button>
  );
}

export function Practice() {
  return (
    <div>
      <h1>Practicing the nesting.</h1>
      <Nesting />
    </div>
  );
}

function AdminPanel() {
  return <h2>Welcome to the Admin Panel</h2>;
}

function LoginForm() {
  return <h2>Please log in to access the system</h2>;
}

function App() {
  const isLoggedIn = false; 

  return (
    <div>
      {isLoggedIn ? (
        <AdminPanel />
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

//export default App;
// export default Practice;

// const program = [
//   { title: 'BSIS', id: 1},
//   { title: 'BAB', id: 2},
//   { title: 'BSSW', id: 3},
// ];

// export default function ProgramList() {
//   const programItems = program.map((program) =>
//     <li key={program.id}>
//       {program.title}</li>
//     );

//   return (
//     <ul>
//       {programItems}
//     </ul>
//   );
// }

function ChangeTextButton() {
  const [text, setText] = useState("Before Click");
  
  function handleClick() {
    setText("After Click");
  }

  return (
    <button onClick={handleClick}>
      {text}
    </button>
  );
}

// export default ChangeTextButton;

function MyButton({count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}



export default function Counter() {
  const [count, setCount] = useState(0);
  
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}


