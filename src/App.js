import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from "./Child";

function HelloType1(props){
  return <div>Hi {props.name}</div>
}

function HelloType2({name}){
  return <div>Hi {name}</div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Child/>
        <HelloType1 name="HJY"/>
        <HelloType2 name="HJY"/>
      </header>
    </div>
  );
}

export default App;
