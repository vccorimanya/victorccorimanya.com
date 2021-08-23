import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="container flex flex-ai-c">
        <div className="header__logo">
          <h3 className="">VCC</h3>
        </div>
        <ul className="flex l-style m-0">
          <li className="ml">
            <Link to="/">Home</Link>
          </li>
          <li className="ml">
            <Link to="/projects">Projecs</Link>
          </li>
          <li className="ml">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="ml">
            <a href="https://github.com/vccorimanya" target="_blank" rel="noreferrer">GitHub</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
