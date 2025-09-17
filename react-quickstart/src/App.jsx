
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
  const user = {
    name: "Jamela",
    imageUrl: "https://ph.pinterest.com/pin/3588874696346722/",
    imageSize: 250
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: "50%",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)"
        }}
      />
    </div>
  );
}


export default App;
// export default Practice;


