import React from 'react';
import './RootComponent.css';


export const Header = () => {
  return (
    <header className="header">
      <h1>Welcome to My Simple Page</h1>
    </header>
  );
};

export const Content = () => {
  return (
    <main className="content">
      <h2>About This Page</h2>
      <p>
        This page is a simple example of how to use multiple named exports in React. 
        It also shows how to import styles from a separate CSS file.
      </p>
    </main>
  );
};

export const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 My Simple Website.</p>
    </footer>
  );
};


const RootComponent = () => {
  return (
    <div className="root-container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};
export default RootComponent;