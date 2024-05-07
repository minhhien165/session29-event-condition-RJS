import React, { useState } from 'react';

export default function BT8() {
    const [count, setCount] = useState<number>(0);
    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            BT8
            <button onClick={handleClick}>Click me {count}</button>
        </div>
    );
}
