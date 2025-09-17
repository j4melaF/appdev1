
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Nesting() {
    n (
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

export default App;
// export default Practice;


