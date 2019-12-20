import React from 'react';
//import PropTypes from "prop-types";
import './App.css';
import Calculator from './Calculator';
import Clock from './Clock';

class App extends React.Component{
  render(){
    return (
      <div>
        <Clock/>
        <Calculator/>
      </div>
    );
  }
}

export default App;
