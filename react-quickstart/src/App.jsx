
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

function App() {
  return (
    <>
      <h1>Practicing the MarkUp.</h1>
      <p>This is a paragraph inside <br />the MarkUp component.</p>

      <img className="jam"  src="https://www.shutterstock.com/image-vector/cute-panda-dabbing-pose-cartoon-character-2471990065" alt="Cute Panda" />
    </>
  );
}

export default App;
// export default Practice;
