import React, { useState } from 'react';

const ClockHookStyle = () => {
    const [date, setDate] = useState(new Date());

    setInterval(function(){
        setDate(new Date);
    }, 1000);

    return (
    <div>
        <h4>
            {date.getHours()}:
            {date.getMinutes()}:
            {date.getSeconds()}
        </h4>
    </div>
    );
}

export default ClockHookStyle;