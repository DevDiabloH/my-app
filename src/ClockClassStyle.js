import React from 'react';

class ClockClassStyle extends React.Component{
    state = {
        date: new Date()
    };

    timeUpdate = () => {
        const newDate = new Date();
        this.setState(current => ({date: newDate}));
    }

    componentDidMount(){
        setInterval(this.timeUpdate, 1000);
    }

    render(){
        return (
            <div>
                <h4>
                    {this.state.date.getHours()}:
                    {this.state.date.getMinutes()}:
                    {this.state.date.getSeconds()}
                </h4>
            </div>
        );
    }
}

export default ClockClassStyle;