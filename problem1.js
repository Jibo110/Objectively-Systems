/* Problem 1 : There is a bug in the following React component. The component does not update the displayed count when the button is clicked. Find and fix the bug.  

import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count++);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}

export default Counter; */

// Solution: 


import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}

export default Counter;