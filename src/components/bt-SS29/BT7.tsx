import React, { useState } from 'react';

export default function BT7() {
    const [numbers, setNumbers] = useState<number[]>([]);
    const handleAddNumber = () => {
        const randomNumber = Math.ceil(Math.random() * 10);
        setNumbers([...numbers, randomNumber]);
    }

    return (
        <div>
            BT7
            <p>Mảng số: [{numbers.join(", ")}]</p>
            <button onClick={handleAddNumber}>Add element</button>
        </div>
    );
}
