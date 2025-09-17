import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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