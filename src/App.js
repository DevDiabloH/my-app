import React from 'react';
//import PropTypes from "prop-types";
import './App.css';

import ClockClassStyle from './ClockClassStyle';
import ClockHookStyle from './ClockHookStyle';
import CounterClassStyle from './CounterClassStyle';
import CounterHookStyle from './CounterHookStyle';

class App extends React.Component{
  render(){
    return (
      <div>
        <ClockClassStyle/>
        <ClockHookStyle/>
        <CounterHookStyle/>
        <CounterClassStyle/>
      </div>
    );
  }
}

export default App;
