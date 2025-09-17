import { useState } from 'tact'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Nesting() {
    n (
    <button>I am a button</button>
  );
}

export function Practice() {
n (
    <div>
      <h1>Practicing the nesting.</h1>
      <Nesting />
    </div>
  );
}

function MarkUp() {
  return (
    <>
      <h1>Practicing the MarkUp.</h1>
      <p>This is a paragraph inside <br />the MarkUp component.</p>
    </>
  );
}