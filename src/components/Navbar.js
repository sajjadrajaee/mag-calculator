import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navTitle">Magician Calculator!</h1>
      <nav className="navLinks">
        <Link className="navItem" to="/">Home</Link>
        {' '}
        |
        {' '}
        <Link className="navItem" to="/calculator">Calculator</Link>
        {' '}
        |
        {' '}
        <Link className="navItem" to="/quote">quotes</Link>
      </nav>
    </div>
  );
}
