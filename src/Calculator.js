import React from 'react';

class Calculator extends React.Component{
    state = {
        index: 0
    };

    add = () => {
        this.setState(current => ({index : current.index + 1}));
    }

    minus = () => {
        this.setState(current => ({index : current.index - 1}));
    }

    render(){
        return (
            <div>
                <h1>The number is [{this.state.index}]</h1>
                <button onClick={this.minus}>-</button>
                <button onClick={this.add}>+</button>
            </div>
        );
    }
}

export default Calculator;