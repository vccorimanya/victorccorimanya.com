import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className=" flex flex-jc-c">
      <nav className=" flex flex-ai-c">
        <div className="header__logo">
          <Link to="/">
          <h3 className="">VCC</h3>
          </Link>
        </div>
        <ul className="flex l-style m-0">
          <li className="ml">
            <Link to="/">Home</Link>
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
