import React, { useState } from 'react';

// Hook Style
const CounterHookStyle = () => {
    const [value, setValue] = useState(0);
    return (
            <div>
                <h1>Hook Style [{value}]</h1>
                <button onClick={() => setValue(value - 1)}>-</button>
                <button onClick={() => setValue(value + 1)}>+</button>
            </div>
    );
};

export default CounterHookStyle;