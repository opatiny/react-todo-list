// function-based component! (vs class-based components)

import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>To Do List</h1>
      <Link style={linkStyle} to="/react-todo-list">
        Home
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to="/react-todo-list/about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: '#334',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};
