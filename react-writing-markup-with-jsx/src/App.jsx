import React from "react";

export default function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>Jamela's Demo</h1>
        <nav>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Sample Hero Section</h2>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="card">
          <h3>Interactive</h3>
          <p>Click buttons or use simple forms here.</p>
        </div>
        <div className="card">
          <h3>Responsive</h3>
          <p>Works well on any screen size.</p>
        </div>
        <div className="card">
          <h3>Clean</h3>
          <p>Simple structure, easy to read and edit.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Made a simple JSX demo</p>
      </footer>
    </div>
  );
}
