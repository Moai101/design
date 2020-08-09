import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Component} from './globalStyle'

function App() {
  return (
    <div className="App">
        <Component
    as="button"
    onClick={() => alert('It works!')}
  >
    Hello World!
  </Component>
    </div>
  );
}

export default App;
